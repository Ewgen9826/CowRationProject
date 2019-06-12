import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedingParametersCardComponent } from './feeding-parameters-card/feeding-parameters-card.component';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@NgModule({
  declarations: 
  [
    FeedingParametersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
    ControlsModule,
    FormsModule
=======
    ControlsModule
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  ],
  exports:
    [
      FeedingParametersCardComponent
    ]
})
export class FeedingParametersCardModule { }
