import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent  implements OnInit {

  segment:any = "Upcoming";
  constructor() { }

  ngOnInit() {}

  changeSegment(event:any){
    this.segment = event.detail.value
  }
}
