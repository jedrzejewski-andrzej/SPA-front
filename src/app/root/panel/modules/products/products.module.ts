import { NgModule } from '@angular/core';
import { PRODUCTS_SMART_COMPONENTS } from './_smart-components';
import { PRODUCTS_SERVICES } from './_services';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
  ],
  declarations: [...PRODUCTS_SMART_COMPONENTS],
  providers: [...PRODUCTS_SERVICES],
})
export class ProductsModule {}
