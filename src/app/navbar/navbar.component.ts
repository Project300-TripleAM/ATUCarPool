import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn: boolean = false;
  private authSubscription!: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn().subscribe(
      (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
        this.changeDetector.detectChanges();
      }
    );
  }
  

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
