import { Component, OnInit } from '@angular/core';
import { NgxElement } from '@salilvnair/ngx-element-util';
import { NgxProgressTracker } from 'projects/ngx-progress-tracker/src/lib/component/ngx-progress-tracker.model';
@Component({
  selector: 'test-ngx-progress-tracker-custom-element',
  templateUrl: './test-ngx-progress-tracker-custom.component.html',
  styleUrls: ['./test-ngx-progress-tracker-custom.component.css']
})
export class TestNgxProgressTrackerCustomComponent implements OnInit {
  data:NgxProgressTracker[] = [
    {
        "id": "1",
        "color": "green",
        "header": "Order",
        "content": [
            {
                "key": "status",
                "value": "Ordered"
            },
            {
                "key": "date",
                "value": "12/12/19"
            }
        ]
    },
    {
        "id": "2",
        "color": "orange",
        "header": "Packaging",
        "content": [
            {
                "key": "status",
                "value": "In progress"
            },
            {
                "key": "date",
                "value": "ETA 31/12/19"
            }
        ]
    },
    {
        "id": "3",
        "color": "grey",
        "header": "Delivery",
        "content": [
            {
                "key": "status",
                "value": ""
            },
            {
                "key": "date",
                "value": ""
            }
        ]
    }
];

  constructor(private ngxElement:NgxElement) { }

  ngOnInit() {
    this.ngxElement.selector('ngx-progress-tracker').attr('dataSource',this.data);
  }

}
