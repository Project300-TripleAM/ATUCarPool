import { Component, OnInit } from '@angular/core';
import { APIService, Driver } from '../services/api.service';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  users: Driver[] = []; // Define users as an array of Driver objects
  recentTrips: any[] = []; // Define recentTrips to store trip information
  upcomingTrips: any[] = []; // Define upcomingTrips to store upcoming trip information (Riders only - refer to method on line 53)

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    // Fetch user data and recent trips data
    this.fetchUserData();
    this.fetchRecentTrips();
    this.fetchUpcomingTrips();
  }

  // Fetch user data from the API service
  fetchUserData() {
    this.apiService.getDrivers().subscribe({
      next: (result) => {
        console.log('Result:', result);
        if (result.length > 0) {
          this.users = [result[0]]; 
          console.log('Users:', this.users);
        } else {
          console.log('No drivers found');
        }
      },
      error: (error) => {
        console.error('GraphQL query error:', error);
      }
    });
  }

  // Fetches recent trips data (placeholder for now)
  fetchRecentTrips() {
    // TEMPORARY  Placeholder data for recent trips
    this.recentTrips = [
      { Trip: 1, origin: 'Origin Point 1', destination: 'Destination 1', Date: '02/03/2024' },
      { Trip: 2, origin: 'Origin Point 2', destination: 'Destination 2', Date: '03/03/2024' },
      { Trip: 3, origin: 'Origin Point 3', destination: 'Destination 3', Date: '04/03/2024' }
    ];
  }

   // Fetch upcoming trips data from the API service
   fetchUpcomingTrips() {
    // Temporary Placeholder data for upcoming trips 
    //replace with actual implementation, once we implement Driver / Rider Selection
    //this would only show for riders after selecting a route with drivers acceptance?
    this.upcomingTrips = [
      { origin: 'Upcoming Origin Point ', destination: 'Upcoming Destination ' },
    ];
  }
}
