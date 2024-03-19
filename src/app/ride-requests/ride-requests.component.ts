import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-requests',
  templateUrl: './ride-requests.component.html',
  styleUrls: ['./ride-requests.component.css']
})
export class RideRequestsComponent {
  rideRequests: RideRequest[] = [
    { passengerName: 'John Doe', pickupLocation: 'Athlone Town', destination: 'ATU Sligo', status: '' },
    { passengerName: 'Jane Smith', pickupLocation: 'Carrick-On-Shannon', destination: 'ATU Sligo', status: '' },
    { passengerName: 'Alice Johnson', pickupLocation: 'Ballisodare', destination: 'ATU Sligo', status: '' },
  ];

  acceptedRequests: Set<any> = new Set();


  constructor() {}

  acceptRequest(request: RideRequest) {
      // Update the status of the request to 'Accepted'
      request.status = 'Accepted';
      // Add the accepted request to the set
      this.acceptedRequests.add(request);
      request.actionTaken = 'accepted';
    console.log('Accepted ride request:', request);
  }

  rejectRequest(request: RideRequest) {
    // Logic to deny the ride request
    request.status = 'Rejected';
    request.actionTaken = 'rejected';
    console.log('Rejected ride request:', request);
  }

  cancelRequest(request: RideRequest) {
    request.status = 'Cancelled Ride';
    request.actionTaken = 'cancelled Ride';
    console.log('Cancelled ride', request);
  }
}

interface RideRequest {
  passengerName: string;
  pickupLocation: string;
  destination: string;
  status: string; 
  actionTaken?: string;
}
