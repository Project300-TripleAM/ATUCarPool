import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user: { username: string, email: string, name: string } | null = null;

  constructor() {}

  ngOnInit(): void {

  }
}
