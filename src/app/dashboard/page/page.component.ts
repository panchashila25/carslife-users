
//IMPORT THE REQUIRED MODULES.

import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';

declare var google: { maps: { places: { AutocompleteService: new () => any; }; LatLng: new (arg0: number, arg1: number) => any; MapTypeId: { ROADMAP: any; }; Map: new (arg0: any, arg1: { center: any; zoom: number; mapTypeId: any; }) => any; }; };

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})

export class PageComponent implements OnInit {
  
  @ViewChild('map',  {static: false}) mapElement:any;
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
  selectedPlace:any="";

 
  constructor(
    public zone: NgZone, private platfrom:Platform,
    public api:ApiService
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }
 
  //LOAD THE MAP ONINIT.
  ngOnInit() {   
  }


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
    this.placeid = item.label

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

