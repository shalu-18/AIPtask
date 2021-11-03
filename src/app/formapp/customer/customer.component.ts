import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServicessService } from 'src/app/services/servicess.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
// import { MatDialog } from "@angular/material"
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  
})


export class CustomerComponent implements OnInit {
  myData: any;
  
  constructor( private service: ServicessService, public dialog:MatDialog, public router:Router ) { }

 
    
  ngOnInit(): void {
    this.service.getdata().subscribe((response: any) => {
      this.myData = response;
      console.log(this.myData);
    });
    
  }
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '400px',
    
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  } 
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}


