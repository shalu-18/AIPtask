import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ServicessService } from 'src/app/services/servicess.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  leads:FormGroup;
constructor(public fb: FormBuilder,  public service:  ServicessService,
   public dialogRef: MatDialogRef<DialogComponentComponent>
   ) { 
  this.leads = this.fb.group({
    LeadName:[""],
    MobileNo:[""]

   })
}

  ngOnInit(): void {
  }

  
 
  addmylead(){
    console.log("in")
   this.service.addLead(this.leads.value).subscribe(
     res=>{
       console.log(res);
       this.dialogRef.close();
     }
   )
  

}}
