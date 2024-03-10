// role-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserRoleService } from './user-role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userRoleService: UserRoleService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.userRoleService.getUserRole();

    if (userRole === 'driver') {
      return true;
    } else if (userRole === 'passenger') {
      return true;
    } else {
      this.router.navigate(['/default-dashboard']);
      return false;
    }
  }
}
