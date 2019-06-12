import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StepperModule } from "../../UI/stepper/stepper.module";
import { BalanceRoutingModule } from "./balance-routing.module";
import { BalanceComponent } from './balance.component';
<<<<<<< HEAD
import { InitialDataComponent } from './components/initial-data/initial-data.component';
import { DietaryIndicatorsComponent } from './components/dietary-indicators/dietary-indicators.component';
=======
import { InitialDataComponent } from './pages/initial-data/initial-data.component';
import { DietaryIndicatorsComponent } from './pages/dietary-indicators/dietary-indicators.component';
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
import { TablesModule } from '../../UI/tables/tables.module';
import { ControlsModule } from 'src/app/UI/controls/controls.module';
import { StoreModule } from '@ngrx/store';
import { balanceReducer } from './state/balance.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BalanceEffect } from './state/balance.effect';

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
      ControlsModule,
      StoreModule.forFeature("balance", balanceReducer),
      EffectsModule.forFeature([BalanceEffect])
    ]
})
export class BalanceModule { }
