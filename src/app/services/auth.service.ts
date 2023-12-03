import { Injectable } from '@angular/core';
import { CognitoUser, CognitoUserPool, AuthenticationDetails, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { AuthData } from './auth-data';
import { UserData } from './user-data';


@Injectable({
  providedIn: 'root',
})
//Taken from AWS application link for Cognito pool, this is our authication service
export class AuthService {
  //Flag for log in state 
  private isAuthenticated = false;
  private userPoolId = 'eu-west-1_7Quk239cZ';
  private clientId = '706nirobearg3c6ccbkn534p20';

//create an instance of the CognitoUserPool
  private userPool = new CognitoUserPool({
    UserPoolId: this.userPoolId,
    ClientId: this.clientId,
  });

  //Store thje logged in user
  private loggedInUserName!: string;

  constructor() {}

  // Method for handling login
async login(username: string, password: string): Promise<void> {
  // Set up authentication data
  const authData: AuthData = { Username: username, Password: password };
  //Create an instance of AuthenticationDetails with the authentication data
  const authenticationDetails = new AuthenticationDetails(authData);
  // Set up user data
  const userData: UserData = { Username: username, Pool: this.userPool };
  //Create a CognitoUser instance with the user data
  const cognitoUser = new CognitoUser(userData);

  try {
    // Authenticate the user and handle the login success
    const session = await this.authenticateUser(cognitoUser, authenticationDetails);
    this.loginSuccess(session);
  } catch (error) {
    // Handle login failure
    this.loginFailure(error);
  }
}

// Method to authenticate the user
private authenticateUser(cognitoUser: CognitoUser, authenticationDetails: AuthenticationDetails): Promise<any> {
  return new Promise((resolve, reject) => {
    // Authenticate the user using CognitoUser's authenticateUser method
    cognitoUser.authenticateUser(authenticationDetails, {
      // Resolve the promise on success
      onSuccess: resolve,
      //Reject the promise onfailure
      onFailure: reject,
    });
  });
}

// Method to handle login success
private loginSuccess(session: any): void {
  // Set the flag to true and store the username
  this.isAuthenticated = true;
  this.loggedInUserName = session.idToken.payload.username;
}

// Method to handle login failure
private loginFailure(error: any): void {
  // Set flag to false and throw the error
  this.isAuthenticated = false;
  throw error;
}

//logout
logout(): void {
  // Get te current user
  const cognitoUser = this.userPool.getCurrentUser();
  // user is found, sign them out
  if (cognitoUser) {
    cognitoUser.signOut();

//user registration
register(username: string, password: string, email: string, name: string, gender: string, birthdate: string, phoneNumber: string): Promise<void> {
  //attribute list for user registration init
  const attributeList: CognitoUserAttribute[] = [
    new CognitoUserAttribute({ Name: 'email', Value: email }),
    new CognitoUserAttribute({ Name: 'name', Value: name }),
    new CognitoUserAttribute({ Name: 'gender', Value: gender }),
    new CognitoUserAttribute({ Name: 'birthdate', Value: birthdate }),
    new CognitoUserAttribute({ Name: 'phone_number', Value: phoneNumber }),
  ];

  // Return a Promise for the registration operation
  return new Promise((resolve, reject) => {
    // Perform user registration
    this.userPool.signUp(username, password, attributeList, null!, (err, result) => {
      if (err) {
        //error occurs, reject the Promise
        reject(err);
      } else {
        //whenregistration is successful, set authentication flag to true and store the username
        this.isAuthenticated = true;
        this.loggedInUserName = username;
        //Resolve the Promise
        resolve();
      }
    });
  });
}
  //checks user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
//returns the logged in user
  getLoggedInUserName(): string {
    return this.loggedInUserName; 
  }
}
