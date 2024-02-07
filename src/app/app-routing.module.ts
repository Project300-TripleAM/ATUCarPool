import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authguard.service';
import { FaqComponent } from './faq/faq.component';

// Declare routing for app
const routes: Routes = [
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
