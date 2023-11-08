import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from '../mockhotel';
import Hotel from '../Models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  // json-server --watch db.json
  // url: string = "http://localhost:3000/hotels";

  url: string = "http://localhost:8080/hotels";

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }

  addHotel(hotel:Hotel){
    console.log(hotel)
    return this.http.post<Hotel|any>(this.url,hotel);
  }

}
