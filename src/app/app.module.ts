import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { TabelComponent } from './tabel/tabel.component';
import { GraphComponent } from './graph/graph.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabelComponent,
    GraphComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
