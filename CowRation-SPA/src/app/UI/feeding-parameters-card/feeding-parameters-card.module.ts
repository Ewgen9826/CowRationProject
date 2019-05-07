import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedingParametersCardComponent } from './feeding-parameters-card/feeding-parameters-card.component';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  declarations: 
  [
    FeedingParametersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule
  ],
  exports:
    [
      FeedingParametersCardComponent
    ]
})
export class FeedingParametersCardModule { }
