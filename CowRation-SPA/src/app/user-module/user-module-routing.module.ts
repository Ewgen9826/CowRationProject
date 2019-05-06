import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RationComponent } from "./ration/ration.component";
import { RationModule } from "./ration/ration.module";
import { UserAccountModule } from "./user-account/user-account.module";

import { BalanceComponent } from './balance/balance.component';
import { BalanceModule } from './balance/balance.module';
import { EconomyComponent } from './economy/economy.component';
import { EconomyModule } from './economy/economy.module';
const rationRoutes: Routes = [
	{
		path: "",
		loadChildren: () => UserAccountModule
  },
	{
		path: "ration",
		component: RationComponent,
		loadChildren: () => RationModule
	},
	{
		path: "balance",
		component: BalanceComponent,
		loadChildren: () => BalanceModule
	},
	{
		path: "economy",
		component: EconomyComponent,
		loadChildren: () => EconomyModule
	}
];

@NgModule({
	imports: [ RouterModule.forChild(rationRoutes) ],
	exports: [ RouterModule ]
})
export class UserModuleRoutingModule {}
