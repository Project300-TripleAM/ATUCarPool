// role-selection.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { UserRoleService } from '../services/user-role.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {
  userSub?: string;

  constructor(private userRoleService: UserRoleService, private router: Router,private auth:AuthenticationService) {}
  @Output() userSubSelected: EventEmitter<string> = new EventEmitter<string>();

  /*selectRole(role: string) {
    this.userRoleService.setUserRole(role);
    
    // Navigate to the dashboard based on the selected role
    if (role === 'driver') {
      this.router.navigate(['/driver-dashboard']);
    } else if (role === 'passenger') {
      this.router.navigate(['/passenger-dashboard']);
    }
  }*/

  selectRole(role: string) {
    try {
      this.userSubSelected.emit(role); 
      if (role === 'driver') {
        this.router.navigate(['/driver-dashboard']);
      } else if (role === 'passenger') {
        this.router.navigate(['/passenger-dashboard']);
      }
    } catch (error) {
      console.error('Error selecting role:', error);
    }
  }
}
