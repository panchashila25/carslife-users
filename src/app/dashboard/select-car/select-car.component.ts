import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss'],
})
export class SelectCarComponent  implements OnInit {
  
   isFromDateModalOpen = false;
   selectedDate:any = "";
   selectedTime:any="";
  constructor() { }

  ngOnInit() {}

}
