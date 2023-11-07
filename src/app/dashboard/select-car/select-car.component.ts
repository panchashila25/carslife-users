import { ApiService } from 'src/app/core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
   day:any=""
  distance:any=""
  totalKm:any=''
  remainingKm:any=""
  totalAmount:any=""
  perKm_charge=10
  perDay_Km=100
  perDayCharge = 3000;
 
  constructor(private apiService:ApiService, public route:ActivatedRoute ) { }

  ngOnInit() {
    if(this.totalKm > 100){

      this.remainingKm=this.totalKm-this.perDay_Km;

     this.totalAmount=this.remainingKm*this.perKm_charge+this.perDayCharge;
     console.log(this.totalAmount)
     
}else{
  this.totalAmount=this.perDayCharge;
     console.log(this.totalAmount)}
     


     this.route.queryParams.subscribe((data:any)=>{
      console.log(data)
      this.list=JSON.parse(data.data)
      console.log(this.list)
      console.log(this.list.distance)
      this.list.pickuplocation.split()
      this.totalKm=this.list.distance0
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

