import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengUI } from './primeng/prime-imports';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { TabsViewComponent } from './components/tabs-view/tabs-view.component';
import { ErrorMesageComponent } from './components/error-mesage/error-mesage.component';

@NgModule({
  declarations: [MenuListComponent, TabsViewComponent, ErrorMesageComponent],
  imports: [CommonModule, PrimengUI],
  exports: [PrimengUI, MenuListComponent, TabsViewComponent,ErrorMesageComponent],
})
export class SharedModule {}
