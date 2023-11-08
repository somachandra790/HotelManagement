import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/mockhotel';
import { Input } from '@angular/core';
import { HotelService } from 'src/app/Services/hotel.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from 'src/app/Models/app-state.model';
import { GetHotelsAction } from 'src/app/Actions/hotels.actions';
import Hotel from 'src/app/Models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];
  hotels$: Observable<Hotel[]>
  loading$: Observable<Boolean>
  error$: Observable<Error>
  hotelLength: number


  today: number = Date.now();
  tomorrow: number = Date.now() + (24 * 60 * 60 * 1000);

  selectedHotel: Hotel | undefined;

  constructor(private hotelService: HotelService, private store: Store<AppState>, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log("Hotel component called")
    this.hotels$ = this.store.select(store => store.hotel.hotels)
    this.error$ = this.store.select(store => store.hotel.error)

    this.hotels$.subscribe(data => {
      if (!(data && data.length))
      {
        this.getAllHotels();
      }
      this.hotels = data;
      console.log(this.hotels)
      this.cdr.markForCheck();
      // this.cdr.detectChanges();
    })

  }

  getAllHotels() {
    this.store.dispatch(new GetHotelsAction);
  }

  viewDetails(hotel: Hotel) {
    if (this.selectedHotel === hotel) {
      this.selectedHotel = undefined;
    }
    else {
      this.selectedHotel = hotel;
      // console.log(this.selectedHotel);
    }
  }
}
