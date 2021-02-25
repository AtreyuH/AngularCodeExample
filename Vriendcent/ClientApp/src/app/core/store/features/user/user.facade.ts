import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { User } from "src/app/core/models/user.model";
import { AppState } from "src/app/store/app-state";
import { getCurrentUser } from "./user.selectors";

@Injectable({
  providedIn: "root"
})
export class UserFacade {

  constructor(private _store: Store<AppState>) { }

  //map for testData
  currentUser$ = this._store.select(getCurrentUser).pipe(map( s => new User({
    firstName: "Vriendcent",
    lastName: "Neutie",
    profilePictureUrl: "/assets/dummy-profile-picture.png"
  })));
}
