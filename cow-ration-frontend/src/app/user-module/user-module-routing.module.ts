import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RationComponent } from "./ration/ration.component";
import { RationModule } from "./ration/ration.module";
import { UserAccountModule } from "./user-account/user-account.module";
const rationRoutes: Routes = [
	{
		path: "",
		loadChildren: () => UserAccountModule
	},
	{
		path: "ration",
		component: RationComponent,
		loadChildren: () => RationModule
	}
];

@NgModule({
	imports: [ RouterModule.forChild(rationRoutes) ],
	exports: [ RouterModule ]
})
export class UserModuleRoutingModule {}
