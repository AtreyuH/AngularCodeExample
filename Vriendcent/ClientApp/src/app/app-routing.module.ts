import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "tribe",
    loadChildren: () =>
      import("./tribe/tribe.module").then((m) => m.TribeModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "corrected" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
