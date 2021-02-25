import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardLandingPageComponent } from './dashboard-landing-page.component';

describe('DashboardLandingPageComponent', () => {
  let component: DashboardLandingPageComponent;
  let fixture: ComponentFixture<DashboardLandingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
