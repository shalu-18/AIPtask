import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './formapp/customer/customer.component';
import { LoginComponent } from './formapp/login/login.component';
const routes: Routes = [
  { path: 'login',
  component: LoginComponent

  },
    { path: 'customer',
    component: CustomerComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
