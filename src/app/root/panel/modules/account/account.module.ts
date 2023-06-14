import { NgModule } from '@angular/core';
import { ACCOUNT_SMART_COMPONENTS } from './_smart-components';
import { ACCOUNT_SERVICES } from './_services';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [...ACCOUNT_SMART_COMPONENTS],
  providers: [...ACCOUNT_SERVICES],
})
export class AccountModule {}
