import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicessService {
constructor(private http: HttpClient) { }

  setdata(userdata:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    const user = {
      emailOrMobileNo: "9892870026",
      otp: 7171
    }
    return this.http.post("https://testffc.nimapinfotech.com/api/Account/LoginWithOTP",{
      emailOrMobileNo: "9892870026",
      otp: 7171
    }, {headers: headers});
  }
   
  getdata(){
    const user = { username: 'nazim@nimapinfotech.com', password: 'test@123' }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Authorization': `Basic bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=`
    });
  return this.http.post("https://testffc.nimapinfotech.com/api/CRM/Leads", {}, {headers: headers});
  } 
}
