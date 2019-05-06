import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
	{
		path: "home",
    component: HomeComponent,
    data:{ title: "Главная"}
	},
	{
		path: "account",
		component: AccountComponent,
    data:{ title: "Профиль"}
	},
	{
		path: "notifications",
		component: NotificationsComponent,
    data:{ title: "Уведомления"}
	},
	{
		path: "settings",
    component: SettingsComponent,
    data:{ title: "Настройки"}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UserAccountRoutingModule {}
