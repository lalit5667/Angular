import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  default = 'Advanced';
  submitted = false;
  details = {
    email: '',
    subscribe: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    this.details.email = this.signupForm.value.email;
    this.details.subscribe = this.signupForm.value.subscribe;
    this.details.password = this.signupForm.value.password;
    console.log(this.details);

    this.signupForm.reset();
  }
}
