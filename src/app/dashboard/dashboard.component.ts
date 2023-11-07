import { Router, Routes } from '@angular/router';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Platform } from '@ionic/angular';


declare var google: { maps: { places: { AutocompleteService: new () => any; }; LatLng: new (arg0: number, arg1: number) => any; MapTypeId: { ROADMAP: any; }; Map: new (arg0: any, arg1: { center: any; zoom: number; mapTypeId: any; }) => any; }; };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  
})
export class DashboardComponent  implements OnInit {
  @ViewChild('map',  {static: false}) mapElement:any;
   isFromDateModalOpen = false;
   istimeOpen= false ;
   isPlacesOpen=false;
   isPlacesDrop=false;
   selectedDate:any = "";
   selectedTime:any="";
   selectedPlace:any="";
   dropPlace:any="";
   map: any;
   address:string | undefined;
   lat: number | undefined;
   long: number | undefined;  
   autocomplete: { input: string; };
   autocompleteItems: any[];
   location: any;
   placeid: any;
   GoogleAutocomplete: any;
   searchesData:any = [];
   pickuplatitude:any;
   pickuplongitude:any;
   droplatitude:any;
   droplongitude:any;
   distance:any
   
  
 

  constructor(private router:Router   ,  public zone: NgZone, private platfrom:Platform,
    public api:ApiService )  {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
    }
   

  ngOnInit() {
  
  }

  setFromOpen(){
    this.isFromDateModalOpen = !this.isFromDateModalOpen;
  }

  timeOpen(){
    this.istimeOpen = !this.istimeOpen;
  }

  placesOpen(){
    this.isPlacesOpen = !this.isPlacesOpen;
  }

  
  placesDrop(){
    this.isPlacesDrop = !this.isPlacesDrop;
  }

  find(){
    const data = JSON.stringify({
      pickupLocation: this.selectedPlace,
      dropLocation: this.dropPlace,
      pickupdate:this.selectedDate,
      dropDate:this.selectedTime,
      distance:this.calculateDistance(this.pickuplatitude, this.pickuplongitude, this.droplatitude,this.droplongitude)
    
    })
     console.log(data)
     this.api.createUser(data).subscribe((cdata:any) => {
         
         console.log(cdata)
         this.router.navigate (['/tabs/dashboard/selectcar'],
         {
          queryParams:{data:data}
         })

        
     })
    
  }

// calculation of distance

   calculateDistance(pickuplatitude:any, pickuplongitude: any, droplatitude: any, droplongitude:any) {
    
  let R = 6371; // Radius of the Earth in kilometers
  let dLat = this.deg2rad(droplatitude -pickuplatitude );
  console.log(dLat)
  let dLon = this.deg2rad(droplongitude - pickuplongitude);
  let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(pickuplatitude)) * Math.cos(this.deg2rad(droplatitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let distance = R * c; // Distance in kilometers
   console.log(`Distance: ${distance} km`);
  return distance;
  
}
//d = 2r * asin(sqrt(hav(pickuplatitude - lat2) + cos(lat1) * cos(lat2) * hav(lon1 - lon2)))
 
 deg2rad(deg: any) {
  return deg * (Math.PI / 180);
}

  //LOAD THE MAP ONINIT.


  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords(){
    alert('lat' +this.lat+', long'+this.long )
  }
  
  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults(){
   
    this.api.searchPlaces(this.autocomplete.input).subscribe(data => {
      this.searchesData = data.data.data  ;
      console.log(this.searchesData)
    })
  } 
  
  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item: any) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    // alert(JSON.stringify(item))  
    console.log(item)    
    this.selectedPlace = item.label
    this.pickuplatitude=item.latitude
    this.pickuplongitude=item.longitude



  }
   //wE CALL THIS FROM EACH ITEM.
   SelectSearchResults(item: any) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    // alert(JSON.stringify(item))  
    console.log(item)    
    this.dropPlace = item.label
    this.droplatitude=item.latitude
    this.droplongitude=item.longitude
     

  }
  
  
  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }
 
  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo(){
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.placeid;
  }
  
}

  


function UpdateSearchResults() {
  throw new Error('Function not implemented.');
}

