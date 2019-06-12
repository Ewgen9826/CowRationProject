import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EconomyRoutingModule } from "./economy-routing.module";
import { RawEconomicsComponent } from "./components/raw-economics/raw-economics.component";
import { MilkCharacteristicComponent } from "./components/milk-characteristic/milk-characteristic.component";
import { ExpensesComponent } from "./components/expenses/expenses.component";
import { EconomyComponent } from "./economy.component";
import { StepperModule } from "src/app/UI/stepper/stepper.module";
import { ControlsModule } from "src/app/UI/controls/controls.module";
import { TablesModule } from "src/app/UI/tables/tables.module";
import { MilkSettingsCardModule } from "src/app/UI/milk-settings-card/milk-settings-card.module";
import { RationResultComponent } from "./components/ration-result/ration-result.component";
import { EconomyResultComponent } from "./components/economy-result/economy-result.component";

@NgModule({
  declarations: [
    RawEconomicsComponent,
    MilkCharacteristicComponent,
    ExpensesComponent,
    EconomyComponent,
    RationResultComponent,
    EconomyResultComponent
  ],
  imports: [
    CommonModule,
    EconomyRoutingModule,
    StepperModule,
    ControlsModule,
    TablesModule,
    MilkSettingsCardModule
  ]
})
export class EconomyModule { }
