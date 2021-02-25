import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TribeOverviewComponent } from "./components/tribe-overview/tribe-overview.component";
import { TribeResolver } from "./resolver/tribe.resolver";
import { TribeComponent } from "./tribe.component";

const routes: Routes = [
  {
    path: "",
    component: TribeComponent,
    children: [
      {
        path: "",
        component: TribeOverviewComponent
      }
    ],
    resolve: { tribe: TribeResolver }
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
export class TribeRoutingModule { }
