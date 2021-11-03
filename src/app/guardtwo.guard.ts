import { Injectable } from '@angular/core';
import { CanActivate, Router  } from '@angular/router';
import { ServicessService } from './services/servicess.service';


@Injectable({
  providedIn: 'root'
})
export class GuardtwoGuard implements CanActivate {


  constructor(private ServicessService: ServicessService, private _router: Router){}
  canActivate(): boolean{
    if(!this.ServicessService.guardd())
    {
      return true
      
    }
    else{
      this._router.navigate(['/customer']);
        return false;    
  }
}}

