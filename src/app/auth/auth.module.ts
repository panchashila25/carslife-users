import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
