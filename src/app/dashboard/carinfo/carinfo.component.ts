import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.component.html',
  styleUrls: ['./carinfo.component.scss'],
})
export class CarinfoComponent  implements OnInit {
list:any=[];
  constructor(public api:ApiService, public route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data:any)=>{
      this.list = JSON.parse(data.data)
      console.log(this.list)
        
    })
  }

}
