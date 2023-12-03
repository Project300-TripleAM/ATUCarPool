import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router'; // Import the Router class
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private directionsService: any;
  private directionsRenderer: any;
  private selectedRoute: any;
  private map: any;
  private marker: any;
  private apiKey = environment.apiKey;
  public routes: { id: number; origin: string; destination: string }[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    (window as any).initMap = this.initMap.bind(this);
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=geometry&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  initMap(): void {
    const initialPosition = { lat: 54.278422, lng: -8.460434 };
    this.map = new google.maps.Map(document.getElementById('map'), {
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

    // Define and populate the route data
    this.routes = [
      { id: 1, origin: 'Bury St, Ballina, Co. Mayo, F26 K597', destination: 'Ash Ln, Ballytivnan, Sligo' },
      { id: 2, origin: 'Providence Rd, Foxford, Co. Mayo, F26 H9E4', destination: 'Ash Ln, Ballytivnan, Sligo' },
    ];

    // Draw routes on the map
    this.routes.forEach(route => {
      this.drawRoute(route);
    });

    // Manually trigger change detection to update the view
    this.cdr.detectChanges();
  }

  drawRoute(route: { id: number, origin: string, destination: string }): void {
    const request = {
      origin: route.origin,
      destination: route.destination,
      travelMode: 'DRIVING'
    };

    this.directionsService.route(request, (result: any, status: string) => {
      if (status === 'OK') {
        const routePolyline = new google.maps.Polyline({
          path: result.routes[0].overview_path,
          strokeColor: '#FF0000', // Red color for the route
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        routePolyline.setMap(this.map);

        // Add a click event listener to the polyline
        routePolyline.addListener('click', () => {
          this.selectedRoute = route;
          this.displaySelectedRoute();
        });
      }
    });
  }

  displaySelectedRoute(): void {
    // Implement logic to display details of the selected route
    console.log('Selected Route:', this.selectedRoute);
  }

  logOut(): void {
    // Clear the user token from local storage
    localStorage.removeItem('userToken');
    
    // Use the Angular router to navigate to the login page
    this.router.navigate(['/login']);
  }
}
