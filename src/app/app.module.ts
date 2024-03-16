import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Amplify } from 'aws-amplify';
import awsconfig from 'src/amplifyconfiguration.json';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { MessagesComponent } from './messages/messages.component';
import { UpdatesComponent } from './updates/updates.component';
const client = generateClient();

Amplify.configure(awsconfig);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FaqComponent,
    MyAccountComponent,
    MapComponent,
    AboutUsComponent,
    RoleSelectionComponent,
    RideRequestsComponent,
    MessagesComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
