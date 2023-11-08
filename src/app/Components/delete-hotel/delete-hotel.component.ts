import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteHotelAction } from 'src/app/Actions/hotels.actions';
import AppState from 'src/app/Models/app-state.model';
import Hotel from 'src/app/Models/hotel';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent {

  constructor(private store : Store<AppState>){}

  @Input() id : number;

  deleteHotel()
  {
    this.store.dispatch(new DeleteHotelAction(this.id));
  }
}
