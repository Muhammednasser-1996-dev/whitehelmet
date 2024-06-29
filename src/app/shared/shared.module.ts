import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengUI } from './primeng/prime-imports';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { TabsViewComponent } from './components/tabs-view/tabs-view.component';

@NgModule({
  declarations: [MenuListComponent, TabsViewComponent],
  imports: [CommonModule, PrimengUI],
  exports: [PrimengUI, MenuListComponent, TabsViewComponent],
})
export class SharedModule {}
