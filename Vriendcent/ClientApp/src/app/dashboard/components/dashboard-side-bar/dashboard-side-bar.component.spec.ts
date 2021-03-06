import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardSideBarComponent } from './dashboard-side-bar.component';

describe('DashboardSideBarComponent', () => {
  let component: DashboardSideBarComponent;
  let fixture: ComponentFixture<DashboardSideBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
