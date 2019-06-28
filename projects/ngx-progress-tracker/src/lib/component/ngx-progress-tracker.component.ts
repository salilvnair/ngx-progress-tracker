import { Component, OnInit, Input, ContentChild, TemplateRef, AfterViewInit, HostListener } from '@angular/core';
import { NgxProgressTracker } from './ngx-progress-tracker.model';

@Component({
  selector: 'ngx-progress-tracker',
  templateUrl:'./ngx-progress-tracker.component.html',
  styleUrls: ['./ngx-progress-tracker.component.css']
})
export class NgxProgressTrackerComponent implements OnInit, AfterViewInit {

  @Input() dataSource: NgxProgressTracker[];
  @ContentChild('trackerContent') trackerContentTemplateRef: TemplateRef<any>; 
  @ContentChild('trackerHeader') trackerHeaderTemplateRef: TemplateRef<any>; 
  constructor() {}
  headerOffsetMap = {};
  maxHeaderLength = 0;

  ngOnInit() {
    this.calculateHeaderOffset();
  }

  ngAfterViewInit(): void {
    this.adjustMaxLegnthHeaderBasedOffset();
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
    for(let key in this.headerOffsetMap) {
      if(this.headerOffsetMap[key]===this.maxHeaderLength) {        
        maxHeightOffset = document.getElementById('progressBarHeaderContainer_'+key).offsetHeight;
      }
    }
    this.dataSource.forEach(element => {
      document.getElementById('progressBarHeaderContainer_'+element.id).style.height = maxHeightOffset+'px';
    });
  }
}
