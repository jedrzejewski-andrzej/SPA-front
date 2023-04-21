import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as fromActions from '../actions/auth.actions';
import {AuthService} from "../../_services/auth.service";
import {CookiesService} from "../../_services/cookies.service";

@Injectable()
export class AuthEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _cookiesService: CookiesService,
  ) {}

  login$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(fromActions.login),
      switchMap(({ loginDTO }) => {
        return this._authService.login(loginDTO).pipe(
          map((data: string) => fromActions.loginSuccess({ data })),
          catchError((error: any) => of(fromActions.loginFailed({ error }))),
        );
      }),
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(fromActions.loginSuccess),
        tap(({ data }) => {
          this._cookiesService.set('user', JSON.stringify(data));
          this._router.navigate(['/panel']);
        }),
      );
    },
    { dispatch: false },
  );

  initLogin$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(fromActions.initLogin),
      map(() => {
        const userCookies: any | null = this._cookiesService.get('user') || null;
        if (userCookies) {
          return fromActions.initLoginSuccess();
        }
        return fromActions.initLoginFail();
      }),
    );
  });

  initLoginFail$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(fromActions.initLoginFail),
        tap(() => {
          this._cookiesService.remove('user');
        }),
      );
    },
    {
      dispatch: false,
    },
  );

  logout$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromActions.logout),
      tap(() => {
        this._authService.logout().subscribe();
      }),
      map(() => fromActions.logoutSuccess()),
    ),
  );

  logoutSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(fromActions.logoutSuccess),
        tap(() => {
          this._cookiesService.deleteAllCookies();
          this._router.navigate([`auth/login`]);
        }),
      ),
    { dispatch: false },
  );
}
