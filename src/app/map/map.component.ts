import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
import {} from 'googlemaps'; //medium.com work around see src/index.d.ts

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{
  private directionsService: any;
  private directionsRenderer: any;
  public selectedRoute: any;
  private map: any;
  private marker: any;
  private apiKey = environment.apiKey;
  public routes: { id: string; origin: google.maps.LatLng; destination: google.maps.LatLng }[] = [];
  constructor(private router: Router, private cdr: ChangeDetectorRef, private API:APIService) {}

  async ngOnInit() {
    (window as any).initMap = this.initMap.bind(this);
    try {
      // Load Google Maps script
      await this.loadGoogleMapsScript();
      // Now that the script is loaded, fetch routes and draw them
      this.API.getRoutes().subscribe(
        (result: any) => {
          const routes = result; // Accessing the entire result object
          console.log('API Response - Routes:', routes);
          if (routes && routes.length > 0) {
            const routeDataArray = routes.map((route: any) => {
              const origin = new google.maps.LatLng(route.origin.latitude, route.origin.longitude);
              const destination = new google.maps.LatLng(route.destination.latitude, route.destination.longitude);
              return {
                id: route.id,
                origin: origin,
                destination: destination
              };
            });
            this.drawRoutes(routeDataArray); // Draw routes
          } else {
            console.log('No routes found');
          }
        },
        (error: any) => {
          console.error('Error fetching routes:', error);
        }
      );
    } catch (error) {
      console.error('Error loading Google Maps script:', error);
    }
  }
  
  loadGoogleMapsScript() {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=geometry&callback=initMap`;
      script.async = true;
      script.defer = true;
  
      //Define the callback function that will be called when the script is loaded, issue with map db query passing before map initialised
      script.onload = () => {
        console.log('Google Maps API script loaded successfully');
        //Resolve the promise to indicate that the script is loaded
        resolve();
      };
  
      //Append the script to the document
      document.head.appendChild(script);
    });
  }
  
  initMap(): void {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }
    const initialPosition = { lat: 54.278422, lng: -8.460434 };
    this.map = new google.maps.Map(mapElement, {
      zoom: 12,
      center: initialPosition,
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: initialPosition,
      title: 'ATU, Sligo'
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true
    });
  
    //Manually trigger change detection to update the view
    this.cdr.detectChanges();
    //Get user's location
    this.getCurrentLocation();
  }
  
  drawRoutes(routes: { id: string; origin: google.maps.LatLng; destination: google.maps.LatLng }[]): void {
    //create an array to store references to all route polylines
    const routePolylines: google.maps.Polyline[] = [];
  
    routes.forEach((route) => {
      const request = {
        origin: route.origin,
        destination: route.destination,
        travelMode: 'DRIVING'
      };
  
      this.directionsService.route(request, (response: any, status: string) => {
        if (status === 'OK') {
          const routePolyline = new google.maps.Polyline({
            path: response.routes[0].overview_path,
            strokeColor: '#FF0000', //Red color for the route
            strokeOpacity: 0.5, // reduce fidelty to distingush from other selected route
            strokeWeight: 2,
            map: this.map //raw the route immediately on the map
          });                                      
  
          //click event listener to the polyline
          routePolyline.addListener('click', () => {
            //Highlight the clicked route and fade out the rest
            routePolylines.forEach((polyline) => {
              if (polyline === routePolyline) {
                polyline.setOptions({ strokeOpacity: 1.0 }); // Highlight clicked route
              } else {
                polyline.setOptions({ strokeOpacity: 0.2 }); //Fade out other routes when event triggered
              }
            });
          });
  
          // Add the polyline to the routePolylines array
          routePolylines.push(routePolyline);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    });
  }
    
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map.setCenter(pos);
        this.marker.setPosition(pos);
      }, () => {
        this.handleLocationError(true, this.marker.getPosition());
      });
    } else {
      this.handleLocationError(false, this.marker.getPosition());
    }
  }

  handleLocationError(browserHasGeolocation: boolean, pos: google.maps.LatLng) {
    console.error(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

  drawSelectedRoute(route: any) {
    // Your implementation logic here
  }
}
