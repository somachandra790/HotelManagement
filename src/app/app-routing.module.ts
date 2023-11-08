import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './Components/add-hotel/add-hotel.component';
import { ChildComponent } from './Components/child/child.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HotelsComponent } from './Components/hotels/hotels.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddHotelComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
