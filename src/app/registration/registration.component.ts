import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Validation to ensure numbers are not entered into the full name
const nameValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const name = control.value as string;
  const hasNumbers = /\d/.test(name);

  return hasNumbers ? { 'containsNumbers': true } : null;
};

// Validation to let the user know that the email they entered will not be accepted
function validateEmailFormat(control: AbstractControl): { [key: string]: any } | null {
  const email = control.value as string;

  // Regex Email Expression to verify email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email) ? null : { 'invalidEmailFormat': true };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup = new FormGroup({});
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;

  constructor(private router: Router) {}

  // Validation
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, nameValidator]),
      email: new FormControl('', [Validators.required, validateEmailFormat]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  register() {
    if (!this.passwordsMatch()) {
      console.log('Passwords do not match');
      return;
    }

    // Registration logic here
    console.log(`Registering with Full Name: ${this.fullName}, Email: ${this.email}, Password: ${this.password}`);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Method to detect if passwords match.
 passwordsMatch(): boolean {
  const passwordControl = this.registrationForm.get('password');
  const confirmPasswordControl = this.registrationForm.get('confirmPassword');

  return (
    passwordControl && confirmPasswordControl &&
    passwordControl.value === confirmPasswordControl.value
  ) as boolean;
}

}