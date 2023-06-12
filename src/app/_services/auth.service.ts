import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/models/auth/auth.model';
import { CookiesService } from './cookies.service';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient, private _cookiesService: CookiesService) {}

  login(loginDTO: AuthModel.LoginDTO): Observable<any> {
    return this._httpClient.post('http://localhost:3000/auth/login', loginDTO)
  }
}
