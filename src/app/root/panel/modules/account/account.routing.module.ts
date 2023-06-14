import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountContainerComponent } from './_smart-components/account-container/account-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountContainerComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
