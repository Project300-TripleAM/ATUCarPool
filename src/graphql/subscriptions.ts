/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateDriver = /* GraphQL */ `subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
  onCreateDriver(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDriverSubscriptionVariables,
  APITypes.OnCreateDriverSubscription
>;
export const onUpdateDriver = /* GraphQL */ `subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
  onUpdateDriver(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDriverSubscriptionVariables,
  APITypes.OnUpdateDriverSubscription
>;
export const onDeleteDriver = /* GraphQL */ `subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
  onDeleteDriver(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDriverSubscriptionVariables,
  APITypes.OnDeleteDriverSubscription
>;
export const onCreateRider = /* GraphQL */ `subscription OnCreateRider($filter: ModelSubscriptionRiderFilterInput) {
  onCreateRider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRiderSubscriptionVariables,
  APITypes.OnCreateRiderSubscription
>;
export const onUpdateRider = /* GraphQL */ `subscription OnUpdateRider($filter: ModelSubscriptionRiderFilterInput) {
  onUpdateRider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRiderSubscriptionVariables,
  APITypes.OnUpdateRiderSubscription
>;
export const onDeleteRider = /* GraphQL */ `subscription OnDeleteRider($filter: ModelSubscriptionRiderFilterInput) {
  onDeleteRider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRiderSubscriptionVariables,
  APITypes.OnDeleteRiderSubscription
>;
export const onCreateVehicle = /* GraphQL */ `subscription OnCreateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
  onCreateVehicle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVehicleSubscriptionVariables,
  APITypes.OnCreateVehicleSubscription
>;
export const onUpdateVehicle = /* GraphQL */ `subscription OnUpdateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
  onUpdateVehicle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVehicleSubscriptionVariables,
  APITypes.OnUpdateVehicleSubscription
>;
export const onDeleteVehicle = /* GraphQL */ `subscription OnDeleteVehicle($filter: ModelSubscriptionVehicleFilterInput) {
  onDeleteVehicle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVehicleSubscriptionVariables,
  APITypes.OnDeleteVehicleSubscription
>;
export const onCreateTrip = /* GraphQL */ `subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
  onCreateTrip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTripSubscriptionVariables,
  APITypes.OnCreateTripSubscription
>;
export const onUpdateTrip = /* GraphQL */ `subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
  onUpdateTrip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTripSubscriptionVariables,
  APITypes.OnUpdateTripSubscription
>;
export const onDeleteTrip = /* GraphQL */ `subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
  onDeleteTrip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTripSubscriptionVariables,
  APITypes.OnDeleteTripSubscription
>;
export const onCreateRoute = /* GraphQL */ `subscription OnCreateRoute($filter: ModelSubscriptionRouteFilterInput) {
  onCreateRoute(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRouteSubscriptionVariables,
  APITypes.OnCreateRouteSubscription
>;
export const onUpdateRoute = /* GraphQL */ `subscription OnUpdateRoute($filter: ModelSubscriptionRouteFilterInput) {
  onUpdateRoute(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRouteSubscriptionVariables,
  APITypes.OnUpdateRouteSubscription
>;
export const onDeleteRoute = /* GraphQL */ `subscription OnDeleteRoute($filter: ModelSubscriptionRouteFilterInput) {
  onDeleteRoute(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRouteSubscriptionVariables,
  APITypes.OnDeleteRouteSubscription
>;
