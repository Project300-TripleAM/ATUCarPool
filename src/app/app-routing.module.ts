import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component'
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authguard.service';

//Declare routing for app
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'my-account', component: MyAccountComponent,canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, //boolean canactivate to determine if this route can be accessed
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
