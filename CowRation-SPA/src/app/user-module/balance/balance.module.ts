import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StepperModule } from "../../UI/stepper/stepper.module";
import { BalanceRoutingModule } from "./balance-routing.module";
import { BalanceComponent } from './balance.component';
import { InitialDataComponent } from './pages/initial-data/initial-data.component';
import { DietaryIndicatorsComponent } from './pages/dietary-indicators/dietary-indicators.component';
import { TablesModule } from '../../UI/tables/tables.module';
import { ControlsModule } from 'src/app/UI/controls/controls.module';

@NgModule({
  declarations: 
  [
    InitialDataComponent, 
    DietaryIndicatorsComponent,
    BalanceComponent
  ],
  imports: 
  [
    CommonModule,
    BalanceRoutingModule,
    StepperModule,
    TablesModule,
    ControlsModule
  ]
})
export class BalanceModule { }
