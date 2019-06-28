import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxProgressTrackerModule } from 'projects/ngx-progress-tracker/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxProgressTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
