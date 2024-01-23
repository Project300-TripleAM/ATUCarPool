/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

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
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
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
  year: number;
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
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  trip?: Trip | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
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
  year: number;
  driverVehiclesId?: string | null;
};

export type ModelVehicleConditionInput = {
  make?: ModelStringInput | null;
  model?: ModelStringInput | null;
  year?: ModelIntInput | null;
  and?: Array<ModelVehicleConditionInput | null> | null;
  or?: Array<ModelVehicleConditionInput | null> | null;
  not?: ModelVehicleConditionInput | null;
  driverVehiclesId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateVehicleInput = {
  id: string;
  make?: string | null;
  model?: string | null;
  year?: number | null;
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
};

export type ModelTripConditionInput = {
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  and?: Array<ModelTripConditionInput | null> | null;
  or?: Array<ModelTripConditionInput | null> | null;
  not?: ModelTripConditionInput | null;
  driverTripsId?: ModelIDInput | null;
  riderTripsId?: ModelIDInput | null;
};

export type UpdateTripInput = {
  id: string;
  startTime?: string | null;
  endTime?: string | null;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
};

export type DeleteTripInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content: string;
  tripCommentsId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  tripCommentsId?: ModelIDInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  tripCommentsId?: string | null;
};

export type DeleteCommentInput = {
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
  year?: ModelIntInput | null;
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
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  tripCommentsId?: ModelIDInput | null;
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
  year?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionVehicleFilterInput | null> | null;
  or?: Array<ModelSubscriptionVehicleFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionTripFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  startTime?: ModelSubscriptionStringInput | null;
  endTime?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTripFilterInput | null> | null;
  or?: Array<ModelSubscriptionTripFilterInput | null> | null;
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionCommentFilterInput | null> | null;
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
  year: number;
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
  year: number;
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
  year: number;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
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
  year: number;
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
    year: number;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
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
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tripCommentsId?: string | null;
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
  year: number;
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
  year: number;
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
  year: number;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  driverTripsId?: string | null;
  riderTripsId?: string | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  trip?: {
    __typename: "Trip";
    id: string;
    startTime: string;
    endTime?: string | null;
    createdAt: string;
    updatedAt: string;
    driverTripsId?: string | null;
    riderTripsId?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  tripCommentsId?: string | null;
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTripMutation>response.data.deleteTrip;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
    const response = (await API.graphql(
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
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
    return <ListTripsQuery>response.data.listTrips;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            createdAt
            updatedAt
            tripCommentsId
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
    return <ListCommentsQuery>response.data.listComments;
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
    return API.graphql(
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
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
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          driverTripsId
          riderTripsId
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

  OnCreateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > {
    const statement = `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
        onCreateComment(filter: $filter) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
    >;
  }

  OnUpdateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > {
    const statement = `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
        onUpdateComment(filter: $filter) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
    >;
  }

  OnDeleteCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > {
    const statement = `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
        onDeleteComment(filter: $filter) {
          __typename
          id
          trip {
            __typename
            id
            startTime
            endTime
            createdAt
            updatedAt
            driverTripsId
            riderTripsId
          }
          content
          createdAt
          updatedAt
          tripCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
    >;
  }
}
