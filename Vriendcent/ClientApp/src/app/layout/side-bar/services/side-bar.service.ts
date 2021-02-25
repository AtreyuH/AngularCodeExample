import { Component, Injectable, Type } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private setSideBar$ = new Subject<Type<Component>>();
  bind$ = this.setSideBar$.asObservable();

  setSideBar<T>(componentType: Type<T>) {
    this.setSideBar$.next(componentType);
  }
}
