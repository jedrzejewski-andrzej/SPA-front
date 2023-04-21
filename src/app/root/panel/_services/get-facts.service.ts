import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class GetFactsService {
  _listData$ : BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>(null);
  listData$ : Observable<string[] | null> = this._listData$.asObservable();

  constructor(private readonly _httpClient: HttpClient) {}

  getFacts(count: number): void {
    this._httpClient
      .get<any>('https://meowfacts.herokuapp.com/', {
        params: { count },
      })
      .pipe(
        map(el => el.data),
        catchError(GetFactsService._errorHandler.bind(this)),
      )
      .subscribe(res => {
        const uniqueFacts = GetFactsService._checkForDuplicates(res);
        this._listData$.next(uniqueFacts);
      });
  }

  clearData(): void {
    this._listData$.next(null);
  }

  private static _errorHandler(error: any): Observable<never> {
    return throwError(error);
  }

  private static _checkForDuplicates(facts: string[]): string[] {
    return [... new Set(facts)];
  }
}
