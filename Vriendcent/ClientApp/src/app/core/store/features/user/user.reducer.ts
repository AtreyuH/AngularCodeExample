import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

export const userSlice = "userStore"
const userAdapter = createEntityAdapter<User>()

export interface UserState extends EntityState<User> {
}

export const intitalState = userAdapter.getInitialState();

const userReducer = createReducer(
  intitalState,
);

export function reducer(state: UserState, action: Action) {
  return userReducer(state, action);
}
