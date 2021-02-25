import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideBarOrchestratorComponent } from './side-bar-orchestrator.component';

describe('SideBarOrchestratorComponent', () => {
  let component: SideBarOrchestratorComponent;
  let fixture: ComponentFixture<SideBarOrchestratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarOrchestratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarOrchestratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
