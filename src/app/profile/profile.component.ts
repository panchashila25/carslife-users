import { ApiService } from 'src/app/core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  list:any=[];
  constructor(public api :ApiService ,public Auth:AuthenticationService ) { }


  ngOnInit() {
   this.getData()
  }
  
  getData(){
    this.api.getAllUser({_id:this.Auth.currentUserValue._id},1,1,"").subscribe((cdata)=>{
      this.list=cdata.data
      console.log(this.list)
    })
  }

  

}
