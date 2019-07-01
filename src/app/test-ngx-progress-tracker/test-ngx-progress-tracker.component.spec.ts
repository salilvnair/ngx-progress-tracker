import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxProgressTrackerComponent } from './test-ngx-progress-tracker.component';

describe('TestNgxProgressTrackerComponent', () => {
  let component: TestNgxProgressTrackerComponent;
  let fixture: ComponentFixture<TestNgxProgressTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgxProgressTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
