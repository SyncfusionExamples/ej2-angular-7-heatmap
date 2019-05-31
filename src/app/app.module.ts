import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeatMapAllModule } from '@syncfusion/ej2-angular-heatmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeatMapAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
