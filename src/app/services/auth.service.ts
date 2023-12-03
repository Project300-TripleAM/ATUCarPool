import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private dummyUser = { username: 'dummyuser', password: 'password' };

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isAuthenticated.next(true);
      return true;
    } else {
      this.isAuthenticated.next(false);
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.isAuthenticated;
  }
}
