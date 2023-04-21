import { ActionReducer } from '@ngrx/store';
import * as fromAuthActions from '../actions/auth.actions';
import { AppState } from '../reducers';

export function clearAppState(
  reducer: ActionReducer<AppState>,
): ActionReducer<AppState> {
  return function (state, action) {
    switch (action.type) {
      case fromAuthActions.logout.type:
        state = undefined;
        break;
    }

    return reducer(state, action);
  };
}
