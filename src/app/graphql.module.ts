import { Apollo, APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://idoduis3qzacxacra2tn6mfeyi.appsync-api.eu-west-1.amazonaws.com/graphql';

export function createApollo(httpLink: HttpLink) {
  // Define a function to set the necessary headers for AWS AppSync API key authentication
  const apiKeyAuth = setContext((operation, context) => ({
    headers: {
      'x-api-key': 'da2-7zi6bt4wqfgzzi3gtw2h5pgda4',
    },
  }));

// Create the HTTP link for Apollo Client
  const http = httpLink.create({ uri });

// Combine the API key authentication link with the HTTP link
  const link = ApolloLink.from([apiKeyAuth, http]);

  // Create the Apollo Client instance 
  const cache = new InMemoryCache();
  return {
    link,
    cache,
  };
}

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
  ],
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}