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

  fetchData(): void {
    this._httpClient
      .get<any>('http://localhost:3000/products/get-all')
      .pipe(
        catchError(ProductsService._errorHandler.bind(this)),
      )
      .subscribe(res => {
        this._listData$.next(res);
      });
  }
  
  addProduct(data: Product): Observable<any> {
    return this._httpClient.post<any>('http://localhost:3000/products/create', data);
  }
  
  removeProduct(productId: number): Observable<any> {
    return this._httpClient.delete(`http://localhost:3000/products/${productId}`);
  }
  
  getProduct(productId: number): Observable<Product | null> {
    return this._httpClient.get<Product>(`http://localhost:3000/products/${productId}`);
  }
  
  clearData(): void {
    this._listData$.next(null);
  }

  private static _errorHandler(error: any): Observable<never> {
    return throwError(error);
  }
}
