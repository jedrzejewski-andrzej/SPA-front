import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromAuthReducer from './auth.reducer';

export interface AppState {
  authState: fromAuthReducer.AuthReducer;
}

export const appReducers: ActionReducerMap<AppState> = {
  authState: fromAuthReducer.reducer,
};

export const reducerToken: InjectionToken<ActionReducerMap<AppState, Action>> =
  new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const reducerProvider: {
  provide: InjectionToken<ActionReducerMap<AppState, Action>>;
  useValue: ActionReducerMap<AppState, Action>;
}[] = [{ provide: reducerToken, useValue: appReducers }];
