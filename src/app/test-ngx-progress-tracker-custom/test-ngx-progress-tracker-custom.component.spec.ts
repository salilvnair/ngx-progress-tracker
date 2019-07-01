import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxProgressTrackerCustomComponent } from './test-ngx-progress-tracker-custom.component';

describe('TestNgxProgressTrackerCustomComponent', () => {
  let component: TestNgxProgressTrackerCustomComponent;
  let fixture: ComponentFixture<TestNgxProgressTrackerCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgxProgressTrackerCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxProgressTrackerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
