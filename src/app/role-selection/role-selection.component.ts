// role-selection.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { UserRoleService } from '../services/user-role.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {
  constructor(private userRoleService: UserRoleService, private router: Router) {}

  selectRole(role: string) {
    this.userRoleService.setUserRole(role);
    
    // Navigate to the dashboard based on the selected role
    if (role === 'driver') {
      this.router.navigate(['/driver-dashboard']);
    } else if (role === 'passenger') {
      this.router.navigate(['/passenger-dashboard']);
    }
  }
}
