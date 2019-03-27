import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserModuleComponent } from "./user-module/user-module.component";
import { SignInComponent } from "./account-login/login/sign-in/sign-in.component";
import { RegisterComponent } from "./account-login/login/register/register.component";
import { UserModuleModule } from "./user-module/user-module.module";

const routes: Routes = [
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full"
	},
	{
		path: "login",
		component: SignInComponent,
		data: { title: "Вход в систему" }
	},
	{
		path: "register",
		component: RegisterComponent,
		data: { title: "Регистрация" }
	},
	{
		path: "company",
		component: UserModuleComponent,
		loadChildren: () => UserModuleModule
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
