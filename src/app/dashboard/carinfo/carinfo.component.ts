import { AuthenticationService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.component.html',
  styleUrls: ['./carinfo.component.scss'],
})
export class CarinfoComponent  implements OnInit {
list:any=[];
data:any=[];
calculateTotalAmt:any=[];

  constructor(public api:ApiService, public route:ActivatedRoute ,public router:Router , public dataservice: DataService,public Auth:AuthenticationService) { }

  ngOnInit() {

  }

  bookCar(){
    const data =JSON.stringify({
       brandName: this.dataservice.cdata.brandName,
       totalFare:this.dataservice.totalAmount,
       pickupLocation:this.dataservice.selectedPlace,
       dropLocation:this.dataservice.dropPlace,
       fromDate:this.dataservice.selectedTime,
       toDate:this.dataservice.selectedDate,
       driver: this.dataservice.cdata._id,
       user:this.Auth.currentUserValue._id
    })
    console.log(data)
    this.api.createBookings(data).subscribe((cdata:any)=>{
      console.log(cdata)
    })

    
    this.router.navigate(['/tabs/bookings'])
     
  }

}
