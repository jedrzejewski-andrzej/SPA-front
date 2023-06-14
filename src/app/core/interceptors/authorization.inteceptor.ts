import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookiesService } from '../../_services/cookies.service';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private readonly _cookiesService: CookiesService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token: string | undefined = this._accessToken;
  
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }

  private get _accessToken(): string | undefined {
    return this._cookiesService.get('token');
  }
}
