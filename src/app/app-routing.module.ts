import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AurthguardGuard } from './aurthguard.guard';
import { CustomerComponent } from './formapp/customer/customer.component';
import { LoginComponent } from './formapp/login/login.component';
import { GuardtwoGuard } from './guardtwo.guard';
const routes: Routes = [
  { path: 'login',
  component: LoginComponent,
canActivate: [GuardtwoGuard]
  },
    { path: 'customer',
    component: CustomerComponent,
    canActivate: [AurthguardGuard]
 }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
