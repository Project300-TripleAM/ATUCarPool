import { Injectable } from '@angular/core';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError, map, throwError } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
import * as queries from 'src/graphql/queries'
import * as mutations from 'src/graphql/mutations'
const client = generateClient();

@Injectable({
  providedIn: 'root'
})

export class APIInterfaceService {

  constructor(private apollo: Apollo) { }

//################################# GET QUERIES ###########################################
//Get all users
  async getUsers() {
    try {
      const users = await client.graphql({ query: queries.listUsers });
      return users; // Return the array
    } catch (error) {
      console.error('Error fetching drivers:', error);
      throw error; 
    }
  }
//Get by ID
async getUser(id: string) {
  try {
    const user = await client.graphql({ query: queries.getUser, variables: { id: id }});
    return user.data.getUser;
  } catch(error) {
    console.error('error fetching user:', error);
    throw error;
  }
}
//get by username
  //Get ROUTEs
  async getRoutes() {
    try {
      const response = await client.graphql({ query: queries.listRoutes });
      console.log(response.data.listRoutes.items);
      return response.data.listRoutes.items;
    } catch (error) {
      console.error('Error fetching routes:', error);
      throw error;
    }
  }

  //####################################################### UPDATE ################################
  async updateUser(id: any, username: any, email: any, userSub: any) {
    try {
      const response = await client.graphql({ 
        query: mutations.updateUser,
        variables: {
          input: {
            id: id,
            username: username,
            email: email,
            userSub: userSub
          }
        }
      });
      console.log('User updated:', response.data.updateUser);
      return response.data.updateUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error; 
    }
  }
  // ####################################################### MUTATIONS ################################
  async createUser(id:string,username: string, email: any, userSub: string) {
    try {
      const result = await client.graphql({
        query: mutations.createUser,
        variables: {
          input: {
            id,
            username,
            email,
            userSub 
          }
        }
      });
  
      console.log('User created:', result.data.createUser);
      return result.data.createUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; 
    }
  }
  async createRoute(input: any, condition?: any) {
    try {
      const response = await client.graphql({ 
        query: mutations.createRoute,
        variables: {
          input: input
        }
      });
      console.log('Route created:', response.data.createRoute);
      return response.data.createRoute;
    } catch (error) {
      console.error('Error creating route:', error);
      throw error; 
    }
  }
  
}
const getUserByUsernameQ = `query GetUsersByUsername($username: String!) {
  getUsersByUsername(username: $username) {
    items {
      id
      userSub
      username
      email
      driver {
        id
        name
        email
        carType
        createdAt
        updatedAt
      }
      rider {
        id
        name
        email
        createdAt
        updatedAt
        vehiclePassengersId
      }
      createdAt
      updatedAt
      userDriverId
      userRiderId
      owner
    }
  }
}`