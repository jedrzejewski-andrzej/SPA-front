import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from "../models/product.model";

@Injectable()
export class ProductsService {
  _listData$ : BehaviorSubject<Product[] | null> = new BehaviorSubject<Product[] | null>(null);
  listData$ : Observable<Product[] | null> = this._listData$.asObservable();

  constructor(private readonly _httpClient: HttpClient) {}

  fetchData(limit: number): void {
    this._httpClient
      .get<any>('https://dummyjson.com/products', {
        params: {limit}
      })
      .pipe(
        catchError(ProductsService._errorHandler.bind(this)),
      )
      .subscribe(res => {
        this._listData$.next(res.products);
      });
  }

  clearData(): void {
    this._listData$.next(null);
  }

  private static _errorHandler(error: any): Observable<never> {
    return throwError(error);
  }
}
