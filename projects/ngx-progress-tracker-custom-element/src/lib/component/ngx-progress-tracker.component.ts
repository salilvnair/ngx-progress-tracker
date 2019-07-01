import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgxProgressTracker } from './ngx-progress-tracker.model';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'ngx-progress-tracker',
  templateUrl:'./ngx-progress-tracker.component.html',
  styleUrls: ['./ngx-progress-tracker.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgxProgressTrackerCustomElement implements OnInit, AfterViewInit {

  @Input() dataSource: NgxProgressTracker[];
  constructor() {}
  headerOffsetMap = {};
  maxHeaderLength = 0;
  ngOnInit() {
    if(this.dataSource) {
      this.calculateHeaderOffset();
    }
    document.addEventListener("DOMContentLoaded", (event) => {
      this.calculateHeaderOffset();
      setTimeout(()=>{
        this.adjustMaxLegnthHeaderBasedOffset();
      },100)
    });
  }

  ngAfterViewInit(): void {
  }

  calculateHeaderOffset() {
    this.dataSource.forEach(element => {
      let length = element.header.length;
      this.headerOffsetMap[element.id] = length;
      if(length > this.maxHeaderLength) {
        this.maxHeaderLength = length;
      }
    });
  }

  adjustMaxLegnthHeaderBasedOffset() {
    let maxHeightOffset = 0;
    let npt = <any>document.querySelector('ngx-progress-tracker');
    for(let key in this.headerOffsetMap) {
      if(this.headerOffsetMap[key]===this.maxHeaderLength) {
        if(npt) {
          maxHeightOffset = npt.shadowRoot.getElementById('progressBarHeaderContainer_'+key).offsetHeight;
        }
      }
    }
    this.dataSource.forEach(element => {
      if(npt) {
        npt.shadowRoot.getElementById('progressBarHeaderContainer_' + element.id).style.height = maxHeightOffset+'px';
      }
    });
  }
}
