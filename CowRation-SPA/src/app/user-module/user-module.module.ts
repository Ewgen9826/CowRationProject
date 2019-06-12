import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserModuleRoutingModule } from "./user-module-routing.module";
import { UserModuleComponent } from "./user-module.component";
import { SidenavModule } from "../UI/sidenav/sidenav.module";
import { RationModule } from "./ration/ration.module";
import { BalanceModule } from "./balance/balance.module";
import { EconomyModule } from "./economy/economy.module";

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
  providers: []
})
<<<<<<< HEAD
export class UserModuleModule { }
=======
export class UserModuleModule {}
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
