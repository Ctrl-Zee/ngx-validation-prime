import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ValidationDirective } from './validation.directive';
import { unionBy } from 'lodash';
import { ErrorItem } from './error-item';

@Component({
  selector: 'ngx-validation-prime',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
})
export class ValidationComponent implements OnInit, OnChanges {
  @Input() errorItems!: ErrorItem[];

  // Injects the directive inside the component so we have access to the form control in the ng-content
  @ContentChild(ValidationDirective) input!: ValidationDirective;

  validationErrors!: ErrorItem[];

  constructor() {
    // Default validation errors. These can be overridden by passing in an ErrorItem[]
    this.validationErrors = [
      { error: 'required', description: 'Required' },
      { error: 'email', description: 'Invalid email' },
      { error: 'pattern', description: 'Invalid pattern' },
      { error: 'maxLength', description: 'Maximum length exceeded' },
      { error: 'minLength', description: 'Minimum length required' },
    ];
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errorItems']) {
      this.setValidationErrors(changes['errorItems'].currentValue);
    }
  }

  /** Helper to get the form control for use in the template */
  get formControl() {
    return this.input.formControl;
  }

  /**
   * Finds and replaces the default validation errors with the ErrorItem's passed in.
   * @param {ErrorItem[]} errorItems
   */
  setValidationErrors(errorItems: ErrorItem[]): void {
    this.validationErrors = unionBy(errorItems, this.validationErrors, 'error');
  }
}
