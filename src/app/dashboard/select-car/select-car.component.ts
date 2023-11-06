import { ApiService } from 'src/app/core/services/api.service';
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
   list:any=[];
  
   istimeOpen= false ;
 
  constructor(private apiService:ApiService) { }

  ngOnInit() {
     this.apiService.getAllUser({},1,100000,"").subscribe((cdata:any)=>{
      this.list=cdata.data
      console.log(this.list)
     })
  }
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
