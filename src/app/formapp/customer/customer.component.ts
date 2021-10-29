import { Component, OnInit } from '@angular/core';
import { ServicessService } from 'src/app/services/servicess.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  myData: any;

  constructor( private service: ServicessService) { }

 
    
  ngOnInit(): void {
    this.service.getdata().subscribe((response: any) => {
      this.myData = response;
      console.log(this.myData);
    });

    
   
 
  }}

