import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFeedSelectionComponent } from './table-feed-selection/table-feed-selection.component';
import { ControlsModule } from '../controls/controls.module';
import { TableBalanceComponent } from './table-balance/table-balance.component';
import { RouterModule } from "@angular/router";
import { StepperService } from '../stepper/services/stepper.service';
import { TableEconomyComponent } from './table-economy/table-economy.component';
import { TableLabTestResultsComponent } from './table-lab-test-results/table-lab-test-results.component';
import { TableCostRationComponent } from './table-cost-ration/table-cost-ration.component';
<<<<<<< HEAD
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { FormsModule } from "@angular/forms";
=======
<<<<<<< HEAD
import { TabletUsersComponent } from './tablet-users/tablet-users.component';
=======
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { FormsModule } from "@angular/forms";
>>>>>>> 473620e3765512c52017157f7cc404eb9abf888b
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@NgModule({
  declarations:
    [
<<<<<<< HEAD
=======
<<<<<<< HEAD
      TableFeedSelectionComponent, 
      TableBalanceComponent, 
      TableEconomyComponent, 
      TableLabTestResultsComponent, 
      TableCostRationComponent, TabletUsersComponent
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
      TableFeedSelectionComponent,
      TableBalanceComponent,
      TableEconomyComponent,
      TableLabTestResultsComponent,
      TableCostRationComponent, TableComponent, TableRowComponent
<<<<<<< HEAD
=======
>>>>>>> 473620e3765512c52017157f7cc404eb9abf888b
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    ],
  imports:
    [
      CommonModule,
      ControlsModule,
      RouterModule,
      FormsModule
    ],
  providers: [StepperService],
  exports:
    [
      TableFeedSelectionComponent,
      TableBalanceComponent,
      TableEconomyComponent,
      TableLabTestResultsComponent,
      TableCostRationComponent,
<<<<<<< HEAD
      TableComponent,
      TableRowComponent
=======
<<<<<<< HEAD
      TabletUsersComponent
=======
      TableComponent,
      TableRowComponent
>>>>>>> 473620e3765512c52017157f7cc404eb9abf888b
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    ]
})
export class TablesModule { }
