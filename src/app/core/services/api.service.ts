import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(public http: HttpClient,) { }
  _header:any;


  
  login(data:any){
    console.log(data)
    return this.http.post<any>(`${environment.baseURL}auth/authenticate`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(map((data,re)=>{
      return data;
    }));
}


register(data:any){
  console.log(data)
  return this.http.post<any>(`${environment.baseURL}auth/register`,data,{
    headers:this._header
  })
  .pipe(map((data,re)=>{
    return data;
  }));
}


  // Create Itom
  createItem(data: any) {
    return this.http.post < any > (`${environment.baseURL}item`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



// Get all Itom
  gatAllItem(data:any) {
    return this.http.post < any > (`${environment.baseURL}item/get`,data, {
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  // Update Itom
  updateItem(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}item/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// DeleteItom
  deleteItem(id:any){
    return this.http.delete<any>(`${environment.baseURL}item/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }

    // Create dealers
    searchPlaces(query: any) {
      return this.http.get < any > (`${environment.baseURL}comman/searchPlaces?search=`+query)
        .pipe(map((data: any) => {
          return data;
        }));
    }


  // Create dealers
  createUser(data: any) {
    return this.http.post < any > (`${environment.baseURL}user`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }

// send otp
  sendOTP(data: any) {
    return this.http.post<any>(`${environment.baseURL}auth/sendOTP`, data, { 
      headers:
       { 'Content-Type': 'application/json' } })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  // Get Dealers
  getAllUser(data:any, page: number = 1, limit: number = 25, searchTerm: any) {
    return this.http.post < any > (`${environment.baseURL}user/get` + '?page=' + page + '&limit=' + limit + '&searchTerm=' + searchTerm,data,{
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Get all driver
  getAllDrivers(data:any) {
    return this.http.post < any > (`${environment.baseURL}driver/get`,data, {
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Dealers
  updateDealers(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}dealers/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



  // delete Dealers
  deleteDealers(id:any){
    return this.http.delete<any>(`${environment.baseURL}dealers/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Get all Orders
createOrders(data:any) {
  return this.http.post < any > (`${environment.baseURL}orders`, data,{
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .pipe(map((data: any) => {
      return data;
    }));

}


  // Get Orders
  gatAllOrders() {
    return this.http.get < any > (`${environment.baseURL}orders`, {
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Orders
  updateOrders(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}orders/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Delete Orders
deleteOrders(id:any){
  return this.http.delete<any>(`${environment.baseURL}orders/`+id,{
})
.pipe(map((data:any)=>{
  return data;
}))
}



}




// items

