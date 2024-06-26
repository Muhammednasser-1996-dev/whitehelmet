import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengUI } from './primeng/prime-imports';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengUI],
  exports: [PrimengUI],
})
export class SharedModule {}
