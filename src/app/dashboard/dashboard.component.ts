import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{


  constructor(private router: Router) {}
  logOut(): void {
    // Clear the user token from local storage
    localStorage.removeItem('userToken');
    
    // Use the Angular router to navigate to the login page
    this.router.navigate(['/login']);
  }
  goBack(): void {
    // Reset the selected route
    
  }
  
}
