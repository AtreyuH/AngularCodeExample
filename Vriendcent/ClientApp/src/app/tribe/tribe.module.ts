import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { TribeComponent } from "./tribe.component";
import { TribeRoutingModule } from "./tribe-routing.module";
import { TribeOverviewComponent } from './components/tribe-overview/tribe-overview.component';
import { TribeSideBarComponent } from './components/tribe-side-bar/tribe-side-bar.component';

@NgModule({
  declarations: [TribeComponent, TribeOverviewComponent, TribeSideBarComponent],
  imports: [
    CoreModule,
    TribeRoutingModule,
  ],
  providers: [],
})
export class TribeModule {}
