import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { SideBarService } from "src/app/layout/side-bar/services/side-bar.service";
import { DashboardSideBarComponent } from "../components/dashboard-side-bar/dashboard-side-bar.component";

@Injectable({ providedIn: "root" })
export class DashboardResolver implements Resolve<any> {
  constructor(private _sideBarService: SideBarService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return of(this._sideBarService.setSideBar(DashboardSideBarComponent));
  }
}
