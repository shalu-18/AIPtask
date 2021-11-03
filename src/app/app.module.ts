import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './formapp/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './formapp/customer/customer.component';
import { DialogComponentComponent } from './formapp/dialog-component/dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { IntersptorserviceService } from './intersptorservice.service';
import { ServicessService } from './services/servicess.service';




@NgModule({
  declarations: [
    AppComponent,
     LoginComponent,
    CustomerComponent,
    DialogComponentComponent

    
  ],
  entryComponents:[
    DialogComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule


  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass: IntersptorserviceService ,
    multi:true
  },
ServicessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
