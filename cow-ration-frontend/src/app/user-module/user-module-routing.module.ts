import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RationComponent } from "./ration/ration.component";
import { RationModule } from "./ration/ration.module";
import { UserAccountModule } from "./user-account/user-account.module";

import { BalanceComponent } from './balance/balance.component';
import { BalanceModule } from './balance/balance.module';
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
	}
];

@NgModule({
	imports: [ RouterModule.forChild(rationRoutes) ],
	exports: [ RouterModule ]
})
export class UserModuleRoutingModule {}
