import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found.routing.module';
import { NOT_FOUND_SMART_COMPONENTS } from './_smart-components';

@NgModule({
  declarations: [...NOT_FOUND_SMART_COMPONENTS],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
