import { NgModule, Injector } from '@angular/core';
import { NgxProgressTrackerCustomElement } from './component/ngx-progress-tracker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [NgxProgressTrackerCustomElement],
  imports: [BrowserModule, FormsModule ],
  entryComponents: [NgxProgressTrackerCustomElement]
})
export class NgxProgressTrackerCustomElementModule {
  constructor(private injector: Injector){
    const el = createCustomElement(NgxProgressTrackerCustomElement,{injector: injector});
    customElements.define('ngx-progress-tracker',el);
  }
}
