import { Component } from '@angular/core';
import { NgxProgressTracker } from 'projects/ngx-progress-tracker/src/lib/component/ngx-progress-tracker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-progress-tracker-lib';
  
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
}
