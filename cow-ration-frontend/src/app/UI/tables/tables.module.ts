import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFeedSelectionComponent } from './table-feed-selection/table-feed-selection.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  declarations: [TableFeedSelectionComponent
  ],
  imports: [
    CommonModule, ControlsModule
  ],
  exports: [TableFeedSelectionComponent]
})
export class TablesModule { }
