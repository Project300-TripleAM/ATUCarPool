/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDriver = /* GraphQL */ `mutation CreateDriver(
  $input: CreateDriverInput!
  $condition: ModelDriverConditionInput
) {
  createDriver(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDriverMutationVariables,
  APITypes.CreateDriverMutation
>;
export const updateDriver = /* GraphQL */ `mutation UpdateDriver(
  $input: UpdateDriverInput!
  $condition: ModelDriverConditionInput
) {
  updateDriver(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDriverMutationVariables,
  APITypes.UpdateDriverMutation
>;
export const deleteDriver = /* GraphQL */ `mutation DeleteDriver(
  $input: DeleteDriverInput!
  $condition: ModelDriverConditionInput
) {
  deleteDriver(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDriverMutationVariables,
  APITypes.DeleteDriverMutation
>;
export const createRider = /* GraphQL */ `mutation CreateRider(
  $input: CreateRiderInput!
  $condition: ModelRiderConditionInput
) {
  createRider(input: $input, condition: $condition) {
    id
    name
    email
    trips {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    vehiclePassengersId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRiderMutationVariables,
  APITypes.CreateRiderMutation
>;
export const updateRider = /* GraphQL */ `mutation UpdateRider(
  $input: UpdateRiderInput!
  $condition: ModelRiderConditionInput
) {
  updateRider(input: $input, condition: $condition) {
    id
    name
    email
    trips {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    vehiclePassengersId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRiderMutationVariables,
  APITypes.UpdateRiderMutation
>;
export const deleteRider = /* GraphQL */ `mutation DeleteRider(
  $input: DeleteRiderInput!
  $condition: ModelRiderConditionInput
) {
  deleteRider(input: $input, condition: $condition) {
    id
    name
    email
    trips {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    vehiclePassengersId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRiderMutationVariables,
  APITypes.DeleteRiderMutation
>;
export const createVehicle = /* GraphQL */ `mutation CreateVehicle(
  $input: CreateVehicleInput!
  $condition: ModelVehicleConditionInput
) {
  createVehicle(input: $input, condition: $condition) {
    id
    make
    model
    year
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
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
}
` as GeneratedMutation<
  APITypes.CreateVehicleMutationVariables,
  APITypes.CreateVehicleMutation
>;
export const updateVehicle = /* GraphQL */ `mutation UpdateVehicle(
  $input: UpdateVehicleInput!
  $condition: ModelVehicleConditionInput
) {
  updateVehicle(input: $input, condition: $condition) {
    id
    make
    model
    year
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
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
}
` as GeneratedMutation<
  APITypes.UpdateVehicleMutationVariables,
  APITypes.UpdateVehicleMutation
>;
export const deleteVehicle = /* GraphQL */ `mutation DeleteVehicle(
  $input: DeleteVehicleInput!
  $condition: ModelVehicleConditionInput
) {
  deleteVehicle(input: $input, condition: $condition) {
    id
    make
    model
    year
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
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
}
` as GeneratedMutation<
  APITypes.DeleteVehicleMutationVariables,
  APITypes.DeleteVehicleMutation
>;
export const createTrip = /* GraphQL */ `mutation CreateTrip(
  $input: CreateTripInput!
  $condition: ModelTripConditionInput
) {
  createTrip(input: $input, condition: $condition) {
    id
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
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
}
` as GeneratedMutation<
  APITypes.CreateTripMutationVariables,
  APITypes.CreateTripMutation
>;
export const updateTrip = /* GraphQL */ `mutation UpdateTrip(
  $input: UpdateTripInput!
  $condition: ModelTripConditionInput
) {
  updateTrip(input: $input, condition: $condition) {
    id
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
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
}
` as GeneratedMutation<
  APITypes.UpdateTripMutationVariables,
  APITypes.UpdateTripMutation
>;
export const deleteTrip = /* GraphQL */ `mutation DeleteTrip(
  $input: DeleteTripInput!
  $condition: ModelTripConditionInput
) {
  deleteTrip(input: $input, condition: $condition) {
    id
    driver {
      id
      name
      email
      carType
      createdAt
      updatedAt
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
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
}
` as GeneratedMutation<
  APITypes.DeleteTripMutationVariables,
  APITypes.DeleteTripMutation
>;
export const createRoute = /* GraphQL */ `mutation CreateRoute(
  $input: CreateRouteInput!
  $condition: ModelRouteConditionInput
) {
  createRoute(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateRouteMutationVariables,
  APITypes.CreateRouteMutation
>;
export const updateRoute = /* GraphQL */ `mutation UpdateRoute(
  $input: UpdateRouteInput!
  $condition: ModelRouteConditionInput
) {
  updateRoute(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateRouteMutationVariables,
  APITypes.UpdateRouteMutation
>;
export const deleteRoute = /* GraphQL */ `mutation DeleteRoute(
  $input: DeleteRouteInput!
  $condition: ModelRouteConditionInput
) {
  deleteRoute(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteRouteMutationVariables,
  APITypes.DeleteRouteMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
      __typename
    }
    createdAt
    updatedAt
    userDriverId
    userRiderId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
      __typename
    }
    createdAt
    updatedAt
    userDriverId
    userRiderId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
      __typename
    }
    rider {
      id
      name
      email
      createdAt
      updatedAt
      vehiclePassengersId
      __typename
    }
    createdAt
    updatedAt
    userDriverId
    userRiderId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
