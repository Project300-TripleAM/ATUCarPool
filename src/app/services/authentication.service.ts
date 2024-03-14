import { Injectable } from '@angular/core';
import { getCurrentUser } from 'aws-amplify/auth';
import { APIService } from './API.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private API:APIService) { }

  async currentAuthenticatedUser() {
  try {
    console.log("Starting currentAuthenticatedUser function...");
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`Sign in dets`, JSON.stringify(signInDetails, null, 2));

    // Ensure signInDetails is not null or undefined
    if (signInDetails) {
      console.log("Calling createUser function...");
      this.API.createUser(username, signInDetails?.loginId);
      console.log(`User created. ${username} - ${signInDetails.loginId}`);
    } else {
      console.log("signInDetails is null or undefined.");
    }
  } catch (err) {
    console.log("Error in currentAuthenticatedUser function:", err);
  }
}


}
