import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserAccountRoutingModule } from "./user-account-routing.module";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SettingsComponent } from "./settings/settings.component";
import { DashboardCardModule } from "src/app/UI/dashboard-card/dashboard-card.module";
import { FeedingParametersCardModule } from 'src/app/UI/feeding-parameters-card/feeding-parameters-card.module';

@NgModule({
	declarations: [ HomeComponent, AccountComponent, NotificationsComponent, SettingsComponent ],
	imports: [ CommonModule, UserAccountRoutingModule, DashboardCardModule,FeedingParametersCardModule ]
})
export class UserAccountModule {}
