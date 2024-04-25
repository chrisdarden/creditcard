import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { provideEnvironmentNgxMask } from "ngx-mask";
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule, CommonModule],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})

export class AppModule {}
