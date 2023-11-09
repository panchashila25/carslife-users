
import { Router, Routes } from '@angular/router';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from '../core/services/data.service';

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
   
   autocomplete: { input: string; };
   autocompleteItems: any[];
   
   

  
 

  constructor(private router:Router   ,  public zone: NgZone, private platfrom:Platform,
    public api:ApiService, public navC: NavController, public dataservice:DataService )  {
      this.dataservice.GoogleAutocomplete = new google.maps.places.AutocompleteService();
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
     
         console.log(this.dataservice.dropPlace);
         console.log(this.dataservice.selectedPlace)
         this.router.navigate (['/tabs/dashboard/selectcar'])

        
  }

// calculation of distance

   

  //LOAD THE MAP ONINIT.


  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords(){
    alert('lat' +this.dataservice.lat+', long'+this.dataservice.long )
  }
  
  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults(){
   
    this.api.searchPlaces(this.autocomplete.input).subscribe(data => {
      this.dataservice.searchesData = data.data.data  ;
      console.log(this.dataservice.searchesData)
    })
  } 
  
  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item: any) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    // alert(JSON.stringify(item))  
    console.log(item)    
    this.dataservice.selectedPlace = item.label
    this.dataservice.pickuplatitude=item.latitude
    this.dataservice.pickuplongitude=item.longitude
    this.placesOpen();


  }
   //wE CALL THIS FROM EACH ITEM.
   SelectSearchResults(item: any) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    // alert(JSON.stringify(item))  
    console.log(item)    
    this.dataservice.dropPlace = item.label
    this.dataservice.droplatitude=item.latitude
    this.dataservice.droplongitude=item.longitude
     this.placesDrop()

  }
  
  
  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }
 
  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo(){
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.dataservice.placeid;
  }
  
}
function UpdateSearchResults() {
  throw new Error('Function not implemented.');
}