import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ViewOrchestratorComponent } from "./components/view-orchestrator/view-orchestrator.component";
import { ControlsModule } from "./controls/controls.module";
import * as fromCore from "./store/core.store";

@NgModule({
  imports: [
    ControlsModule,
    HttpClientModule,
    StoreModule.forFeature(fromCore.featureStore, fromCore.reducers),
    EffectsModule.forFeature(fromCore.effects),
  ],
  exports: [
    ControlsModule,
    HttpClientModule,
    ViewOrchestratorComponent,
  ],
  declarations: [ViewOrchestratorComponent],
})
export class CoreModule {}
