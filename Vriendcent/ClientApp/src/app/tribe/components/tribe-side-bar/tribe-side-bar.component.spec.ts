import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeSideBarComponent } from './tribe-side-bar.component';

describe('TribeSideBarComponent', () => {
  let component: TribeSideBarComponent;
  let fixture: ComponentFixture<TribeSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TribeSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
