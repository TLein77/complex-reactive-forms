import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChildBaseComponent } from '../child-base/child-base.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent extends ChildBaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputA: '',
      inputB: '',
    });

    this.formReady.emit(this.form);
  }

}
