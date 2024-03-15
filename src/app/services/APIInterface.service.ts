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

  // Simple query
  async getUsers() {
    try {
      const users = await client.graphql({ query: queries.listUsers });
      return users; // Return the array
    } catch (error) {
      console.error('Error fetching drivers:', error);
      throw error; 
    }
  }
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