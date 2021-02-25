import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SideBarHomeTabComponent } from './components/side-bar-tabs/side-bar-home-tab/side-bar-home-tab.component';
import { SideBarOrganizationsTabComponent } from './components/side-bar-tabs/side-bar-organizations-tab/side-bar-organizations-tab.component';
@NgModule({
  declarations: [SideBarHomeTabComponent, SideBarOrganizationsTabComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SideBarHomeTabComponent,
    SideBarOrganizationsTabComponent
  ],
})
export class ControlsModule {}
