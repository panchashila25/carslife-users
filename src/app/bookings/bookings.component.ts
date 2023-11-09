import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent  implements OnInit {

  segment:any = "Upcoming";
  list:any=[];
  constructor(public router:Router, public route:ActivatedRoute) { }

  ngOnInit() {
    
  }

  changeSegment(event:any){
    this.segment = event.detail.value
  }
}
