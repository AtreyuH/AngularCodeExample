import { Component } from '@angular/core';
import { UserFacade } from 'src/app/core/store/features/user/user.facade';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  currentUser$ = this._userFacade.currentUser$;

  constructor(private _userFacade: UserFacade) { }
}
