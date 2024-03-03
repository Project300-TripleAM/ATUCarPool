import { Component, OnInit } from '@angular/core';
import { APIService, Driver } from '../services/api.service';
import { getCurrentUser } from 'aws-amplify/auth';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {
  users: Driver[] = []; // Define users as an array of Driver objects

  constructor(private apiService: APIService) {
    
}

  ngOnInit(): void {
    this.apiService.getDrivers().subscribe({
      next: (result) => {
        console.log('Result:', result);
        if (result.length > 0) {
          this.users = [result[0]]; 
          console.log('Users:', this.users);
        } else {
          console.log('No drivers found');
        }
      },
      error: (error) => {
        console.error('GraphQL query error:', error);
      }
    });
  }
  async currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
      console.error('Error fetching current authenticated user:', err);
    }
  }
}


