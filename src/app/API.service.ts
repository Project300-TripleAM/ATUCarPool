/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import { generateClient } from "@aws-amplify/api";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

const client = generateClient();

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
  providedIn: "root"
})
export class APIService {
  async CreateDriver(
    input: CreateDriverInput,
    condition?: ModelDriverConditionInput
  ): Promise<CreateDriverMutation> {
    const statement = `mutation CreateDriver($input: CreateDriverInput!, $condition: ModelDriverConditionInput) {
        createDriver(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDriverMutation>response.data.createDriver;
  }
  async UpdateDriver(
    input: UpdateDriverInput,
    condition?: ModelDriverConditionInput
  ): Promise<UpdateDriverMutation> {
    const statement = `mutation UpdateDriver($input: UpdateDriverInput!, $condition: ModelDriverConditionInput) {
        updateDriver(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDriverMutation>response.data.updateDriver;
  }
  async DeleteDriver(
    input: DeleteDriverInput,
    condition?: ModelDriverConditionInput
  ): Promise<DeleteDriverMutation> {
    const statement = `mutation DeleteDriver($input: DeleteDriverInput!, $condition: ModelDriverConditionInput) {
        deleteDriver(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDriverMutation>response.data.deleteDriver;
  }
  async CreateRider(
    input: CreateRiderInput,
    condition?: ModelRiderConditionInput
  ): Promise<CreateRiderMutation> {
    const statement = `mutation CreateRider($input: CreateRiderInput!, $condition: ModelRiderConditionInput) {
        createRider(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRiderMutation>response.data.createRider;
  }
  async UpdateRider(
    input: UpdateRiderInput,
    condition?: ModelRiderConditionInput
  ): Promise<UpdateRiderMutation> {
    const statement = `mutation UpdateRider($input: UpdateRiderInput!, $condition: ModelRiderConditionInput) {
        updateRider(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRiderMutation>response.data.updateRider;
  }
  async DeleteRider(
    input: DeleteRiderInput,
    condition?: ModelRiderConditionInput
  ): Promise<DeleteRiderMutation> {
    const statement = `mutation DeleteRider($input: DeleteRiderInput!, $condition: ModelRiderConditionInput) {
        deleteRider(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRiderMutation>response.data.deleteRider;
  }
  async CreateVehicle(
    input: CreateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<CreateVehicleMutation> {
    const statement = `mutation CreateVehicle($input: CreateVehicleInput!, $condition: ModelVehicleConditionInput) {
        createVehicle(input: $input, condition: $condition) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVehicleMutation>response.data.createVehicle;
  }
  async UpdateVehicle(
    input: UpdateVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<UpdateVehicleMutation> {
    const statement = `mutation UpdateVehicle($input: UpdateVehicleInput!, $condition: ModelVehicleConditionInput) {
        updateVehicle(input: $input, condition: $condition) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVehicleMutation>response.data.updateVehicle;
  }
  async DeleteVehicle(
    input: DeleteVehicleInput,
    condition?: ModelVehicleConditionInput
  ): Promise<DeleteVehicleMutation> {
    const statement = `mutation DeleteVehicle($input: DeleteVehicleInput!, $condition: ModelVehicleConditionInput) {
        deleteVehicle(input: $input, condition: $condition) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVehicleMutation>response.data.deleteVehicle;
  }
  async CreateTrip(
    input: CreateTripInput,
    condition?: ModelTripConditionInput
  ): Promise<CreateTripMutation> {
    const statement = `mutation CreateTrip($input: CreateTripInput!, $condition: ModelTripConditionInput) {
        createTrip(input: $input, condition: $condition) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTripMutation>response.data.createTrip;
  }
  async UpdateTrip(
    input: UpdateTripInput,
    condition?: ModelTripConditionInput
  ): Promise<UpdateTripMutation> {
    const statement = `mutation UpdateTrip($input: UpdateTripInput!, $condition: ModelTripConditionInput) {
        updateTrip(input: $input, condition: $condition) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql
      (
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTripMutation>response.data.updateTrip;
  }
  async DeleteTrip(
    input: DeleteTripInput,
    condition?: ModelTripConditionInput
  ): Promise<DeleteTripMutation> {
    const statement = `mutation DeleteTrip($input: DeleteTripInput!, $condition: ModelTripConditionInput) {
        deleteTrip(input: $input, condition: $condition) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTripMutation>response.data.deleteTrip;
  }
  async CreateRoute(
    input: CreateRouteInput,
    condition?: ModelRouteConditionInput
  ): Promise<CreateRouteMutation> {
    const statement = `mutation CreateRoute($input: CreateRouteInput!, $condition: ModelRouteConditionInput) {
        createRoute(input: $input, condition: $condition) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRouteMutation>response.data.createRoute;
  }
  async UpdateRoute(
    input: UpdateRouteInput,
    condition?: ModelRouteConditionInput
  ): Promise<UpdateRouteMutation> {
    const statement = `mutation UpdateRoute($input: UpdateRouteInput!, $condition: ModelRouteConditionInput) {
        updateRoute(input: $input, condition: $condition) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRouteMutation>response.data.updateRoute;
  }
  async DeleteRoute(
    input: DeleteRouteInput,
    condition?: ModelRouteConditionInput
  ): Promise<DeleteRouteMutation> {
    const statement = `mutation DeleteRoute($input: DeleteRouteInput!, $condition: ModelRouteConditionInput) {
        deleteRoute(input: $input, condition: $condition) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRouteMutation>response.data.deleteRoute;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetDriver(id: string): Promise<GetDriverQuery> {
    const statement = `query GetDriver($id: ID!) {
        getDriver(id: $id) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDriverQuery>response.data.getDriver;
  }
  async ListDrivers(
    filter?: ModelDriverFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDriversQuery> {
    const statement = `query ListDrivers($filter: ModelDriverFilterInput, $limit: Int, $nextToken: String) {
        listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDriversQuery>response.data.listDrivers;
  }
  async GetRider(id: string): Promise<GetRiderQuery> {
    const statement = `query GetRider($id: ID!) {
        getRider(id: $id) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRiderQuery>response.data.getRider;
  }
  async ListRiders(
    filter?: ModelRiderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRidersQuery> {
    const statement = `query ListRiders($filter: ModelRiderFilterInput, $limit: Int, $nextToken: String) {
        listRiders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRidersQuery>response.data.listRiders;
  }
  async GetVehicle(id: string): Promise<GetVehicleQuery> {
    const statement = `query GetVehicle($id: ID!) {
        getVehicle(id: $id) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVehicleQuery>response.data.getVehicle;
  }
  async ListVehicles(
    filter?: ModelVehicleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVehiclesQuery> {
    const statement = `query ListVehicles($filter: ModelVehicleFilterInput, $limit: Int, $nextToken: String) {
        listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            make
            model
            year
            createdAt
            updatedAt
            driverVehiclesId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVehiclesQuery>response.data.listVehicles;
  }
  async GetTrip(id: string): Promise<GetTripQuery> {
    const statement = `query GetTrip($id: ID!) {
        getTrip(id: $id) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTripQuery>response.data.getTrip;
  }
  async ListTrips(
    filter?: ModelTripFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTripsQuery> {
    const statement = `query ListTrips($filter: ModelTripFilterInput, $limit: Int, $nextToken: String) {
        listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
            routeTripsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTripsQuery>response.data.listTrips;
  }
  async GetRoute(id: string): Promise<GetRouteQuery> {
    const statement = `query GetRoute($id: ID!) {
        getRoute(id: $id) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRouteQuery>response.data.getRoute;
  }
  async ListRoutes(
    filter?: ModelRouteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoutesQuery> {
    const statement = `query ListRoutes($filter: ModelRouteFilterInput, $limit: Int, $nextToken: String) {
        listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoutesQuery>response.data.listRoutes;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userSub
            username
            email
            phone
            createdAt
            updatedAt
            userDriverId
            userRiderId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateDriverListener(
    filter?: ModelSubscriptionDriverFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDriver">>
  > {
    const statement = `subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
        onCreateDriver(filter: $filter) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDriver">>
    >;
  }

  OnUpdateDriverListener(
    filter?: ModelSubscriptionDriverFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDriver">>
  > {
    const statement = `subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
        onUpdateDriver(filter: $filter) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDriver">>
    >;
  }

  OnDeleteDriverListener(
    filter?: ModelSubscriptionDriverFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDriver">>
  > {
    const statement = `subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
        onDeleteDriver(filter: $filter) {
          __typename
          id
          name
          email
          phone
          carType
          vehicles {
            __typename
            nextToken
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDriver">>
    >;
  }

  OnCreateRiderListener(
    filter?: ModelSubscriptionRiderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRider">>
  > {
    const statement = `subscription OnCreateRider($filter: ModelSubscriptionRiderFilterInput) {
        onCreateRider(filter: $filter) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRider">>
    >;
  }

  OnUpdateRiderListener(
    filter?: ModelSubscriptionRiderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRider">>
  > {
    const statement = `subscription OnUpdateRider($filter: ModelSubscriptionRiderFilterInput) {
        onUpdateRider(filter: $filter) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRider">>
    >;
  }

  OnDeleteRiderListener(
    filter?: ModelSubscriptionRiderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRider">>
  > {
    const statement = `subscription OnDeleteRider($filter: ModelSubscriptionRiderFilterInput) {
        onDeleteRider(filter: $filter) {
          __typename
          id
          name
          email
          phone
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          vehiclePassengersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRider">>
    >;
  }

  OnCreateVehicleListener(
    filter?: ModelSubscriptionVehicleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
  > {
    const statement = `subscription OnCreateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
        onCreateVehicle(filter: $filter) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVehicle">>
    >;
  }

  OnUpdateVehicleListener(
    filter?: ModelSubscriptionVehicleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
  > {
    const statement = `subscription OnUpdateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
        onUpdateVehicle(filter: $filter) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVehicle">>
    >;
  }

  OnDeleteVehicleListener(
    filter?: ModelSubscriptionVehicleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
  > {
    const statement = `subscription OnDeleteVehicle($filter: ModelSubscriptionVehicleFilterInput) {
        onDeleteVehicle(filter: $filter) {
          __typename
          id
          make
          model
          year
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          passengers {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverVehiclesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVehicle">>
    >;
  }

  OnCreateTripListener(
    filter?: ModelSubscriptionTripFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTrip">>
  > {
    const statement = `subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
        onCreateTrip(filter: $filter) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTrip">>
    >;
  }

  OnUpdateTripListener(
    filter?: ModelSubscriptionTripFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTrip">>
  > {
    const statement = `subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
        onUpdateTrip(filter: $filter) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTrip">>
    >;
  }

  OnDeleteTripListener(
    filter?: ModelSubscriptionTripFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTrip">>
  > {
    const statement = `subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
        onDeleteTrip(filter: $filter) {
          __typename
          id
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
            createdAt
            updatedAt
            vehiclePassengersId
          }
          startTime
          endTime
          route {
            __typename
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
          routeTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTrip">>
    >;
  }

  OnCreateRouteListener(
    filter?: ModelSubscriptionRouteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoute">>
  > {
    const statement = `subscription OnCreateRoute($filter: ModelSubscriptionRouteFilterInput) {
        onCreateRoute(filter: $filter) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoute">>
    >;
  }

  OnUpdateRouteListener(
    filter?: ModelSubscriptionRouteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoute">>
  > {
    const statement = `subscription OnUpdateRoute($filter: ModelSubscriptionRouteFilterInput) {
        onUpdateRoute(filter: $filter) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoute">>
    >;
  }

  OnDeleteRouteListener(
    filter?: ModelSubscriptionRouteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoute">>
  > {
    const statement = `subscription OnDeleteRoute($filter: ModelSubscriptionRouteFilterInput) {
        onDeleteRoute(filter: $filter) {
          __typename
          id
          origin {
            __typename
            name
            latitude
            longitude
          }
          destination {
            __typename
            name
            latitude
            longitude
          }
          trips {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoute">>
    >;
  }

  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onCreateUser(filter: $filter, owner: $owner) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onUpdateUser(filter: $filter, owner: $owner) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onDeleteUser(filter: $filter, owner: $owner) {
          __typename
          id
          userSub
          username
          email
          phone
          driver {
            __typename
            id
            name
            email
            phone
            carType
            createdAt
            updatedAt
          }
          rider {
            __typename
            id
            name
            email
            phone
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }
}
