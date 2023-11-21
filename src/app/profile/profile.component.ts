import { ApiService } from 'src/app/core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/auth.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  list:any=[];
  constructor(public api :ApiService ,public Auth:AuthenticationService ,private router:Router) { }


  ngOnInit() {
   this.getData()
  }
  
  getData(){
    this.api.getAllUser({_id:this.Auth.currentUserValue._id},1,1,"").subscribe((cdata)=>{
      this.list=cdata.data
      console.log(this.list)
    })
  }
  logout(){
      
      this.router.navigate(['/auth/login']);
    }
  
  }

  


