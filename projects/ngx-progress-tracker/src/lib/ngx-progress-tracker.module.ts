import { NgModule } from '@angular/core';
import { NgxProgressTrackerComponent } from './component/ngx-progress-tracker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxProgressTrackerComponent],
  imports: [BrowserModule, FormsModule ],
  exports: [NgxProgressTrackerComponent]
})
export class NgxProgressTrackerModule { }
