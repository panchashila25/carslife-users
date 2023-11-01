import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  isFromDateModalOpen = false;
  isaddCityOpen= false;
  istoCityOpen = false;
  istimeOpen = false;
  selectedDate:any = "";
  selectedTime:any = ""

  constructor(private router:Router ) { }

  ngOnInit() {}

  setFromOpen(){
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }
  addCity(){
    this.isaddCityOpen = !this.isaddCityOpen;
  }
  toCity(){
    this.istoCityOpen = !this.istoCityOpen;
  }
  timeOpen(){
    this.istimeOpen = !this.istimeOpen;
  }
}
