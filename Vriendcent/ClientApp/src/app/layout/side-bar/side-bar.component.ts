import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import { Subject } from "rxjs";
import { SideBarService } from "./services/side-bar.service";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent{
  renderedComponent: Type<Component>;
  minimized = false;
  constructor() {}

  onToggleMinimized = () => (this.minimized = !this.minimized);
}
