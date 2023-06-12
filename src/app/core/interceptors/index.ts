import { AuthorizationInterceptor } from './authorization.inteceptor';
import { ClassProvider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const interceptors = [AuthorizationInterceptor];

export const CORE_INTERCEPTORS: ClassProvider[] = interceptors.map(
  customInterceptor => ({
    provide: HTTP_INTERCEPTORS,
    useClass: customInterceptor,
    multi: true,
  }),
);
