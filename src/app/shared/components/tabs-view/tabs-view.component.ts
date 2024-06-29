import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';


@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss',
})
export class TabsViewComponent {

  activetab = 1;


  setActiveTab(index: number) {
    this.activetab = index;
  }

}
