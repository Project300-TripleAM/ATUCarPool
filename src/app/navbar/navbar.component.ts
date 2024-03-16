import { Component, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { getCurrentUser, signOut } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { UserRoleService } from '../services/user-role.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatMenu) menu!: MatMenu; // Add the menu property
  isLoggedIn: boolean = false;
  isDriver: boolean = false;
  hasSelectedRole: boolean = false;
  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  constructor(
    private router: Router,
    private userRoleService: UserRoleService,
    private breakpointObserver: BreakpointObserver
  ) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signedIn') {
        this.isLoggedIn = true;
      } else if (payload.event === 'signedOut') {
        this.isLoggedIn = false;
      }
      setTimeout(() => this.sidenav.close());
    });

    this.checkUserSignInStatus();
    this.checkUserRole();

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  ngOnDestroy() {
  }

  private async checkUserSignInStatus() {
    try {
      await getCurrentUser();
      this.isLoggedIn = true;
      const userRole = this.userRoleService.getUserRole();
      if (userRole) {
        this.hasSelectedRole = true;
        this.isDriver = userRole === 'driver';
      }
    } catch (error) {
      this.isLoggedIn = false;
    }
  }

  private checkUserRole() {
    this.userRoleService.userRole$.subscribe((role: string) => {
      this.isDriver = role === 'driver';
      this.hasSelectedRole = true;
    });
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

  // Toggle the visibility of the notification menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('button error');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!event.target.closest('.notification-menu')) {
      // Clicked outside the notification menu, close it
      this.isMenuOpen = false;
    }
  }
}
