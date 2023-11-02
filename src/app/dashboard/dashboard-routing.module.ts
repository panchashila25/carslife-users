import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { SelectCarComponent } from './select-car/select-car.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path:'cards',
    component:CardsComponent
  },
  {
    path:'selectcar',
    component:SelectCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
