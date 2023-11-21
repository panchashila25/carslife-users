import { User } from './../core/models/auth.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { ApiService } from '../core/services/api.service';
import { AuthenticationService } from '../core/services/auth.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent  implements OnInit {

  segment:any = "Upcoming";
  list:any=[];
status: any;
  constructor(public router:Router, public route:ActivatedRoute,public dataservice:DataService,public api:ApiService,public auth:AuthenticationService) { }

  ngOnInit() {
    this.api.getAllBooking({user:this.auth.currentUserValue._id}).subscribe((cdata:any)=>{
      this.list=cdata.data
      console.log(cdata)
    })
  }

  changeSegment(event:any){
    this.segment = event.detail.value
  }
}
