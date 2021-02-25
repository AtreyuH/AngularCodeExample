import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-orchestrator',
  templateUrl: './view-orchestrator.component.html',
  styleUrls: ['./view-orchestrator.component.css']
})
export class ViewOrchestratorComponent {
  constructor(public viewRef: ViewContainerRef) { }
}
