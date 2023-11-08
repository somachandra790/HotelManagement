import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Hotel from 'src/app/Models/hotel';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent {

  constructor(private route : Router, private dataService : DataService){}

  @Input() hotel : Hotel;

  editHotel() {
    // console.log(this.hotel)
    this.dataService.shareActionData("Update")
    this.dataService.shareHotelData(this.hotel)
    this.route.navigateByUrl('/add')
  }
}
