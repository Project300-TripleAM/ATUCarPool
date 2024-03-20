import { Injectable } from '@angular/core';
import { getCurrentUser } from 'aws-amplify/auth';
import { APIInterfaceService } from './APIInterface.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private API:APIInterfaceService) { }

  async currentAuthenticatedUser(userSub: string) {
    try {
      console.log("Starting currentAuthenticatedUser function...");
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`Sign in dets`, JSON.stringify(signInDetails, null, 2));

      const existingUser = await this.API.getUser(username);
      if(existingUser){
        console.log(`User with username ${username} already exists. Updating subscription.`);

      await this.API.updateUser(existingUser.id, username, signInDetails?.loginId, userSub);
      console.log(`Subscription updated for user ${username}`);
    } else {

      if (signInDetails) {
        console.log("Calling createUser function...");
        await this.API.createUser(username, signInDetails?.loginId, userSub);
        console.log(`User created. ${username}`);
      } else {
        console.log("signInDetails is null or undefined.");
      }
    }
  } catch (err) {
    console.log("Error in currentAuthenticatedUser function:", err);
    throw err; 
  }
}
}
