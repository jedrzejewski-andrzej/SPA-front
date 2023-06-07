import { NgModule } from '@angular/core';
import { PRODUCTS_SMART_COMPONENTS } from './_smart-components';
import { PRODUCTS_SERVICES } from './_services';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [...PRODUCTS_SMART_COMPONENTS],
  providers: [...PRODUCTS_SERVICES],
})
export class ProductsModule {}
