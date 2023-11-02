import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { SelectCarComponent } from './select-car/select-car.component';


@NgModule({
  declarations: [DashboardComponent,CardsComponent,SelectCarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    
  ]
})
export class DashboardModule {

 
 }
