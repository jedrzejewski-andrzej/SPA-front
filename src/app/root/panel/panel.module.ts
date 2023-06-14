import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelRoutingModule } from './panel.routing.module';
import { PANEL_SMART_COMPONENTS } from './_smart-components';
import { MatIconModule } from "@angular/material/icon";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [...PANEL_SMART_COMPONENTS],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatIconModule,
    InfiniteScrollModule,
    MatTooltipModule,
    MatTabsModule,
  ]
})
export class PanelModule {}
