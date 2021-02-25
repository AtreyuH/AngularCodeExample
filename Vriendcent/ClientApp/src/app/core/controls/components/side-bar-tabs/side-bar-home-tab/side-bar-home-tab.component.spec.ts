import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarHomeTabComponent } from './side-bar-home-tab.component';

describe('SideBarHomeTabComponent', () => {
  let component: SideBarHomeTabComponent;
  let fixture: ComponentFixture<SideBarHomeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarHomeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarHomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
