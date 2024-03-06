// add-route.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent {
  public route: {
    origin: string,
    destination: string,
    transportType: string
  } = {
    origin: '',
    destination: '',
    transportType: ''
  };
}
