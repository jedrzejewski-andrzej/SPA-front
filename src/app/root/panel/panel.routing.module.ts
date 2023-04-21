import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanelContainerComponent} from "./_smart-components/panel-container/panel-container.component";

const routes: Routes = [
  {
    path: '',
    component: PanelContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
