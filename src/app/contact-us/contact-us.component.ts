// contact-us.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitForm(contactForm: NgForm) {
    if (contactForm.valid) {
      this.http.post<any>('http://your-backend-api/submit-form', this.formData)
        .subscribe(
          response => {
            console.log('Form submission successful:', response);
            // Optionally, display a success message to the user
            // Reset the form after successful submission
            contactForm.reset();
          },
          error => {
            console.error('Form submission failed:', error);
            // Optionally, display an error message to the user
          }
        );
    }
  }
}
