import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserModuleRoutingModule } from "./user-module-routing.module";
import { UserModuleComponent } from "./user-module.component";
import { SidenavModule } from "../UI/sidenav/sidenav.module";
import { RationModule } from "./ration/ration.module";
import { BalanceModule } from "./balance/balance.module";
import { EconomyModule } from "./economy/economy.module";
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './state/user.effect';
import { LoadingPageModule } from '../UI/loading-page/loading-page.module';

@NgModule({
  declarations: [UserModuleComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    SidenavModule,
    RationModule,
    BalanceModule,
    EconomyModule,
    LoadingPageModule,
    StoreModule.forFeature("user", userReducer),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: []
})
export class UserModuleModule { }
