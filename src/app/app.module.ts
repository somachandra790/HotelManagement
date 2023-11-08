import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { HotelDetailsComponent } from './Components/hotel-details/hotel-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChildComponent } from './Components/child/child.component';
import { PhoneformatPipe } from './Pipes/phoneformat.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotelsReducer } from './Reducers/hotels.reducer';
import { HotelEffects } from './Effects/hotels.effects';
import { AddHotelComponent } from './Components/add-hotel/add-hotel.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditHotelComponent } from './Components/edit-hotel/edit-hotel.component';
import { DeleteHotelComponent } from './Components/delete-hotel/delete-hotel.component';
import { InterceptorService } from './Services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelDetailsComponent,
    ChildComponent,
    PhoneformatPipe,
    AddHotelComponent,
    DashboardComponent,
    EditHotelComponent,
    DeleteHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      hotel: HotelsReducer
    }, {}),
    EffectsModule.forRoot([HotelEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
