import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { AppState } from '../reducers';
import { clearAppState } from './clear-state.metareducer';

export const metaReducers: MetaReducer<AppState>[] = [
  clearAppState,
  ...(!environment.production ? [storeFreeze] : []),
];
