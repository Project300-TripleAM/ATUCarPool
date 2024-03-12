import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { getCurrentUser, signOut } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { UserRoleService } from '../services/user-role.service'; // Import the user role service

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn: boolean = false;
  isDriver: boolean = false; // Add a variable to track the user's role
  hasSelectedRole: boolean = false; // Add a variable to track whether the user has selected a role

  constructor(private router: Router, private userRoleService: UserRoleService) {
    // Setting up the Hub listener for authentication events
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signedIn') {
        this.isLoggedIn = true;
      } else if (payload.event === 'signedOut') {
        this.isLoggedIn = false;
        
      }
      // Make sure to apply the changes
      setTimeout(() => this.sidenav.close());
    });

    // Check the user's sign-in status when the component initializes
    this.checkUserSignInStatus();
    this.checkUserRole();
  }

  ngOnDestroy() {
    // Clean up the Hub listener when the component is destroyed
    // Check the AWS Amplify documentation on how to remove listeners correctly
  }

  private async checkUserSignInStatus() {
    try {
      await getCurrentUser();
      this.isLoggedIn = true;
      // Check if the user has already selected a role
      const userRole = this.userRoleService.getUserRole();
      if (userRole) {
        this.hasSelectedRole = true;
        this.isDriver = userRole === 'driver'; // Update driver status
      }
    } catch (error) {
      this.isLoggedIn = false;
    }
  }

  private checkUserRole() {
    // Subscribe to changes in the user role
    this.userRoleService.userRole$.subscribe((role: string) => {
      this.isDriver = role === 'driver';
      this.hasSelectedRole = true;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  async logout() {
    try {
      await signOut();
      this.isLoggedIn = false;
      this.router.navigate(['/login']).then(() => {
        this.sidenav.close();
      });
    } catch (error) {
      console.error('Error during sign out: ', error);
    }
  }
}
