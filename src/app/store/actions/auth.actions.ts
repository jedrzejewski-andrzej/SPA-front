import { createAction, props } from '@ngrx/store';
import { AuthModel } from 'src/models/auth/auth.model';

export const login = createAction(
  '[AUTH] Login',
  props<{ loginDTO: AuthModel.LoginDTO }>(),
);

export const loginSuccess = createAction(
  '[AUTH] Login success',
  props<{ data: any }>(),
);

export const loginFailed = createAction(
  '[AUTH] Login fail',
  props<{ error: any }>(),
);

export const initLogin = createAction('[AUTH] init login');

export const initLoginFail = createAction('[AUTH] init login fail');

export const initLoginSuccess = createAction('[AUTH] init login success');

export const logout = createAction('[AUTH] logout');

export const logoutSuccess = createAction('[AUTH] logout success');