import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { LayoutComponent } from "./layout.component";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarModule } from "./side-bar/side-bar.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LayoutComponent, TopBarComponent],
  imports: [
   CoreModule,
   SideBarModule,
   RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
