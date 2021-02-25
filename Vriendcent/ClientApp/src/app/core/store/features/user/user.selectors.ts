import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app-state";
import { first } from 'lodash';

const getUserState = (state: AppState) => state.coreStore.userStore;

export const getCurrentUser = createSelector(
  getUserState,
  (state) => first(Object.values(state))
)
