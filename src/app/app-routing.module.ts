// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MapComponent } from './map/map.component';
import { FaqComponent } from './faq/faq.component';


import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RoleGuard } from './services/role-guard.service';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { MessagesComponent } from './messages/messages.component';
import { UpdatesComponent } from './updates/updates.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard] },
  { path: 'driver-dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { role: 'driver' } },
  { path: 'passenger-dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { role: 'passenger' } },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'map', component: MapComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'add-route', component: AddRouteComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'role-selection', component: RoleSelectionComponent },
  { path: 'ride-requests', component: RideRequestsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: '', redirectTo: '/role-selection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
