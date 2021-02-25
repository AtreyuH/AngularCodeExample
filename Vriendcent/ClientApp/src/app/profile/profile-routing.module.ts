import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserSettingsComponent } from "./components/user-settings/user-settings.component";
import { ProfileComponent } from "./profile.component";
import { ProfileResolver } from "./resolver/profile.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      {
        path: "",
        component: UserSettingsComponent
      }
    ],
    resolve: { profile: ProfileResolver }
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
export class ProfileRoutingModule { }
