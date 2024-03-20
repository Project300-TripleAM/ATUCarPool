/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userSub
    username
    email
    driver {
      id
      name
      email
      carType
      vehicles {
        nextToken
        __typename
      }
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      driverUserId
      __typename
    }
    rider {
      id
      name
      email
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      vehiclePassengersId
      riderUserId
      __typename
    }
    createdAt
    updatedAt
    userDriverId
    userRiderId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      rider {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      createdAt
      updatedAt
      userDriverId
      userRiderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getDriver = /* GraphQL */ `query GetDriver($id: ID!) {
  getDriver(id: $id) {
    id
    name
    email
    carType
    vehicles {
      items {
        id
        make
        model
        year
        createdAt
        updatedAt
        driverVehiclesId
        __typename
      }
      nextToken
      __typename
    }
    trips {
      items {
        id
        startTime
        endTime
        createdAt
        updatedAt
        driverTripsId
        riderTripsId
        routeTripsId
        __typename
      }
      nextToken
      __typename
    }
    routeId
    user {
      id
      userSub
      username
      email
      driver {
        id
        name
        email
        carType
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      rider {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      createdAt
      updatedAt
      userDriverId
      userRiderId
      __typename
    }
    createdAt
    updatedAt
    driverUserId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDriverQueryVariables, APITypes.GetDriverQuery>;
export const listDrivers = /* GraphQL */ `query ListDrivers(
  $filter: ModelDriverFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      carType
      vehicles {
        nextToken
        __typename
      }
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      driverUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDriversQueryVariables,
  APITypes.ListDriversQuery
>;
export const getRider = /* GraphQL */ `query GetRider($id: ID!) {
  getRider(id: $id) {
    id
    name
    email
    trips {
      items {
        id
        startTime
        endTime
        createdAt
        updatedAt
        driverTripsId
        riderTripsId
        routeTripsId
        __typename
      }
      nextToken
      __typename
    }
    routeId
    user {
      id
      userSub
      username
      email
      driver {
        id
        name
        email
        carType
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      rider {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      createdAt
      updatedAt
      userDriverId
      userRiderId
      __typename
    }
    createdAt
    updatedAt
    vehiclePassengersId
    riderUserId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRiderQueryVariables, APITypes.GetRiderQuery>;
export const listRiders = /* GraphQL */ `query ListRiders(
  $filter: ModelRiderFilterInput
  $limit: Int
  $nextToken: String
) {
  listRiders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      vehiclePassengersId
      riderUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRidersQueryVariables,
  APITypes.ListRidersQuery
>;
export const getVehicle = /* GraphQL */ `query GetVehicle($id: ID!) {
  getVehicle(id: $id) {
    id
    make
    model
    year
    driver {
      id
      name
      email
      carType
      vehicles {
        nextToken
        __typename
      }
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      driverUserId
      __typename
    }
    passengers {
      items {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    driverVehiclesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVehicleQueryVariables,
  APITypes.GetVehicleQuery
>;
export const listVehicles = /* GraphQL */ `query ListVehicles(
  $filter: ModelVehicleFilterInput
  $limit: Int
  $nextToken: String
) {
  listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      make
      model
      year
      driver {
        id
        name
        email
        carType
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      passengers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      driverVehiclesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVehiclesQueryVariables,
  APITypes.ListVehiclesQuery
>;
export const getTrip = /* GraphQL */ `query GetTrip($id: ID!) {
  getTrip(id: $id) {
    id
    driver {
      id
      name
      email
      carType
      vehicles {
        nextToken
        __typename
      }
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      driverUserId
      __typename
    }
    rider {
      id
      name
      email
      trips {
        nextToken
        __typename
      }
      routeId
      user {
        id
        userSub
        username
        email
        createdAt
        updatedAt
        userDriverId
        userRiderId
        __typename
      }
      createdAt
      updatedAt
      vehiclePassengersId
      riderUserId
      __typename
    }
    startTime
    endTime
    route {
      id
      origin {
        name
        latitude
        longitude
        __typename
      }
      destination {
        name
        latitude
        longitude
        __typename
      }
      trips {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    driverTripsId
    riderTripsId
    routeTripsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTripQueryVariables, APITypes.GetTripQuery>;
export const listTrips = /* GraphQL */ `query ListTrips(
  $filter: ModelTripFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      driver {
        id
        name
        email
        carType
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      rider {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      startTime
      endTime
      route {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      driverTripsId
      riderTripsId
      routeTripsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTripsQueryVariables, APITypes.ListTripsQuery>;
export const getRoute = /* GraphQL */ `query GetRoute($id: ID!) {
  getRoute(id: $id) {
    id
    origin {
      name
      latitude
      longitude
      __typename
    }
    destination {
      name
      latitude
      longitude
      __typename
    }
    trips {
      items {
        id
        startTime
        endTime
        createdAt
        updatedAt
        driverTripsId
        riderTripsId
        routeTripsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRouteQueryVariables, APITypes.GetRouteQuery>;
export const listRoutes = /* GraphQL */ `query ListRoutes(
  $filter: ModelRouteFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      origin {
        name
        latitude
        longitude
        __typename
      }
      destination {
        name
        latitude
        longitude
        __typename
      }
      trips {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoutesQueryVariables,
  APITypes.ListRoutesQuery
>;
export const usersByUsername = /* GraphQL */ `query UsersByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
        routeId
        createdAt
        updatedAt
        driverUserId
        __typename
      }
      rider {
        id
        name
        email
        routeId
        createdAt
        updatedAt
        vehiclePassengersId
        riderUserId
        __typename
      }
      createdAt
      updatedAt
      userDriverId
      userRiderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUsernameQueryVariables,
  APITypes.UsersByUsernameQuery
>;
