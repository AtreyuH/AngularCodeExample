import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { CoreModule } from "../core/core.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardLandingPageComponent } from './components/dashboard-landing-page/dashboard-landing-page.component';
import { DashboardSideBarComponent } from './components/dashboard-side-bar/dashboard-side-bar.component';

@NgModule({
  declarations: [DashboardComponent, DashboardLandingPageComponent, DashboardSideBarComponent],
  imports: [
    CoreModule,
    DashboardRoutingModule,
    // StoreModule.forFeature(),
    EffectsModule.forFeature(),
  ],
})
export class DashboardModule {}
