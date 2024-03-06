import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { getCurrentUser, signOut } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
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
  }

  ngOnDestroy() {
    // Clean up the Hub listener when the component is destroyed
    // Check the AWS Amplify documentation on how to remove listeners correctly
  }

  private async checkUserSignInStatus() {
    try {
      await getCurrentUser();
      this.isLoggedIn = true;
    } catch (error) {
      this.isLoggedIn = false;
    }
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
