import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OutputDetail } from './datastructure';

@Injectable({
  providedIn: 'root'
})
export class PincodeserviceService {

  constructor(private http:HttpClient) {

   }
  
   private _urlpincode="http://postalpincode.in/api/pincode/";
  private _urlpinplace="http://postalpincode.in/api/postoffice/";
  

  getOutputDataByPinCode(pincode:string):Observable<OutputDetail>{
    console.log("Geting processed data "+pincode);
    return  this.http.get<OutputDetail>(this._urlpincode+pincode);
  }
  




}
