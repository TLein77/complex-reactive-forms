import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'complex-reactive-forms';
  parentFormGroup: FormGroup = this.formBuilder.group({
    parentInput: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  addChildForm(name: string, formGroup: FormGroup): void {
    this.parentFormGroup.addControl(name, formGroup);
  }

  removeChildForm(name: string): void {
    this.parentFormGroup.removeControl(name);
  }
}
