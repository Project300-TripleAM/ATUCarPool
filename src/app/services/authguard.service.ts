/**
 * canActivate method to determine whether the user is allowed to access a route.
 * Checks if the user is logged in using the authentication service.
 * If the user is logged in, allows access; otherwise, redirects to the login page and denies access.
 *
 * @param route The activated route snapshot.
 * @param state The router state snapshot.
 * @returns True if the user is logged in and can access the route, false otherwise.
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}