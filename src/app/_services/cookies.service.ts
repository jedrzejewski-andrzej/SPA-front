import { Injectable } from '@angular/core';
import Cookie, {
  CookieGetOptions,
  CookieSetOptions,
} from 'universal-cookie';

@Injectable()
export class CookiesService {
  private _browserCookies: Cookie;

  private get _cookies(): Cookie {
    if (!this._browserCookies) {
      this._browserCookies = new Cookie();
    }
    return this._browserCookies;
  }

  get(name: string, options?: CookieGetOptions): string | undefined {
    return this._cookies.get(name, options);
  }

  set(name: string, value: string, options?: CookieSetOptions): void {
    this._cookies.set(name, value, { path: '/', ...options });
  }

  remove(name: string, options?: CookieSetOptions): void {
    this._cookies.remove(name, { path: '/', ...options });
  }

  deleteAllCookies(): void {
    Object.keys(this._cookies.getAll() || {}).forEach((key: string) => {
      this.remove(key);
    });
  }
}
