import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ProductsListContainerComponent
} from "./_smart-components/products-list-container/products-list-container.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: ProductsListContainerComponent
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
