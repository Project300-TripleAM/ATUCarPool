import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { MyAccountComponent } from './my-account/my-account.component';
import { MapComponent } from './map/map.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component'; // Import AboutUsComponent
import { ContactUsComponent } from './contact-us/contact-us.component'; // Import ContactUsComponent

// Declare routing for app
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, //boolean canactivate to determine if this route can be accessed
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'map', component: MapComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about-us', component: AboutUsComponent }, // Route for About Us
  { path: 'contact-us', component: ContactUsComponent }, // Route for Contact Us
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
