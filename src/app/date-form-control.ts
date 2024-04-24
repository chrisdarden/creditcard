import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {

  setValue(value: string, options: object) {

    // Checks for invalid characters
    if (value.match(/[^0-9|/]/gi)) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }

    // locks input to less than 5 characters
    if (value.length > 5) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }

    // Checks for backspace and deletes the last character
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, {...options, emitModelToViewChange: true});
      return;
    }
    // Checks for 2 digits to then add a slash
    if (value.length === 2) {
      super.setValue(value + '/', {...options, emitModelToViewChange: true});
      return;
    }
    // Checks for backspace on the last two digits and removes the slash
    if (value.length === 3 && this.value.length === 5) {
      super.setValue(value.slice(0, 2), {...options, emitModelToViewChange: true});
      return;
    }
    // Checks for backspace and removes the slash
    if (value.length === 1 && this.value.length === 3) {
      super.setValue(value, {...options, emitModelToViewChange: true});
      return;
    }

  super.setValue(value, {...options, emitModelToViewChange: true});
  }
}
