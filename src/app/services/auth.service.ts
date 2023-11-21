import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//user auth service
export class AuthService {
  //Flag for log in state
  private isAuthenticated = false;
  private dummyUser = { username: 'dummyuser', password: 'password' };
  //username state storage
  private loggedInUserName!: string;

  constructor() {}

  login(username: string, password: string): boolean {
    // Dummy authentication logic (replace this with actual authentication where we have it running)
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isAuthenticated = true; //flag = true. we are log in
      this.loggedInUserName = username;
      return true;

    } else { //failed log in
      this.isAuthenticated = false; 
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.loggedInUserName = 'null'; //cannnot be null workaround for now
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUserName(): string {
    return this.loggedInUserName || ''; // return an empty string as string cannot be type null error
  }
}