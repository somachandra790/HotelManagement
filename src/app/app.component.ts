import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hotelManagement';

  constructor(private location: Location, private dataService: DataService) { }

  addHotel() {
    this.dataService.shareActionData("Enter");
  }

  goBack(): void {
    this.location.back();
  }

}
