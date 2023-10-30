import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: "",
    component:BookingsComponent
    },
  {
    path:"details",
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
