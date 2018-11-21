import { CustomValidators } from './custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      project: new FormControl(null, [
        Validators.required,
        CustomValidators.invalidProjectName,
        CustomValidators.asyncInvalidProjectName
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
