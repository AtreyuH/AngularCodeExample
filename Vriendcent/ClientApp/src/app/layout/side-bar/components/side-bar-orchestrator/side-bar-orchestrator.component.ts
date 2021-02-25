import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ViewOrchestratorComponent } from "src/app/core/components/view-orchestrator/view-orchestrator.component";
import { SideBarService } from "../../services/side-bar.service";

@Component({
  selector: "app-side-bar-orchestrator",
  templateUrl: "./side-bar-orchestrator.component.html",
  styleUrls: ["./side-bar-orchestrator.component.css"],
})
export class SideBarOrchestratorComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<any>();
  @ViewChild("template", { static: false })
  viewTemplate: ViewOrchestratorComponent;
  constructor(
    private _componentFactory: ComponentFactoryResolver,
    private _sideBarService: SideBarService
  ) {}

  ngAfterViewInit() {
    this._sideBarService.bind$
      .pipe(takeUntil(this.destroy$))
      .subscribe((comp) => {
        this.viewTemplate.viewRef.clear();
        var componentRef = this.viewTemplate.viewRef.createComponent(
          this._componentFactory.resolveComponentFactory(comp)
        );
        var instance = <Component & { ngOnInit: () => void }>(
          componentRef.instance
        );
        instance.ngOnInit();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
