import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLoggedIn: boolean = false;
  private authSubscription!: Subscription;

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}



  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
