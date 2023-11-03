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
   istimeOpen= false ;
   selectedDate:any = "";
   selectedTime:any="";
   selectedPlace:any="";

  constructor(private router:Router) { }

  ngOnInit() {}

  setFromOpen(){
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }

  timeOpen(){
    this.istimeOpen = !this.istimeOpen;
  }
  

}
