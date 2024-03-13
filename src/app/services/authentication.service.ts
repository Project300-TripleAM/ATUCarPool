import { Injectable } from '@angular/core';
import { getCurrentUser } from 'aws-amplify/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }



}
async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}