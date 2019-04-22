import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { ButtonChoiceComponent } from './button-choice/button-choice.component';
import { ButtonSortingComponent } from './button-sorting/button-sorting.component';
import { SquareBlockComponent } from './square-block/square-block.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: 
  [
    ButtonCloseComponent,
    ButtonChoiceComponent,
    ButtonSortingComponent, 
    SquareBlockComponent, 
    CounterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: 
  [
    ButtonCloseComponent,
    ButtonChoiceComponent, 
    ButtonSortingComponent, 
    SquareBlockComponent, 
    CounterComponent]
})
export class ControlsModule { }
