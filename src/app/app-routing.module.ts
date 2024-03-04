import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { MyAccountComponent } from './my-account/my-account.component';
import { MapComponent } from './map/map.component'
import { FaqComponent } from './faq/faq.component';

// Declare routing for app
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, }, //boolean canactivate to determine if this route can be accessed
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'map', component: MapComponent },
  { path: 'faq', component: FaqComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
