import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SideBarOrchestratorComponent } from "./components/side-bar-orchestrator/side-bar-orchestrator.component";
import { SideBarComponent } from "./side-bar.component";

@NgModule({
  declarations: [SideBarOrchestratorComponent, SideBarComponent],
  imports: [CoreModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
