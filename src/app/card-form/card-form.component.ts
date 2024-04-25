import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { DateFormControl } from "../date-form-control";

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s]*$/)
    ]),
    cardNumber: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/^\d+$/)
    ]
    ),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]
    ),
    securityCode: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^\d+$/)
    ]
    )
  });

  constructor() {
    // console.log(this.cardForm.get('name'));
  }

  onResetClick() {
    this.cardForm.reset();
  }

  onSubmit() {
    console.log("form submitted");
  }

ngOnInit() {
  // console.log('card-form ngOnInit placeholder');
  // TODO: Implement ngOnInit logic
  return;
}
}
