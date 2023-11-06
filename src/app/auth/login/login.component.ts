import { ActivatedRoute, Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})



export class LoginComponent  implements OnInit {
  mobile:any;
  otp:any;
  staticotp= 1234;
  name:any = "";
  email:any = "";
  isSendOTP: any;
  isOTPSent = false;
  isRegister = false;
  auth: any;
  constructor(public api:ApiService,public toast:ToastController, public router:Router,public routes:ActivatedRoute,  ){}
  ngOnInit(): void {
    

  }

  mobileCheck(event:any){
    if(event.target.value.toString().length == 10){
      this.api.getAllUser({mobile:parseInt(event.target.value),role:"user"},1,1,"").subscribe(us => {
        if(us.data.length == 0){
          this.isRegister = false
          this.isSendOTP = true;
        }
      });
    }else{
      this.isRegister = true;
      this.isSendOTP = false;
    }
    
  }


  onMobileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.replace(/\D/g, '').substr(0, 10);
    input.value = inputValue;
    this.mobile = inputValue;
  }
   
  sendOTP(){
  
      if(this.mobile == undefined || this.mobile == '' || this.mobile ==  null){
        this.presentToast("danger","Please enter mobile no.")
        return;
      }
      if(this.mobile.toString().length != 10){
        this.presentToast("danger","Please enter valid 10 digit mobile no.")
        return;
      }
      
      if(this.isSendOTP){
        if(this.name == undefined || this.name == '' || this.name == null){
          this.presentToast("danger", "Please enter name")
          return;
        }
  
        if(this.email == undefined || this.email == '' || this.email == null){
          this.presentToast("danger", "Please enter email")
          return;
        }
      }
      
      const data=JSON.stringify({
        mobile:this.mobile,
        name:this.name,
        email:this.email

      })
      this.api.sendOTP(data).subscribe((cdata:any)=>{
      console.log(cdata);
      this.sendOTP=cdata.data.otp;
      this.isOTPSent=true;
      })
    
  }





  onOtpChange(event:any){
    if(event.length == 4){
      this.otp = event
    }
  }
  getOtp(){
    const data = JSON.stringify({
    mobile:this.mobile,
    otp:this.otp

      
    })
    this.api.login(data).subscribe((cdata:any)=>{
      console.log(cdata);
      localStorage.setItem('currentUser', JSON.stringify(cdata.data));
      this.auth.currentUserSubject.next(cdata.data);
    },error =>{
      this.presentToast("danger",error.message)
    })
    this.validateOtp()
  }

  validateOtp()
  {
    if(this.otp==this.staticotp){
      this.router.navigate(['/tabs/dashboard'])
    }
  }


  async presentToast(color:any, message:any){
    const toastr = await this.toast.create({
      message:message,
      color:color,
      duration:3000
    })
    await toastr.present();
  }

}
