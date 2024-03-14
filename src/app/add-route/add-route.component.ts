// add-route.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent {
  public route: {
    origin: string,
    destination: string,
    transportType: string
  } = {
    origin: '',
    destination: '',
    transportType: ''
  };

  constructor(private router: Router) {}

  navigateToPreviousRoute() {
    this.router.navigate(['/driver-dashboard']); // Navigates back to the drivers dashboard
  }

  navigateToMap() {
    this.router.navigate(['/map']); // Navigates to the map 
}
}
