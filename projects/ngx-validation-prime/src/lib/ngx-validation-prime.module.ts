import { NgModule } from '@angular/core';
import { ValidationComponent } from './validation.component';
import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [ValidationComponent, ValidationDirective],
  imports: [],
  exports: [ValidationComponent, ValidationDirective],
})
export class NgxValidationPrimeModule {}
