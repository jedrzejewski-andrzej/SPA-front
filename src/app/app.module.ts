import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {AppRoutingModule} from "./app.routing.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { APP_SMART_COMPONENTS } from './_smart-components';
import {environment} from "../environments/environment";
import { AppComponent } from './_smart-components/app-component/app.component';
import {APP_EFFECTS} from "./store/effects";
import {metaReducers} from "./store/metareducers";
import {reducerProvider, reducerToken} from "./store";
import {AuthFacade} from "./store/facades/auth.facade";
import {APP_FACADES} from "./store/facades";
import {APP_GUARDS} from "./guards";
import {APP_SERVICES} from "./_services";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ...APP_SMART_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerToken, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(APP_EFFECTS),
    HttpClientModule
  ],
  providers: [...APP_FACADES, reducerProvider, ...APP_GUARDS, ...APP_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly _authFacade: AuthFacade) {
    this._authFacade.initLogin();
  }
}
