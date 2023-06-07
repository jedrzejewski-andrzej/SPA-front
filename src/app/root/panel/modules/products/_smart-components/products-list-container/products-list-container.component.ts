import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ProductsService} from "../../_services/products.service";
import {Product} from "../../models/product.model";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss'],
})
export class ProductsListContainerComponent implements OnInit, OnDestroy {
  listData$ : Observable<Product[] | null>;
  readonly displayedColumns: string[] = [
    'name',
    'brand',
    'price',
    'amount',
    'actions',
  ];
  
  constructor(
    private _productsService: ProductsService
  ) {}
  
  ngOnInit() {
    this.listData$ = this._productsService.listData$;
    this.fetchProducts()
  }
  
  private fetchProducts(): void {
    this._productsService.fetchData();
  }
  
  refetchDataHandler(): void {
    this.fetchProducts();
  }
  
  removeProduct(productId: number): void {
    this._productsService.removeProduct(productId).subscribe(() => this.fetchProducts());
  }
  
  ngOnDestroy() {
    this._productsService.clearData();
  }
}