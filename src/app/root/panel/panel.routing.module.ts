import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanelContainerComponent} from "./_smart-components/panel-container/panel-container.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '',
    component: PanelContainerComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/products',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
