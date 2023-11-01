import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
