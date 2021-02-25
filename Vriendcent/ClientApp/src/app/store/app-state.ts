import * as fromCore from '../core/store/core.store';

export interface AppState {
  [fromCore.featureStore]: fromCore.CoreState
}
