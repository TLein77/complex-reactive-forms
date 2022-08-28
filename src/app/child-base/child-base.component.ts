import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-base',
  templateUrl: './child-base.component.html',
  styleUrls: ['./child-base.component.css']
})
export class ChildBaseComponent implements OnDestroy {
  form: FormGroup = new FormBuilder().group({});

  @Output()
  formReady = new EventEmitter<FormGroup>();
  @Output()
  removeForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnDestroy(): void {
    this.removeForm.emit(true);
  }

}
