import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  calculateDistance(pickuplatitude: any, pickuplongitude: any, droplatitude: any, droplongitude: any): any {
    throw new Error('Method not implemented.');
  }
  selectedDate:any = "";
  selectedTime:any="";
  selectedPlace:any="";
  dropPlace:any="";
  distance:any;
  list: any = [];
  day: any = ""
  totalKm: any = ''
  remainingKm: any = ""
  totalAmount: any = ""
  perKm_charge: any = "";
  perDay_Km: any = "";
  perDayCharge = "";
  data: any = [];
  packageKm: any = "";
  pickupLocation:any="";
  brandname:any=''
  pickuplatitude:any;
  pickuplongitude:any;
  droplatitude:any;
  droplongitude:any;
  map: any;
  address:string | undefined;
  lat: number | undefined;
  long: number | undefined;
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  searchesData:any = [];
  label: any;
  latitude: any;
  longitude: any;
  cdata:any=[]
  carinfo:any=''
  


}

