import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewOrchestratorComponent } from './view-orchestrator.component';

describe('ViewOrchestratorComponent', () => {
  let component: ViewOrchestratorComponent;
  let fixture: ComponentFixture<ViewOrchestratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrchestratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrchestratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
