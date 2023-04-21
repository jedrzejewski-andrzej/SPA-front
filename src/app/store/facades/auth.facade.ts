import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/models/auth/auth.model';
import * as fromStateActions from '../actions/auth.actions';
import * as fromStore from '../reducers';
import * as fromAuthSelectors from './../selectors/auth.selectors';

@Injectable()
export class AuthFacade {
  isLoggingIn$: Observable<boolean>;
  isloggedIn$: Observable<boolean>;
  user$: Observable<any | null>;

  constructor(private _store: Store<fromStore.AppState>) {
    this._initData();
  }

  private _initData(): void {
    this.isLoggingIn$ = this._store.pipe(select(fromAuthSelectors.isLoggingIn));
    this.isloggedIn$ = this._store.pipe(select(fromAuthSelectors.isLoggedIn));
    this.user$ = this._store.pipe(select(fromAuthSelectors.userData));
  }

  initLogin(): void {
    this._store.dispatch(fromStateActions.initLogin());
  }

  login(loginDTO: AuthModel.LoginDTO): void {
    this._store.dispatch(
      fromStateActions.login({
        loginDTO,
      }),
    );
  }

  logout(): void {
    this._store.dispatch(fromStateActions.logout());
  }

}
