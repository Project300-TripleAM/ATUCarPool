import { Injectable } from '@angular/core';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateDriver: OnCreateDriverSubscription;
  onUpdateDriver: OnUpdateDriverSubscription;
  onDeleteDriver: OnDeleteDriverSubscription;
  onCreateRider: OnCreateRiderSubscription;
  onUpdateRider: OnUpdateRiderSubscription;
  onDeleteRider: OnDeleteRiderSubscription;
  onCreateVehicle: OnCreateVehicleSubscription;
  onUpdateVehicle: OnUpdateVehicleSubscription;
  onDeleteVehicle: OnDeleteVehicleSubscription;
  onCreateTrip: OnCreateTripSubscription;
  onUpdateTrip: OnUpdateTripSubscription;
  onDeleteTrip: OnDeleteTripSubscription;
  onCreateRoute: OnCreateRouteSubscription;
  onUpdateRoute: OnUpdateRouteSubscription;
  onDeleteRoute: OnDeleteRouteSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
};

export type CreateDriverInput = {
  id?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
};

export type ModelDriverConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  carType?: ModelStringInput | null;
  and?: Array<ModelDriverConditionInput | null> | null;
  or?: Array<ModelDriverConditionInput | null> | null;
  not?: ModelDriverConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Driver = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: ModelVehicleConnection | null;
  trips?: ModelTripConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelVehicleConnection = {
  __typename: "ModelVehicleConnection";
  items: Array<Vehicle | null>;
  nextToken?: string | null;
};

export type Vehicle = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: Driver | null;
  passengers?: ModelRiderConnection | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type ModelRiderConnection = {
  __typename: "ModelRiderConnection";
  items: Array<Rider | null>;
  nextToken?: string | null;
};

export type Rider = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: ModelTripConnection | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection";
  items: Array<Trip | null>;
  nextToken?: string | null;
};

export type Trip = {
  __typename: "Trip";
  id: string;
  driver?: Driver | null;
  rider?: Rider | null;
  startTime: string;
  endTime?: string | null;
  route?: Route | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type Route = {
  __typename: "Route";
  id: string;
  origin: Location;
  destination: Location;
  trips?: ModelTripConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type Location = {
  __typename: "Location";
  name: string;
  latitude: number;
  longitude: number;
};

export type UpdateDriverInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  carType?: string | null;
};

export type DeleteDriverInput = {
  id: string;
};

export type CreateRiderInput = {
  id?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  vehiclePassengersId?: string | null;
};

export type ModelRiderConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelRiderConditionInput | null> | null;
  or?: Array<ModelRiderConditionInput | null> | null;
  not?: ModelRiderConditionInput | null;
  vehiclePassengersId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateRiderInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  vehiclePassengersId?: string | null;
};

export type DeleteRiderInput = {
  id: string;
};

export type CreateVehicleInput = {
  id?: string | null;
  make: string;
  model: string;
  year: string;
  driverVehiclesId?: string | null;
};

export type ModelVehicleConditionInput = {
  make?: ModelStringInput | null;
  model?: ModelStringInput | null;
  year?: ModelStringInput | null;
  and?: Array<ModelVehicleConditionInput | null> | null;
  or?: Array<ModelVehicleConditionInput | null> | null;
  not?: ModelVehicleConditionInput | null;
  driverVehiclesId?: ModelIDInput | null;
};

export type UpdateVehicleInput = {
  id: string;
  make?: string | null;
  model?: string | null;
  year?: string | null;
  driverVehiclesId?: string | null;
};

export type DeleteVehicleInput = {
  id: string;
};

export type CreateTripInput = {
  id?: string | null;
  startTime: string;
  endTime?: string | null;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type ModelTripConditionInput = {
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  and?: Array<ModelTripConditionInput | null> | null;
  or?: Array<ModelTripConditionInput | null> | null;
  not?: ModelTripConditionInput | null;
  driverTripsId?: ModelIDInput | null;
  riderTripsId?: ModelIDInput | null;
  routeTripsId?: ModelIDInput | null;
};

export type UpdateTripInput = {
  id: string;
  startTime?: string | null;
  endTime?: string | null;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type DeleteTripInput = {
  id: string;
};

export type CreateRouteInput = {
  id?: string | null;
  origin: LocationInput;
  destination: LocationInput;
};

export type LocationInput = {
  name: string;
  latitude: number;
  longitude: number;
};

export type ModelRouteConditionInput = {
  and?: Array<ModelRouteConditionInput | null> | null;
  or?: Array<ModelRouteConditionInput | null> | null;
  not?: ModelRouteConditionInput | null;
};

export type UpdateRouteInput = {
  id: string;
  origin?: LocationInput | null;
  destination?: LocationInput | null;
};

export type DeleteRouteInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  userDriverId?: string | null;
  userRiderId?: string | null;
};

export type ModelUserConditionInput = {
  userSub?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userDriverId?: ModelIDInput | null;
  userRiderId?: ModelIDInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: Driver | null;
  rider?: Rider | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type UpdateUserInput = {
  id: string;
  userSub?: string | null;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  userDriverId?: string | null;
  userRiderId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  carType?: ModelStringInput | null;
  and?: Array<ModelDriverFilterInput | null> | null;
  or?: Array<ModelDriverFilterInput | null> | null;
  not?: ModelDriverFilterInput | null;
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection";
  items: Array<Driver | null>;
  nextToken?: string | null;
};

export type ModelRiderFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelRiderFilterInput | null> | null;
  or?: Array<ModelRiderFilterInput | null> | null;
  not?: ModelRiderFilterInput | null;
  vehiclePassengersId?: ModelIDInput | null;
};

export type ModelVehicleFilterInput = {
  id?: ModelIDInput | null;
  make?: ModelStringInput | null;
  model?: ModelStringInput | null;
  year?: ModelStringInput | null;
  and?: Array<ModelVehicleFilterInput | null> | null;
  or?: Array<ModelVehicleFilterInput | null> | null;
  not?: ModelVehicleFilterInput | null;
  driverVehiclesId?: ModelIDInput | null;
};

export type ModelTripFilterInput = {
  id?: ModelIDInput | null;
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  and?: Array<ModelTripFilterInput | null> | null;
  or?: Array<ModelTripFilterInput | null> | null;
  not?: ModelTripFilterInput | null;
  driverTripsId?: ModelIDInput | null;
  riderTripsId?: ModelIDInput | null;
  routeTripsId?: ModelIDInput | null;
};

export type ModelRouteFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelRouteFilterInput | null> | null;
  or?: Array<ModelRouteFilterInput | null> | null;
  not?: ModelRouteFilterInput | null;
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection";
  items: Array<Route | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  userSub?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userDriverId?: ModelIDInput | null;
  userRiderId?: ModelIDInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionDriverFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  carType?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDriverFilterInput | null> | null;
  or?: Array<ModelSubscriptionDriverFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRiderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRiderFilterInput | null> | null;
  or?: Array<ModelSubscriptionRiderFilterInput | null> | null;
};

export type ModelSubscriptionVehicleFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  make?: ModelSubscriptionStringInput | null;
  model?: ModelSubscriptionStringInput | null;
  year?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionVehicleFilterInput | null> | null;
  or?: Array<ModelSubscriptionVehicleFilterInput | null> | null;
};

export type ModelSubscriptionTripFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  startTime?: ModelSubscriptionStringInput | null;
  endTime?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTripFilterInput | null> | null;
  or?: Array<ModelSubscriptionTripFilterInput | null> | null;
};

export type ModelSubscriptionRouteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionRouteFilterInput | null> | null;
  or?: Array<ModelSubscriptionRouteFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userSub?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type CreateDriverMutation = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDriverMutation = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDriverMutation = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRiderMutation = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type UpdateRiderMutation = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type DeleteRiderMutation = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type CreateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type UpdateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type DeleteVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type CreateTripMutation = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type UpdateTripMutation = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type DeleteTripMutation = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type CreateRouteMutation = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRouteMutation = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRouteMutation = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type GetDriverQuery = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDriversQuery = {
  __typename: "ModelDriverConnection";
  items: Array<{
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRiderQuery = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type ListRidersQuery = {
  __typename: "ModelRiderConnection";
  items: Array<{
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetVehicleQuery = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type ListVehiclesQuery = {
  __typename: "ModelVehicleConnection";
  items: Array<{
    __typename: "Vehicle";
    id: string;
    make: string;
    model: string;
    year: string;
    createdAt: string;
    updatedAt: string;
    driverVehiclesId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetTripQuery = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type ListTripsQuery = {
  __typename: "ModelTripConnection";
  items: Array<{
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
    routeTripsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetRouteQuery = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoutesQuery = {
  __typename: "ModelRouteConnection";
  items: Array<{
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    userSub: string;
    username: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    userDriverId?: string | null;
    userRiderId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateDriverSubscription = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDriverSubscription = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDriverSubscription = {
  __typename: "Driver";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  carType?: string | null;
  vehicles?: {
    __typename: "ModelVehicleConnection";
    nextToken?: string | null;
  } | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRiderSubscription = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type OnUpdateRiderSubscription = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type OnDeleteRiderSubscription = {
  __typename: "Rider";
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  vehiclePassengersId?: string | null;
};

export type OnCreateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type OnUpdateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type OnDeleteVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  make: string;
  model: string;
  year: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  passengers?: {
    __typename: "ModelRiderConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverVehiclesId?: string | null;
};

export type OnCreateTripSubscription = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type OnUpdateTripSubscription = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type OnDeleteTripSubscription = {
  __typename: "Trip";
  id: string;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  startTime: string;
  endTime?: string | null;
  route?: {
    __typename: "Route";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
  routeTripsId?: string | null;
};

export type OnCreateRouteSubscription = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRouteSubscription = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRouteSubscription = {
  __typename: "Route";
  id: string;
  origin: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    __typename: "Location";
    name: string;
    latitude: number;
    longitude: number;
  };
  trips?: {
    __typename: "ModelTripConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  userSub: string;
  username: string;
  email: string;
  phone?: string | null;
  driver?: {
    __typename: "Driver";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    carType?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  rider?: {
    __typename: "Rider";
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    vehiclePassengersId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userDriverId?: string | null;
  userRiderId?: string | null;
  owner?: string | null;
};
@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(private apollo: Apollo) { }

  getDrivers(): Observable<any[]> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query ListDrivers(
          $filter: ModelDriverFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              name
              email
              phone
              carType
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      `
    }).valueChanges.pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error('GraphQL query error');
        }
        return result.data.listDrivers.items;
      })
    );
  }

  getRoutes(): Observable<any[]> {
    return this.apollo.watchQuery<any>({
      query: gql`query ListRoutes {
        listRoutes {
          items {
            id
            origin {
              latitude
              longitude
            }
            destination {
              latitude
              longitude
            }
          }
        }
      }`
    }).valueChanges.pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error('GraphQL query error');
        }
        return result.data.listRoutes.items;
      })
    );
  }
  createUser(username: string, email: string, phone: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation CreateUser($username: String!, $email: String!, $phone: String) {
          createUser(input: { username: $username, email: $email, phone: $phone }) {
            id
            username
            email
            phone
          }
        }
      `,
      variables: {
        username,
        email,
        phone
      }
    });
  }

  createTrip(driverId: string, riderId: string, startTime: string, endTime: string, routeId: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation CreateTrip($driverId: ID!, $riderId: ID!, $startTime: AWSDateTime!, $endTime: AWSDateTime, $routeId: ID!) {
          createTrip(input: { driverId: $driverId, riderId: $riderId, startTime: $startTime, endTime: $endTime, routeId: $routeId }) {
            id
            startTime
            endTime
            driver {
              id
              name
              email
            }
            rider {
              id
              name
              email
            }
            route {
              id
              origin {
                name
                latitude
                longitude
              }
              destination {
                name
                latitude
                longitude
              }
            }
          }
        }
      `,
      variables: {
        driverId,
        riderId,
        startTime,
        endTime,
        routeId
      }
    });
  }

  createDriver(name: string, email: string, phone: string, carType: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation CreateDriver($name: String!, $email: String!, $phone: String, $carType: String) {
          createDriver(input: { name: $name, email: $email, phone: $phone, carType: $carType }) {
            id
            name
            email
            phone
            carType
          }
        }
      `,
      variables: {
        name,
        email,
        phone,
        carType
      }
    });
  }

  createRider(name: string, email: string, phone: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation CreateRider($name: String!, $email: String!, $phone: String) {
          createRider(input: { name: $name, email: $email, phone: $phone }) {
            id
            name
            email
            phone
          }
        }
      `,
      variables: {
        name,
        email,
        phone
      }
    });
  }
}
