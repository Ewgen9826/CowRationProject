import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { ButtonChoiceComponent } from './button-choice/button-choice.component';
import { ButtonSortingComponent } from './button-sorting/button-sorting.component';
import { SquareBlockComponent } from './square-block/square-block.component';
import { CounterComponent } from './counter/counter.component';
import { InitialParametersBlockComponent } from './initial-parameters-block/initial-parameters-block.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { TextboxComponent } from './textbox/textbox.component';
import { VerticalSliderComponent } from './vertical-slider/vertical-slider.component';

@NgModule({
  declarations: 
  [
    ButtonCloseComponent,
    ButtonChoiceComponent,
    ButtonSortingComponent, 
    SquareBlockComponent, 
    CounterComponent, 
    InitialParametersBlockComponent, 
    ButtonComponent, TextboxComponent, VerticalSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: 
  [
    ButtonCloseComponent,
    ButtonChoiceComponent, 
    ButtonSortingComponent, 
    SquareBlockComponent, 
    CounterComponent,
    InitialParametersBlockComponent,
    ButtonComponent
  ]
})
export class ControlsModule { }
