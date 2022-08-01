import { Directive, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Directive to provide the Validation component access to the Form Control applied to its ng-content.
 *
 * Example:
 * ```html
 * <app-validation">
 *   <input type="text" ngxControlValidation class="input-rounded" formControlName="firstName" />
 * </app-validation>
 * ```
 */
@Directive({
  selector: '[ngxControlValidation]',
})
export class ValidationDirective {
  formControl = this.control;

  constructor(@Self() private control: NgControl) {}
}
