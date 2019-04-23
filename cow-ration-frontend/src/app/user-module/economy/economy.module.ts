import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EconomyRoutingModule } from "./economy-routing.module";
import { RawEconomicsComponent } from './pages/raw-economics/raw-economics.component';
import { MilkCharacteristicComponent } from './pages/milk-characteristic/milk-characteristic.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PlannedIndicatorsComponent } from './pages/planned-indicators/planned-indicators.component';
import { EconomyComponent } from './economy.component';
import { StepperModule } from 'src/app/UI/stepper/stepper.module';
import { ControlsModule } from 'src/app/UI/controls/controls.module';

@NgModule({
  declarations: 
  [
    RawEconomicsComponent, 
    MilkCharacteristicComponent, 
    ExpensesComponent, 
    PlannedIndicatorsComponent,
    EconomyComponent
  ],
  imports: 
  [
    CommonModule,
    EconomyRoutingModule,
    StepperModule,
    ControlsModule
  ]
})
export class EconomyModule { }
