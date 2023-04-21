import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './_smart-components/login-container/login-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
