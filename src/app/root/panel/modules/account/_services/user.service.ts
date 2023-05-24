import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable()
export class UserService {
  _listData$ : BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  listData$ : Observable<User | null> = this._listData$.asObservable();

  constructor(private readonly _httpClient: HttpClient) {}

  fetchData(): void {
    this._httpClient
      .get<any>('https://dummyjson.com/users/1')
      .pipe(
        catchError(UserService._errorHandler.bind(this)),
      )
      .subscribe(res => {
        this._listData$.next(res);
      });
  }

  clearData(): void {
    this._listData$.next(null);
  }

  private static _errorHandler(error: any): Observable<never> {
    return throwError(error);
  }
}
