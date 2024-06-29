import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
const PRIME_NG_MODULES = [ButtonModule, MenuModule, BadgeModule,AvatarModule, TabViewModule, ChartModule];
@NgModule({
  imports: [...PRIME_NG_MODULES],
  declarations: [],
  exports: [...PRIME_NG_MODULES],
})
export class PrimengUI {}
