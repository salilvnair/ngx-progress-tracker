# NgxProgressTracker 

#### (using as Angular Library)

- selector : ``ngx-progress-tracker``
- input    : ``dataSource`` [array of NgxProgressTracker type]


example: 

##### ``app.component.html``
```html 
<ngx-progress-tracker [dataSource]="data">
    <ng-template #trackerHeader let-header>
        <div style="margin-left: 1px;word-break: break-all;">
            <span><strong>{{header}}</strong></span>
        </div>
    </ng-template>
     <ng-template #trackerContent let-content>
        <div *ngIf="content.key=='status'">
            <span style="display:inline-block;vertical-align: middle;"><strong>{{content.value}}</strong></span>
        </div>
        <div *ngIf="content.key=='date'">
            <span><strong>{{content.value}}</strong></span>
        </div>
     </ng-template>
</ngx-progress-tracker>

```

##### ``app.component.ts``

```javascript

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
```

#### (using as custom element)

- selector : ``ngx-progress-tracker``

> ##### Note: use vanilla javascript to set the attribute value or use the NgxElement from ``@salilvnair/ngx-element-util``

example: 

##### ``app.component.html``
```html 
<ngx-progress-tracker>
  <ng-container *ngFor="let dataObj of data">
      <div style="margin-left: 1px;word-break: break-all;" slot="header_{{dataObj.id}}">
          <span><strong>{{dataObj.header}}</strong></span>
      </div>
      <ng-container *ngFor="let content of dataObj.content">
        <div *ngIf="content.key=='status'" slot="content_{{dataObj.id}}_{{content.key}}">
            <span style="display:inline-block;vertical-align: middle;">
              <strong>{{content.value}}</strong>
            </span>
        </div>
        <div *ngIf="content.key=='date'" slot="content_{{dataObj.id}}_{{content.key}}">
            <span><strong>{{content.value}}</strong></span>
        </div>
     </ng-container>
  </ng-container>
</ngx-progress-tracker>

```

##### ``app.component.ts``

```javascript

import { NgxElement } from '@salilvnair/ngx-element-util';

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
  
  constructor(private ngxElement:NgxElement) {}

  ngOnInit() {
    this.ngxElement.selector('ngx-progress-tracker').attr('dataSource',this.data);
  }
  
```


#### output:

![image](https://user-images.githubusercontent.com/34584327/60336749-d18c9c80-99be-11e9-973b-e190fe163465.png)
