import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl(''),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvc: new FormControl('')
  });

  onSubmit() {
    console.warn(this.cardForm.value);
  }


}
