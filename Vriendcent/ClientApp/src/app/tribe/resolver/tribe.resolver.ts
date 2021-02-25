import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { SideBarService } from "src/app/layout/side-bar/services/side-bar.service";
import { TribeSideBarComponent } from "../components/tribe-side-bar/tribe-side-bar.component";

@Injectable({ providedIn: "root" })
export class TribeResolver implements Resolve<any> {
  constructor(private _sideBarService: SideBarService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return of(this._sideBarService.setSideBar(TribeSideBarComponent));
  }
}
