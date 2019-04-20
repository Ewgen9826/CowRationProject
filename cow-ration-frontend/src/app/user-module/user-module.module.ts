import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserModuleRoutingModule } from "./user-module-routing.module";
import { UserModuleComponent } from "./user-module.component";
import { SidenavModule } from "../UI/sidenav/sidenav.module";
import { RationModule } from "./ration/ration.module";
import { BalanceModule } from './balance/balance.module';

@NgModule({
	declarations: [ UserModuleComponent ],
	imports: [ CommonModule, UserModuleRoutingModule, SidenavModule, RationModule, BalanceModule]
})
export class UserModuleModule {}
