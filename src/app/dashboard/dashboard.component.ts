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
  
 

  constructor(private router:Router   ,  public zone: NgZone, private platfrom:Platform,
    public api:ApiService )  {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
    }
   

  ngOnInit() {}

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
      dropDate:this.selectedTime
    })
     console.log(data)
     this.api.createUser(data).subscribe((cdata:any) => {
         console.log(cdata)
         this.router.navigate (['/tabs/dashboard/selectcar'])
     })
    
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
    this.selectedPlace = item.label


  }
   //wE CALL THIS FROM EACH ITEM.
   SelectSearchResults(item: any) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    // alert(JSON.stringify(item))      
    this.dropPlace = item.label


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

