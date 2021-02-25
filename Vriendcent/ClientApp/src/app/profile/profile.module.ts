import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { ProfileComponent } from "./profile.component";
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ProfileSideBarComponent } from './components/profile-side-bar/profile-side-bar.component';
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [ProfileComponent, UserSettingsComponent, ProfileSideBarComponent],
  imports: [
    CoreModule,
    ProfileRoutingModule
  ],
  providers: [],
})
export class ProfileModule {}
