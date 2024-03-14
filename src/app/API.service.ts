/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDriverInput = {
  id?: string | null,
  name: string,
  email: string,
  carType?: string | null,
};

export type ModelDriverConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  carType?: ModelStringInput | null,
  and?: Array< ModelDriverConditionInput | null > | null,
  or?: Array< ModelDriverConditionInput | null > | null,
  not?: ModelDriverConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Driver = {
  __typename: "Driver",
  id: string,
  name: string,
  email: string,
  carType?: string | null,
  vehicles?: ModelVehicleConnection | null,
  trips?: ModelTripConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVehicleConnection = {
  __typename: "ModelVehicleConnection",
  items:  Array<Vehicle | null >,
  nextToken?: string | null,
};

export type Vehicle = {
  __typename: "Vehicle",
  id: string,
  make: string,
  model: string,
  year: string,
  driver?: Driver | null,
  passengers?: ModelRiderConnection | null,
  createdAt: string,
  updatedAt: string,
  driverVehiclesId?: string | null,
};

export type ModelRiderConnection = {
  __typename: "ModelRiderConnection",
  items:  Array<Rider | null >,
  nextToken?: string | null,
};

export type Rider = {
  __typename: "Rider",
  id: string,
  name: string,
  email: string,
  trips?: ModelTripConnection | null,
  createdAt: string,
  updatedAt: string,
  vehiclePassengersId?: string | null,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
};

export type Trip = {
  __typename: "Trip",
  id: string,
  driver?: Driver | null,
  rider?: Rider | null,
  startTime: string,
  endTime?: string | null,
  route?: Route | null,
  createdAt: string,
  updatedAt: string,
  driverTripsId?: string | null,
  riderTripsId?: string | null,
  routeTripsId?: string | null,
};

export type Route = {
  __typename: "Route",
  id: string,
  origin: Location,
  destination: Location,
  trips?: ModelTripConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  name: string,
  latitude: number,
  longitude: number,
};

export type UpdateDriverInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  carType?: string | null,
};

export type DeleteDriverInput = {
  id: string,
};

export type CreateRiderInput = {
  id?: string | null,
  name: string,
  email: string,
  vehiclePassengersId?: string | null,
};

export type ModelRiderConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelRiderConditionInput | null > | null,
  or?: Array< ModelRiderConditionInput | null > | null,
  not?: ModelRiderConditionInput | null,
  vehiclePassengersId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateRiderInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  vehiclePassengersId?: string | null,
};

export type DeleteRiderInput = {
  id: string,
};

export type CreateVehicleInput = {
  id?: string | null,
  make: string,
  model: string,
  year: string,
  driverVehiclesId?: string | null,
};

export type ModelVehicleConditionInput = {
  make?: ModelStringInput | null,
  model?: ModelStringInput | null,
  year?: ModelStringInput | null,
  and?: Array< ModelVehicleConditionInput | null > | null,
  or?: Array< ModelVehicleConditionInput | null > | null,
  not?: ModelVehicleConditionInput | null,
  driverVehiclesId?: ModelIDInput | null,
};

export type UpdateVehicleInput = {
  id: string,
  make?: string | null,
  model?: string | null,
  year?: string | null,
  driverVehiclesId?: string | null,
};

export type DeleteVehicleInput = {
  id: string,
};

export type CreateTripInput = {
  id?: string | null,
  startTime: string,
  endTime?: string | null,
  driverTripsId?: string | null,
  riderTripsId?: string | null,
  routeTripsId?: string | null,
};

export type ModelTripConditionInput = {
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
  driverTripsId?: ModelIDInput | null,
  riderTripsId?: ModelIDInput | null,
  routeTripsId?: ModelIDInput | null,
};

export type UpdateTripInput = {
  id: string,
  startTime?: string | null,
  endTime?: string | null,
  driverTripsId?: string | null,
  riderTripsId?: string | null,
  routeTripsId?: string | null,
};

export type DeleteTripInput = {
  id: string,
};

export type CreateRouteInput = {
  id?: string | null,
  origin: LocationInput,
  destination: LocationInput,
};

export type LocationInput = {
  name: string,
  latitude: number,
  longitude: number,
};

export type ModelRouteConditionInput = {
  and?: Array< ModelRouteConditionInput | null > | null,
  or?: Array< ModelRouteConditionInput | null > | null,
  not?: ModelRouteConditionInput | null,
};

export type UpdateRouteInput = {
  id: string,
  origin?: LocationInput | null,
  destination?: LocationInput | null,
};

export type DeleteRouteInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  userSub: string,
  username: string,
  email: string,
  userDriverId?: string | null,
  userRiderId?: string | null,
};

export type ModelUserConditionInput = {
  userSub?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userDriverId?: ModelIDInput | null,
  userRiderId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  userSub: string,
  username: string,
  email: string,
  driver?: Driver | null,
  rider?: Rider | null,
  createdAt: string,
  updatedAt: string,
  userDriverId?: string | null,
  userRiderId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  userSub?: string | null,
  username?: string | null,
  email?: string | null,
  userDriverId?: string | null,
  userRiderId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  carType?: ModelStringInput | null,
  and?: Array< ModelDriverFilterInput | null > | null,
  or?: Array< ModelDriverFilterInput | null > | null,
  not?: ModelDriverFilterInput | null,
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection",
  items:  Array<Driver | null >,
  nextToken?: string | null,
};

export type ModelRiderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelRiderFilterInput | null > | null,
  or?: Array< ModelRiderFilterInput | null > | null,
  not?: ModelRiderFilterInput | null,
  vehiclePassengersId?: ModelIDInput | null,
};

export type ModelVehicleFilterInput = {
  id?: ModelIDInput | null,
  make?: ModelStringInput | null,
  model?: ModelStringInput | null,
  year?: ModelStringInput | null,
  and?: Array< ModelVehicleFilterInput | null > | null,
  or?: Array< ModelVehicleFilterInput | null > | null,
  not?: ModelVehicleFilterInput | null,
  driverVehiclesId?: ModelIDInput | null,
};

export type ModelTripFilterInput = {
  id?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelTripFilterInput | null > | null,
  or?: Array< ModelTripFilterInput | null > | null,
  not?: ModelTripFilterInput | null,
  driverTripsId?: ModelIDInput | null,
  riderTripsId?: ModelIDInput | null,
  routeTripsId?: ModelIDInput | null,
};

export type ModelRouteFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelRouteFilterInput | null > | null,
  or?: Array< ModelRouteFilterInput | null > | null,
  not?: ModelRouteFilterInput | null,
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection",
  items:  Array<Route | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userDriverId?: ModelIDInput | null,
  userRiderId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDriverFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  carType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRiderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRiderFilterInput | null > | null,
  or?: Array< ModelSubscriptionRiderFilterInput | null > | null,
};

export type ModelSubscriptionVehicleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  make?: ModelSubscriptionStringInput | null,
  model?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVehicleFilterInput | null > | null,
  or?: Array< ModelSubscriptionVehicleFilterInput | null > | null,
};

export type ModelSubscriptionTripFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
};

export type ModelSubscriptionRouteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRouteFilterInput | null > | null,
  or?: Array< ModelSubscriptionRouteFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userSub?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateDriverMutationVariables = {
  input: CreateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type CreateDriverMutation = {
  createDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDriverMutationVariables = {
  input: UpdateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type UpdateDriverMutation = {
  updateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDriverMutationVariables = {
  input: DeleteDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type DeleteDriverMutation = {
  deleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRiderMutationVariables = {
  input: CreateRiderInput,
  condition?: ModelRiderConditionInput | null,
};

export type CreateRiderMutation = {
  createRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type UpdateRiderMutationVariables = {
  input: UpdateRiderInput,
  condition?: ModelRiderConditionInput | null,
};

export type UpdateRiderMutation = {
  updateRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type DeleteRiderMutationVariables = {
  input: DeleteRiderInput,
  condition?: ModelRiderConditionInput | null,
};

export type DeleteRiderMutation = {
  deleteRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type CreateVehicleMutationVariables = {
  input: CreateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type CreateVehicleMutation = {
  createVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type UpdateVehicleMutationVariables = {
  input: UpdateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type UpdateVehicleMutation = {
  updateVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type DeleteVehicleMutationVariables = {
  input: DeleteVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type DeleteVehicleMutation = {
  deleteVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type CreateTripMutationVariables = {
  input: CreateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type UpdateTripMutationVariables = {
  input: UpdateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type UpdateTripMutation = {
  updateTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type DeleteTripMutationVariables = {
  input: DeleteTripInput,
  condition?: ModelTripConditionInput | null,
};

export type DeleteTripMutation = {
  deleteTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type CreateRouteMutationVariables = {
  input: CreateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type CreateRouteMutation = {
  createRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRouteMutationVariables = {
  input: UpdateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type UpdateRouteMutation = {
  updateRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRouteMutationVariables = {
  input: DeleteRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type DeleteRouteMutation = {
  deleteRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetDriverQueryVariables = {
  id: string,
};

export type GetDriverQuery = {
  getDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversQuery = {
  listDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRiderQueryVariables = {
  id: string,
};

export type GetRiderQuery = {
  getRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type ListRidersQueryVariables = {
  filter?: ModelRiderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRidersQuery = {
  listRiders?:  {
    __typename: "ModelRiderConnection",
    items:  Array< {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVehicleQueryVariables = {
  id: string,
};

export type GetVehicleQuery = {
  getVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type ListVehiclesQueryVariables = {
  filter?: ModelVehicleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVehiclesQuery = {
  listVehicles?:  {
    __typename: "ModelVehicleConnection",
    items:  Array< {
      __typename: "Vehicle",
      id: string,
      make: string,
      model: string,
      year: string,
      createdAt: string,
      updatedAt: string,
      driverVehiclesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      startTime: string,
      endTime?: string | null,
      createdAt: string,
      updatedAt: string,
      driverTripsId?: string | null,
      riderTripsId?: string | null,
      routeTripsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRouteQueryVariables = {
  id: string,
};

export type GetRouteQuery = {
  getRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutesQuery = {
  listRoutes?:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userSub: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      userDriverId?: string | null,
      userRiderId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnCreateDriverSubscription = {
  onCreateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnUpdateDriverSubscription = {
  onUpdateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnDeleteDriverSubscription = {
  onDeleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    email: string,
    carType?: string | null,
    vehicles?:  {
      __typename: "ModelVehicleConnection",
      nextToken?: string | null,
    } | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRiderSubscriptionVariables = {
  filter?: ModelSubscriptionRiderFilterInput | null,
};

export type OnCreateRiderSubscription = {
  onCreateRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type OnUpdateRiderSubscriptionVariables = {
  filter?: ModelSubscriptionRiderFilterInput | null,
};

export type OnUpdateRiderSubscription = {
  onUpdateRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type OnDeleteRiderSubscriptionVariables = {
  filter?: ModelSubscriptionRiderFilterInput | null,
};

export type OnDeleteRiderSubscription = {
  onDeleteRider?:  {
    __typename: "Rider",
    id: string,
    name: string,
    email: string,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    vehiclePassengersId?: string | null,
  } | null,
};

export type OnCreateVehicleSubscriptionVariables = {
  filter?: ModelSubscriptionVehicleFilterInput | null,
};

export type OnCreateVehicleSubscription = {
  onCreateVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type OnUpdateVehicleSubscriptionVariables = {
  filter?: ModelSubscriptionVehicleFilterInput | null,
};

export type OnUpdateVehicleSubscription = {
  onUpdateVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type OnDeleteVehicleSubscriptionVariables = {
  filter?: ModelSubscriptionVehicleFilterInput | null,
};

export type OnDeleteVehicleSubscription = {
  onDeleteVehicle?:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    year: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    passengers?:  {
      __typename: "ModelRiderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverVehiclesId?: string | null,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    startTime: string,
    endTime?: string | null,
    route?:  {
      __typename: "Route",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    driverTripsId?: string | null,
    riderTripsId?: string | null,
    routeTripsId?: string | null,
  } | null,
};

export type OnCreateRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
};

export type OnCreateRouteSubscription = {
  onCreateRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRouteSubscriptionVariables = {
  filter?: ModelSubscriptionRouteFilterInput | null,
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute?:  {
    __typename: "Route",
    id: string,
    origin:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    destination:  {
      __typename: "Location",
      name: string,
      latitude: number,
      longitude: number,
    },
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userSub: string,
    username: string,
    email: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      email: string,
      carType?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rider?:  {
      __typename: "Rider",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      vehiclePassengersId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDriverId?: string | null,
    userRiderId?: string | null,
    owner?: string | null,
  } | null,
};
