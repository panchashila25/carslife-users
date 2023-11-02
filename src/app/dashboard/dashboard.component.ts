import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
   component=CardsComponent
   isFromDateModalOpen = false;
   selectedDate:any = "";
   selectedTime:any="";

  constructor(private router:Router) { }

  ngOnInit() {}

  setFromOpen(){
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }
  

}
