import { DataService } from 'src/app/core/services/data.service';
import {
  ApiService
} from 'src/app/core/services/api.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Data,
  Router
} from '@angular/router';
import {
  environment
} from 'src/environments/environment';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss'],
})
export class SelectCarComponent implements OnInit {

  isFromDateModalOpen = false;

  segment: any = "Upcoming";


  istimeOpen = false;
  packagePrice:any=''
  ratePerKm: any='';


  baseURL = environment.baseURL;
  photo = "";

  constructor(private apiService: ApiService, public route: ActivatedRoute, public router: Router, public dataservice: DataService) {}

  ngOnInit() {

    console.log(this.dataservice.selectedPlace)
    console.log(this.dataservice.dropPlace)
    console.log(this.dataservice.selectedTime)
    console.log(this.dataservice.selectedDate)
    this.dataservice.distance = this.calculateDistance(this.dataservice.pickuplatitude,this.dataservice.pickuplongitude,this.dataservice.droplatitude,this.dataservice.droplongitude)
    // this.route.queryParams.subscribe((data: any) => {
    // this.list = JSON.parse(data.data)
    //   console.log(this.list)
    let splitArray = this.dataservice.selectedPlace.split(", ")
    this.dataservice.totalKm = parseInt(this.dataservice.distance)

    this.apiService.getAllDrivers({ city: splitArray[0] }).subscribe((cdata: any) => {
      this.dataservice.data = cdata.data
    })
  }

  calculateDistance(pickuplatitude: any, pickuplongitude: any, droplatitude: any, droplongitude: any) {

    let R = 6371; // Radius of the Earth in kilometers
    let dLat = this.deg2rad(droplatitude - pickuplatitude);
    
    let dLon = this.deg2rad(droplongitude - pickuplongitude);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(pickuplatitude)) * Math.cos(this.deg2rad(droplatitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distance = R * c; // Distance in kilometers
    console.log(`Distance: ${distance} km`);
    return distance;

  }

  deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }

  calculateTotalAmt(item: any) {
     let totalAmount = 0;
     let packageKm = item.packageKm
    if (this.dataservice.totalKm > packageKm) {
      let remainingKm = this.dataservice.totalKm - packageKm;
      totalAmount = remainingKm * item.ratePerKm + item.packagePrice;
      
    } else {
      totalAmount = item.ratePerKm * this.dataservice.totalKm;
    }
    return totalAmount

  }
    
changeSegment(event: any) {
    this.segment = event.detail.value
  }
  setFromOpen() {
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }
  timeOpen() {
    this.istimeOpen = !this.istimeOpen;
  }

  next(index: any) {
  
    let cdata = this.dataservice.data[index]
    this.dataservice.cdata=cdata
    this.dataservice.totalAmount=this.calculateTotalAmt(this.dataservice.data[index])
    console.log(cdata)
    this.router.navigate(['/tabs/dashboard/carinfo'])
     
  }


}

function calculateTotalAmt(item: any, any: any): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}
