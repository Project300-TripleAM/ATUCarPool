import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIInterfaceService} from '../services/APIInterface.service';
import { getCurrentUser } from 'aws-amplify/auth';
import { UserRoleService } from '../services/user-role.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../services/authentication.service';
import { Driver } from '../API.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  users: Driver[] = []; // Define users as an array of Driver objects
  passengers: any[] = []; // --TODO: Define users as an array of Passenger / Rider Objects
  recentTrips: any[] = []; // Define recentTrips to store trip information
  upcomingTrips: any[] = []; // Define upcomingTrips to store upcoming trip information
  userRole!: string;
  isMenuOpen: boolean = false;

  constructor(private apiService: APIInterfaceService, private userRoleService: UserRoleService, private router: Router,private auth:AuthenticationService) {}

  ngOnInit(): void {
    // Fetch user data and recent trips data
    //this.auth.currentAuthenticatedUser();

    this.fetchUserData();
    this.fetchRecentTrips();
    this.fetchUpcomingTrips();
    this.userRole = this.userRoleService.getUserRole();

    if (this.userRole === 'driver') {
      this.fetchPassengers();
    }
  }

  // Fetch user data from the API service
  fetchUserData() {
    this.apiService.getUsers().then((result: any) => {
      console.log('Result:', result);
      if (result.length > 0) {
        this.users = result.map((user: any) => ({ ...user })); // Copy each user object to a new array
        console.log('Users:', this.users);
      } else {
        console.log('No users found');
      }
    }).catch(error => {
      console.error('Error fetching user data:', error);
    });
  }
  // Fetches recent trips data (placeholder for now)
  fetchRecentTrips() {
    // TEMPORARY Placeholder data for recent trips
    // will populate when configured in backend and can update with accurate data
    this.recentTrips = [
      { Trip: 1, origin: 'Origin Point 1', destination: 'Destination 1', Date: '02/03/2024' },
      { Trip: 2, origin: 'Origin Point 2', destination: 'Destination 2', Date: '03/03/2024' },
      { Trip: 3, origin: 'Origin Point 3', destination: 'Destination 3', Date: '04/03/2024' }
    ];
  }

   // Fetch upcoming trips data from the API service
   fetchUpcomingTrips() {
    // Temporary Placeholder data for upcoming trips 
    // will populate when configured in backend and can update with accurate data
    this.upcomingTrips = [
      { origin: 'Upcoming Origin Point ', destination: 'Upcoming Destination ' },
    ];
  }

  fetchPassengers() {
    // Fetch passengers data from  API 
    // Assign the fetched data to the passengers array
    // Placeholder dummy data only!! 
    // will populate when configured in backend and can update with accurate data
    this.passengers = [
      { name: 'Jim Jones', pickupPoint: 'Enniscrone', destination: 'ATU Sligo' },
      { name: 'John James', pickupPoint:'Collooney', destination: 'ATU Sligo' }
    ];
  }

   // Toggle the visibility of the notification menu
   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('button error');
  }

  // Method to switch the user role between driver and passenger
  switchRole() {
    // Determine the new role based on the current role
    const newRole = this.userRole === 'driver' ? 'passenger' : 'driver';
    
    // Update the user's role in the user role service
    this.userRoleService.setUserRole(newRole);
    
    // Redirect to the appropriate dashboard based on the new role
    this.router.navigate([newRole === 'driver' ? '/driver-dashboard' : '/passenger-dashboard']);
  }

}