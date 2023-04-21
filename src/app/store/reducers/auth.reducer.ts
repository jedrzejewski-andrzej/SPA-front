import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthReducer {
  loggingIn: boolean;
  loggedIn: boolean;
  user: any | null;
}

export const initialState: AuthReducer = {
  loggingIn: false,
  loggedIn: false,
  user: null,
};

const authReducer: ActionReducer<AuthReducer, Action> = createReducer(
  initialState,
  on(AuthActions.login, state => ({
    ...state,
    loggingIn: true,
    loggedIn: false,
  })),
  on(AuthActions.loginSuccess, (state, { data }) => ({
    ...state,
    loggingIn: false,
    loggedIn: true,
    user: data
  })),
  on(AuthActions.loginFailed, (state) => ({
    ...state,
    loggingIn: false,
    loggedIn: false,
  })),
  on(AuthActions.initLogin, state => ({
    ...state,
    loggingIn: true,
    loggedIn: false,
    loginErrors: null,
  })),
  on(AuthActions.initLoginSuccess, state => ({
    ...state,
    loggingIn: false,
    loggedIn: true,
  })),
  on(AuthActions.initLoginFail, state => ({
    ...state,
    loggingIn: false,
    loggedIn: false,
  })),
  on(AuthActions.logoutSuccess, state => ({
    ...state,
    loggingIn: false,
    loggedIn: false,
    loginErrors: null,
    user: null,
  })),
);

export function reducer(state: AuthReducer | undefined, action: Action) {
  return authReducer(state, action);
}
