import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipUntil, take, tap } from 'rxjs/operators';
import { AuthFacade } from '../store/facades/auth.facade';

@Injectable()
export class LoggedUserGuard {
  constructor(
    private readonly _authFacade: AuthFacade,
    private readonly _router: Router,
  ) {}

  canActivateChild(): Observable<boolean> {
    return this._authFacade.isloggedIn$.pipe(
      skipUntil(this._authFacade.isLoggingIn$),
      take(1),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this._unauthorizedUserHandler();
        }
      }),
    );
  }

  private _unauthorizedUserHandler(): void {
    this._router.navigate([`/auth`]);
  }
}
