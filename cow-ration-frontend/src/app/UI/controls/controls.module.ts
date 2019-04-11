import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { ButtonChoiceComponent } from './button-choice/button-choice.component';
import { ButtonSortingComponent } from './button-sorting/button-sorting.component';

@NgModule({
  declarations: [ButtonCloseComponent, ButtonChoiceComponent, ButtonSortingComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonCloseComponent, ButtonChoiceComponent, ButtonSortingComponent]
})
export class ControlsModule { }
