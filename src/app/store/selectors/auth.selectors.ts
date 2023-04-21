import { createSelector } from '@ngrx/store';
import * as fromAuthState from '../reducers';
import * as fromAuthReducer from './../reducers/auth.reducer';

export const selectAuthState = (state: fromAuthState.AppState) =>
  state.authState;

export const isLoggingIn = createSelector(
  selectAuthState,
  (authState: fromAuthReducer.AuthReducer) => authState.loggingIn,
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (authState: fromAuthReducer.AuthReducer) => authState.loggedIn,
);

export const userData = createSelector(
  selectAuthState,
  (authState: fromAuthReducer.AuthReducer) => authState.user,
);
