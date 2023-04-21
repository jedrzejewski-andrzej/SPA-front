import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { LOGIN_SMART_COMPONENTS } from './_smart-components';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [...LOGIN_SMART_COMPONENTS],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class LoginModule {}
