import { NgModule } from '@angular/core';

// ANGULAR MATERIAL

// PRIME NG
import { ButtonModule } from 'primeng/button';
const PRIME_NG_MODULES = [ButtonModule];
@NgModule({
  imports: [...PRIME_NG_MODULES],
  declarations: [],
  exports: [...PRIME_NG_MODULES],
})
export class PrimengUI {}
