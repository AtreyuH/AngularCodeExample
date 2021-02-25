import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLandingPageComponent } from "./components/dashboard-landing-page/dashboard-landing-page.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardResolver } from "./resolver/dashboard.resolver";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [{
      path: "",
      pathMatch: "full",
      component: DashboardLandingPageComponent
    }],
    resolve: { dashboard: DashboardResolver }
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
