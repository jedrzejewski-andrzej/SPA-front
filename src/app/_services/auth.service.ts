import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { AuthModel } from 'src/models/auth/auth.model';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  login(userDTO: AuthModel.LoginDTO): Observable<any> {
    return of(userDTO.email)
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
