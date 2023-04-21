import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedUserGuard} from "./guards/logged-user.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/panel',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./root/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'panel',
    canActivateChild: [() => inject(LoggedUserGuard).canActivateChild()],
    loadChildren: () =>
      import('./root/panel/panel.module').then(m => m.PanelModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./root/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
