import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeOverviewComponent } from './tribe-overview.component';

describe('TribeOverviewComponent', () => {
  let component: TribeOverviewComponent;
  let fixture: ComponentFixture<TribeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TribeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
