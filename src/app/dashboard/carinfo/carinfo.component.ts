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

  constructor(public api:ApiService, public route:ActivatedRoute ,public router:Router , public dataservice: DataService) { }

  ngOnInit() {

  }

  bookCar(){
    const data =JSON.stringify({
      data:this.list
    })
    console.log(data)
    this.router.navigate(['/tabs/bookings'],{
      
    })
     
  }

}
