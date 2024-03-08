import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentTrips: any[] = []; // Placeholder for recent trips data

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize any data or perform actions needed when the component is loaded
    // You can fetch recent trips data from your API or service here
    this.fetchRecentTrips();
  }

  logOut(): void {
    // Clear the user token from local storage
    localStorage.removeItem('userToken');
    
    // Use the Angular router to navigate to the login page
    this.router.navigate(['/login']);
  }

  goBack(): void {
    // Reset the selected route
  }

  // Mock function to simulate fetching recent trips data
  fetchRecentTrips(): void {
    // Example data - replace with actual data retrieval logic
    this.recentTrips = [
     
    ];
  }
}
