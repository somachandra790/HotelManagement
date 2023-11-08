import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import Hotel from 'src/app/Models/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent{

  @Input() hotel : Hotel | undefined;
  constructor() { }

}
