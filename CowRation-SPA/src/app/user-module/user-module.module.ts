import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserModuleRoutingModule } from "./user-module-routing.module";
import { UserModuleComponent } from "./user-module.component";
import { SidenavModule } from "../UI/sidenav/sidenav.module";
import { RationModule } from "./ration/ration.module";
import { BalanceModule } from "./balance/balance.module";
import { EconomyModule } from "./economy/economy.module";
import { KormsResolver } from "../core/resolvers/korms-resolver";
import { UserKormsResolver } from "../core/resolvers/user-korms-resolver";

@NgModule({
  declarations: [UserModuleComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    SidenavModule,
    RationModule,
    BalanceModule,
    EconomyModule
  ],
  providers: [KormsResolver, UserKormsResolver]
})
export class UserModuleModule {}
