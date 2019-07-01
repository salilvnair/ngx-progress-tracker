import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxElementUtilModule } from '@salilvnair/ngx-element-util';
import { AppComponent } from './app.component';
import { TestNgxProgressTrackerCustomComponent } from './test-ngx-progress-tracker-custom/test-ngx-progress-tracker-custom.component';
import { TestNgxProgressTrackerComponent } from './test-ngx-progress-tracker/test-ngx-progress-tracker.component';
//import { NgxProgressTrackerModule } from 'projects/ngx-progress-tracker/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TestNgxProgressTrackerCustomComponent,
    TestNgxProgressTrackerComponent
  ],
  imports: [
    BrowserModule,
    NgxElementUtilModule,
    //NgxProgressTrackerModule
    //uncomment above if you want to use the ngx-progress-tracker as angular library
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
