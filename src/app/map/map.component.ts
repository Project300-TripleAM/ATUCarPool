import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private directionsService: any;
  private directionsRenderer: any;
  public selectedRoute: any;
  private map: any;
  private marker: any;
  private apiKey = environment.apiKey;
  public routes: { id: string; origin: { lat: number, lng: number }; destination: { lat: number, lng: number } }[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef, private API: APIService) {}

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
            this.routes = routes.map((route: any) => ({
              id: route.id,
              origin: { lat: route.origin.latitude, lng: route.origin.longitude },
              destination: { lat: route.destination.latitude, lng: route.destination.longitude }
            }));
            // After routes are fetched, we initialize the map
            this.initMap();
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
  
      // Define the callback function that will be called when the script is loaded
      script.onload = () => {
        console.log('Google Maps API script loaded successfully');
        // Resolve the promise to indicate that the script is loaded
        resolve();
      };
  
      // Append the script to the document
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
  
    // Manually trigger change detection to update the view
    this.cdr.detectChanges();
  }

  drawSelectedRoute(route: any) {
    const request = {
      origin: route.origin,
      destination: route.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    // Specify the type for 'response' and 'status'.
    this.directionsService.route(request, (response: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(response);
        const bounds = new google.maps.LatLngBounds();
  
        // Specify the type for 'leg'.
        response.routes[0].legs.forEach((leg: google.maps.DirectionsLeg) => {
          bounds.extend(leg.start_location);
          bounds.extend(leg.end_location);
        });
  
        this.map.fitBounds(bounds);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  }

  selectRoute(route: any) {
    this.selectedRoute = route;
  }
  
  checkAvailability(route: any) {
    // Handle the availability check logic here
    console.log('Checking availability for route:', route);
  }
}
