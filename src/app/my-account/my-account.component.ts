import { Component, OnInit } from '@angular/core';
import { APIService, Driver } from '../services/api.service';
import { getCurrentUser } from 'aws-amplify/auth';
import { UserRoleService } from '../services/user-role.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  users: Driver[] = []; // Define users as an array of Driver objects
  // Is an array for riders needed? do we have getRiders query in DB?  | riders: Rider[] = []; |
  passengers: any[] = [];
  recentTrips: any[] = []; // Define recentTrips to store trip information
  upcomingTrips: any[] = []; // Define upcomingTrips to store upcoming trip information 
  userRole: string = '';
  isMenuOpen: boolean = false;


  constructor(private apiService: APIService, private userRoleService: UserRoleService) {}

  ngOnInit(): void {
    // Fetch user data and recent trips data
    this.fetchUserData();
    this.fetchRecentTrips();
    this.fetchUpcomingTrips();
    this.userRole = this.userRoleService.getUserRole(); // Get the user's role from the service
    this.populatePassengers(); //Placeholder dummy data purposes only until configured in DB
  }

  // Fetch user data from the API service
  fetchUserData() {
    if (this.userRole === 'driver') {
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
    } else if (this.userRole === 'passenger') {
      // Fetch passengers if required
    }
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
    //replace with actual implementation, once we implement Driver / Rider Selection once users are saved into database
    this.upcomingTrips = [
      { origin: 'Upcoming Trip Origin Point ', destination: 'Upcoming Trip Destination ' },
    ];
  }

  // Populate passengers' details (Placeholder dummy data)
  populatePassengers() {
    // Dummy data for passengers (can be replaced with actual data from the backend)
    this.passengers = [
      { name: 'Jim Jones', pickupPoint: 'Enniscrone', destination: 'ATU Sligo' },
      { name: 'John James', pickupPoint:'Collooney', destination: 'ATU Sligo' },
      // Add more passengers' details as needed
    ];
  }

  // Toggle the visibility of the notification menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('button error');
  }
}
