import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersptorserviceService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', 'Basic bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    });
    return next.handle(tokenizedReq)
  }
}
