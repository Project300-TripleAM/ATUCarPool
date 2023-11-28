import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private dummyUser = { username: 'dummyuser', password: 'password' };
  private loggedInUserName: string | null = null;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isAuthenticated = true;
      this.loggedInUserName = username;
      return true;
    } else {
      this.isAuthenticated = false;
      this.loggedInUserName = null;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.loggedInUserName = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUserName(): string {
    return this.loggedInUserName || '';
  }
}
