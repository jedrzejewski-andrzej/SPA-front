import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelRoutingModule } from './panel.routing.module';
import { PANEL_SERVICES } from './_services';
import { PANEL_SMART_COMPONENTS } from './_smart-components';
import { PANEL_DUMB_COMPONENTS } from "./_dumb-components";
import {MatIconModule} from "@angular/material/icon";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [...PANEL_SMART_COMPONENTS,  ...PANEL_DUMB_COMPONENTS],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatIconModule,
    InfiniteScrollModule,
    MatTooltipModule,
  ],
  providers: [...PANEL_SERVICES],
})
export class PanelModule {}
