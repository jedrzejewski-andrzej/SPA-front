import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { AUTH_SMART_COMPONENTS } from './_smart-components';

@NgModule({
  declarations: [...AUTH_SMART_COMPONENTS],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
