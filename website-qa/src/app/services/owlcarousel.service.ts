import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OwlcarouselService {

  constructor(private http: HttpClient) { }
  OWL(data, success) {
    this.http.post('http://qa.colive.in/webservices/CRMapi/PropertyCRM/GetPropertiesOfTheMonth',
      { CityID: 0 })
    .subscribe((res) => {
      console.log('Response from server for OWLs--->', res);
      success(res);
      //  return tot;
    });
  }
  Findmyhome(data , success) {
    this.http.post('http://qa.colive.in/webservices/CRMapi/PropertyCRM/GetPropertyDetails_V2', { data })
    .subscribe((tot) => {
       success(tot);
       console.log('property deatils of CRM--->', tot);
    });
  }
  locationdata(data, success) {
    this.http.post('http://qa.colive.in/webservices/api/Property/GetLocationMenuForWeb', { })
    .subscribe((tot) => {
    success(tot);
    console.log('locations of webmenu..... data', tot);
    });
  }
  searchdetail(data , success) {
    this.http.post('http://qa.colive.in/api/Colive/GetPropertySearchDetails' , {data})
    .subscribe((tot) => {
      success(tot);
      console.log('Getpropertysearch details of locations ---->', tot);
    });
  }
}
