import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RationComponent } from "./ration/ration.component";
import { BalanceComponent } from './balance/balance.component';
import { EconomyComponent } from './economy/economy.component';
const rationRoutes: Routes = [
	{
		path: "ration",
		component: RationComponent,
		loadChildren: () => import("./ration/ration.module").then(mod => mod.RationModule),
	},
	{
		path: "balance",
		component: BalanceComponent,
		loadChildren: () => import("./balance/balance.module").then(mod => mod.BalanceModule),
	},
	{
		path: "economy",
		component: EconomyComponent,
		loadChildren: () => import("./economy/economy.module").then(mod => mod.EconomyModule),
	},
	{
		path: "",
		loadChildren: () => import("./user-account/user-account.module").then(mod => mod.UserAccountModule)
	},
];

@NgModule({
	imports: [RouterModule.forChild(rationRoutes)],
	exports: [RouterModule]
})
export class UserModuleRoutingModule { }
