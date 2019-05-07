import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFeedSelectionComponent } from './table-feed-selection/table-feed-selection.component';
import { ControlsModule } from '../controls/controls.module';
import { TableBalanceComponent } from './table-balance/table-balance.component';
import { RouterModule } from "@angular/router";
import { StepperService } from '../stepper/services/stepper.service';
import { TableEconomyComponent } from './table-economy/table-economy.component';
import { TableLabTestResultsComponent } from './table-lab-test-results/table-lab-test-results.component';

@NgModule({
  declarations: 
    [
      TableFeedSelectionComponent, 
      TableBalanceComponent, 
      TableEconomyComponent, 
      TableLabTestResultsComponent
    ],
  imports: 
    [
      CommonModule, 
      ControlsModule,
      RouterModule
    ],
  providers: [ StepperService ],
  exports: 
    [
      TableFeedSelectionComponent, 
      TableBalanceComponent,
      TableEconomyComponent,
      TableLabTestResultsComponent 
    ]
})
export class TablesModule { }
