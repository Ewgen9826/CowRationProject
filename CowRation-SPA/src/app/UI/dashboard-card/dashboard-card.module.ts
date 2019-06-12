import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardCardComponent } from "./dashboard-card/dashboard-card.component";

@NgModule({
  declarations:
    [
      DashboardCardComponent
    ],
  imports:
    [
      CommonModule,
      RouterModule
    ],
  exports:
    [
      DashboardCardComponent
    ]
})
export class DashboardCardModule {}
