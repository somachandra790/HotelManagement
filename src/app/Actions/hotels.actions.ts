import { Action } from '@ngrx/store';
import Hotel from '../Models/hotel';

export enum ActionTypes {
  GET_HOTELS = '[HOTEL] Get Hotels',
  GET_HOTELS_SUCCESS = '[HOTEL] Get Hotels Success',
  GET_HOTELS_FAIL = '[HOTEL] Get Hotels Fail',
  ADD_HOTEL = '[HOTEL] Add New Hotel',
  DELETE_HOTEL = '[HOTEL] Delete Hotel',
  UPDATE_HOTEL = '[HOTEL] Update Hotel'
}

export class GetHotelsAction implements Action {
  readonly type = ActionTypes.GET_HOTELS;
}

export class GetHotelsSuccessAction implements Action {
  readonly type = ActionTypes.GET_HOTELS_SUCCESS;
  constructor(public payload: Hotel[]){}
}

export class GetHotelsFailAction implements Action {
  readonly type = ActionTypes.GET_HOTELS_FAIL;
  constructor(public payload: any) {}
}

export class AddHotelAction implements Action {
  readonly type = ActionTypes.ADD_HOTEL;
  constructor(public payload: Hotel){
    console.log(payload)
  }
}

export class DeleteHotelAction implements Action {
  readonly type = ActionTypes.DELETE_HOTEL;
  constructor(public payload: number){
  }
}

export class UpdateHotelAction implements Action {
  readonly type = ActionTypes.UPDATE_HOTEL;
  constructor(public payload: Hotel){
    console.log(payload)
  }
}

export type HotelAction = 
    GetHotelsAction |
    GetHotelsSuccessAction |
    GetHotelsFailAction |
    AddHotelAction |
    DeleteHotelAction |
    UpdateHotelAction;