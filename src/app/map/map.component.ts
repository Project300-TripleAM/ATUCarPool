import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { APIInterfaceService } from '../services/APIInterface.service';
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
  public routes: { id: string; origin: {name: string, lat: number, lng: number }; destination: { name: string, lat: number, lng: number } }[] = [];
  public estimatedTime: string = '';
  availableRoutes: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private API: APIInterfaceService) {}
  overlay: boolean = false;
  async ngOnInit() {
      (window as any).initMap = this.initMap.bind(this);
      try {
        // Load Google Maps script
        await this.loadGoogleMapsScript();
        // Now that the script is loaded, fetch routes and draw them
        const routes = await this.API.getRoutes();
        console.log('API Response - Routes:', routes);
        if (routes && routes.length > 0) {
          this.routes = routes.map((route: any) => ({
            id: route.id,
            origin: { name: route.origin.name, lat: route.origin.latitude, lng: route.origin.longitude},
            destination: {name: route.destination.name, lat: route.destination.latitude, lng: route.destination.longitude }
          })).sort((a, b) => a.origin.name.localeCompare(b.origin.name));
          // After routes are fetched, we initialize the map
          this.initMap();
        } else {
          console.log('No routes found');
        }
      } catch (error) {
        console.error('Error loading Google Maps script or fetching routes:', error);
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
          if (route === this.selectedRoute) {
            this.estimatedTime = leg.duration.text; // Extract estimated time for selected route
          }
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
  
  async checkAvailability(route: any) {
    try {
      this.overlay = true;
      const trip = await this.API.getTrip(route.id);
      if (trip) {
        console.log('Trips found for route:', route);
        console.log('Trips:', trip);
        this.availableRoutes = trip;
      } else {
        console.log('No trips found for route:', route);
        this.availableRoutes = []; 
      }
    } catch (error) {
      console.error('Error checking availability for route:', error);
    }
  }
  closeOverlay() {
    this.overlay = false; 
  }
  requestRide(route:any){

  }

  // function to flip route to act as return route
  flipRoute() {
    if (this.selectedRoute) {
      const temp = { ...this.selectedRoute.origin }; // Create a copy of the origin
      this.selectedRoute.origin = { ...this.selectedRoute.destination }; // Set the origin to the destination
      this.selectedRoute.destination = temp; // Set the destination to the original origin
      // Redraw the route on the map
      this.drawSelectedRoute(this.selectedRoute);
    } else {
      console.error('No route selected.');
    }
  }
}
