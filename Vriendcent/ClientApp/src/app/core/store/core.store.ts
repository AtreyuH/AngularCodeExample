import { ActionReducerMap } from "@ngrx/store";
import * as fromUser from './features/user/user.reducer';

export const featureStore = "coreStore";

export interface CoreState {
  [fromUser.userSlice]: fromUser.UserState
}

export const reducers: ActionReducerMap<CoreState> = {
  [fromUser.userSlice]: fromUser.reducer
};

export const effects = [];
