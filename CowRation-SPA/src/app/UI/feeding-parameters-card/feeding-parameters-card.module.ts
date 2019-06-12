import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedingParametersCardComponent } from './feeding-parameters-card/feeding-parameters-card.component';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: 
  [
    FeedingParametersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule,
    FormsModule
  ],
  exports:
    [
      FeedingParametersCardComponent
    ]
})
export class FeedingParametersCardModule { }
