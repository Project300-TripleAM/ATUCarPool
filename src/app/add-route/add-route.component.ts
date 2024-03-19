
import { Component, NgModule, isStandalone } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { APIService } from '../API.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  standalone:true,
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  styleUrls: ['./add-route.component.css']
})

export class AddRouteComponent{
  public route: {
    origin: string,
    destination: string
  } = {
    origin: '',
    destination: ''
  };

  constructor(private router: Router, private http: HttpClient, private apiService: APIService, private location: Location) {}

  goBack() {
    this.location.back(); //function updated so the user will be brought back to the previous page they were on (either dashboard or map)
  }
  

  addRoute() {
    this.router.navigate(['/map']);
    const originName = this.route.origin;
    const destinationName = this.route.destination;

    if (!originName || !destinationName) {
      console.error('Origin and destination addresses are required.');
      return;
    }

    this.geocodeAddress(originName).then((originCoords) => {
      this.geocodeAddress(destinationName).then((destinationCoords) => {
        // Now you have originCoords and destinationCoords, you can send them to the database
        console.log('Origin coordinates:', originCoords);
        console.log('Destination coordinates:', destinationCoords);

        // Send data to the database
        this.sendRouteDataToDatabase(originName, originCoords, destinationName, destinationCoords);
      }).catch(error => {
        console.error('Error geocoding destination address:', error);
      });
    }).catch(error => {
      console.error('Error geocoding origin address:', error);
    });
  }

  //send the data to the database
  sendRouteDataToDatabase(originName: string, originCoords: { lat: number, lng: number }, destinationName: string, destinationCoords: { lat: number, lng: number }) {
    const routeData = {
      origin: {
        name: originName,
        latitude: originCoords.lat,
        longitude: originCoords.lng
      },
      destination: {
        name: destinationName,
        latitude: destinationCoords.lat,
        longitude: destinationCoords.lng
      }
    };

    this.apiService.createRoute(routeData).subscribe(
      (response) => {
        console.log('Route data sent to the database:', response);
      },
      (error) => {
        console.error('Error sending route data to the database:', error);
      }
    );
  }

  //Code for taking the data as a string and changing it into coordinates
  geocodeAddress(address: string): Promise<{ lat: number, lng: number }> {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${environment.apiKey}`;

    return new Promise<{ lat: number, lng: number }>((resolve, reject) => {
      this.http.get(apiUrl).toPromise().then((response: any) => {
        if (response && response.results && response.results.length > 0) {
          const location = response.results[0].geometry.location;
          const coordinates = { lat: location.lat, lng: location.lng };
          resolve(coordinates);
        } else {
          reject(new Error('Geocoding failed. No results found.'));
        }
      }).catch(error => {
        reject(new Error('Geocoding failed. Error in HTTP request.'));
      });
    });

  }

  

}
