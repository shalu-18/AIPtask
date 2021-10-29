import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ServicessService } from 'src/app/services/servicess.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  servicess: any;
  constructor(public fb: FormBuilder, private service: ServicessService) { }
  userdata!:any; 
  // usserdata = {
  //   fname: '',
  //   psd: ''
  // }
   loginform = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
   


  });

  ngOnInit(): void {
  }
setdata(){
    this.service.setdata(this.loginform.value).subscribe((_response: any) =>{
        
        // this.router.navigateByUrl('/customer');   
        
    });
   
  
  
  }


}

