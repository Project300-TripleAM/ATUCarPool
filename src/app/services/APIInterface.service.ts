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
  //Get ROUTEs
  async getRoutes() {
    try {
      const response = await client.graphql({ query: queries.listRoutes });
      console.log(response.data.listRoutes.items);
      return response.data.listRoutes.items; //Return the routes
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
  async createUser(username: string, email: any, userSub: string) {
    try {
      const result = await client.graphql({
        query: mutations.createUser,
        variables: {
          input: {
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
}