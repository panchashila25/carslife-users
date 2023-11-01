import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfDriveComponent } from './self-drive.component';

const routes: Routes = [
  {
    path:"",
    component:SelfDriveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfDriveRoutingModule { }
