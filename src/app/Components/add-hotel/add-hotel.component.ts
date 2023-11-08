import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { max } from 'rxjs';
import { AddHotelAction, UpdateHotelAction } from 'src/app/Actions/hotels.actions';
import AppState from 'src/app/Models/app-state.model';
import Hotel from 'src/app/Models/hotel';
import { DataService } from 'src/app/Services/data.service';
import { HotelService } from 'src/app/Services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(
    private hotelService: HotelService,
    private dataService: DataService,
    private route: Router,
    private store: Store<AppState>) { }

  myform: FormGroup;
  name: FormControl;
  phoneNo: FormControl;
  ratings: FormControl;
  price: FormControl;
  address: FormControl;

  id: number;
  imgUrl: String = "assets/Images/fake-hotel.jpg";
  action: String;
  updatedHotel: Hotel;

  ngOnInit() {
    this.createFormControl();
    this.createFormModel();
    this.checkAction();
  }

  checkAction() {

    this.dataService.sharedAction$.subscribe(val => {
      this.action = val;
    })
    console.log(this.action)

    if (this.action === "Update") {
      this.dataService.sharedHotel$.subscribe(data => {

        // console.log(data)
        this.updatedHotel = { ...data };

        this.name.setValue(data.name);
        this.phoneNo.setValue(data.phoneNo);
        this.ratings.setValue(data.ratings);
        this.address.setValue(data.address);
        this.price.setValue(data.price);

        // console.log(this.myform.value)
      })

    }
  }

  createFormModel() {
    this.myform = new FormGroup({
      name: this.name,
      phoneNo: this.phoneNo,
      ratings: this.ratings,
      price: this.price,
      address: this.address
    })
  }

  createFormControl() {
    this.name = new FormControl('', Validators.required);
    this.phoneNo = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.ratings = new FormControl('', [Validators.required, Validators.max(5)]);
    this.price = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
  }

  onSubmit() {
    // console.log(this.myform.value)

    if (this.action == "Enter") {
      let max = 1000;
      let min = 10;
      this.id = Math.floor(Math.random() * (max - min)) + min;
      console.log(this.id)
      this.store.dispatch(new AddHotelAction({ ...this.myform.value, "id": this.id, "imgUrl": this.imgUrl }))
    }
    else if(this.action == "Update")
    {
      this.updatedHotel = {...this.updatedHotel, ...this.myform.value}
      // console.log(this.updatedHotel)
      this.store.dispatch(new UpdateHotelAction(this.updatedHotel))
    }

    console.log("Form submitted");
    this.myform.reset();
    this.route.navigateByUrl('/dashboard');

  }

  onReset() {
    this.myform.reset();
    console.log("Data reset")
  }
}
