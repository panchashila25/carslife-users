import {
  ApiService
} from 'src/app/core/services/api.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
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
  selectedDate: any = "";
  selectedTime: any = "";
  segment: any = "Upcoming";
  list: any = [];
  carlist: any = [];
  istimeOpen = false;
  day: any = ""
  distance: any = ""
  totalKm: any = ''
  remainingKm: any = ""
  totalAmount: any = ""
  perKm_charge: any = "";
  perDay_Km: any = "";
  perDayCharge = "";
  data: any = [];
  packageKm: any = "";
  baseURL = environment.baseURL;
  photo = "";

  constructor(private apiService: ApiService, public route: ActivatedRoute) {}

  ngOnInit() {


    this.route.queryParams.subscribe((data: any) => {
      this.list = JSON.parse(data.data)
      let splitArray = this.list.pickupLocation.split(", ")
      this.totalKm = parseInt(this.list.distance)

      this.apiService.getAllDrivers({
        city: splitArray[0]
      }).subscribe((cdata: any) => {
        this.data = cdata.data





      })
    })



  }

  calculateTotalAmt(item: any) {
    let totalAmount = 0;
    let packageKm = item.packageKm
    if (this.totalKm > packageKm) {

      let remainingKm = this.totalKm - packageKm;

      totalAmount = remainingKm * item.ratePerKm + item.packagePrice;

    } else {
      totalAmount = item.ratePerKm * this.totalKm;
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


}
