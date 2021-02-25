import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOrganizationsTabComponent } from './side-bar-organizations-tab.component';

describe('SideBarOrganizationsTabComponent', () => {
  let component: SideBarOrganizationsTabComponent;
  let fixture: ComponentFixture<SideBarOrganizationsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarOrganizationsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarOrganizationsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
