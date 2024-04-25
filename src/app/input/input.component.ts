import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: UntypedFormControl;
  @Input() label: string;

  constructor() {
    this.control = new UntypedFormControl('');
    this.label = '';
  }

  ngOnInit() {
  // TODO: Implement ngOnInit logic
  return
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
