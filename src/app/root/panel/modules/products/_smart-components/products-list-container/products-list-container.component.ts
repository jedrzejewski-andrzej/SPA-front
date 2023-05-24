import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ProductsService} from "../../_services/products.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss'],
})
export class ProductsListContainerComponent implements OnInit, OnDestroy {
  listData$ : Observable<Product[] | null>;
  limit: number = 10;
  readonly displayedColumns: string[] = [
    'title',
    'brand',
    'price',
    'stock',
    'category',
  ];
  
  constructor(
    private _productsService: ProductsService
  ) {}
  
  ngOnInit() {
    this.listData$ = this._productsService.listData$;
    this.fetchProducts(this.limit)
  }
  
  private fetchProducts(limit: number): void {
    this._productsService.fetchData(limit);
  }
  
  ngOnDestroy() {
    this._productsService.clearData();
  }
}