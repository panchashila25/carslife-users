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
   segment:any = "Upcoming";
  
   istimeOpen= false ;
 
  constructor() { }

  ngOnInit() {}
  changeSegment(event:any){
    this.segment = event.detail.value
  }
  setFromOpen(){
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }
  timeOpen(){
    this.istimeOpen = !this.istimeOpen;
  }
}
