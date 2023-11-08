import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Hotel from '../Models/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hotel : Hotel = {
    id : 0,
    name : '',
    address : '',
    imgUrl : '',
    ratings : 0,
    phoneNo : '',
    price : 0
  };  
  constructor() { }

  private sharedHotel = new BehaviorSubject<Hotel>(this.hotel);
  sharedHotel$ = this.sharedHotel.asObservable();

  private sharedAction = new BehaviorSubject<String>("Enter");
  sharedAction$ = this.sharedAction.asObservable();

  shareHotelData(hotel : Hotel){
    this.sharedHotel.next(hotel);
  }

  shareActionData(action : String){
    this.sharedAction.next(action);
  }

}
