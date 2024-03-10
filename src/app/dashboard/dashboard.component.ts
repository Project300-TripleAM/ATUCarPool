import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleSelectionComponent } from '../role-selection/role-selection.component';
import { UserRoleService } from '../services/user-role.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentTrips: any[] = []; // Placeholder for recent trips data
  isDriver: boolean = false;


  constructor(private router: Router, private userRoleService: UserRoleService) {} // Inject UserRoleService

  ngOnInit(): void {
    this.fetchRecentTrips(); // You can fetch recent trips data from your API or service here
    this.checkUserRole(); // Call the method to check user role
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

  checkUserRole(): void {
    const userRole = this.userRoleService.getUserRole(); // Get user role from service
    this.isDriver = userRole === 'driver';
  }
}
