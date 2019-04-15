import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperContainerComponent } from "./stepper-container/stepper-container.component";
import { StepperItemComponent } from "./stepper-item/stepper-item.component";
import { StepperService } from "./services/stepper.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:
    [
      StepperContainerComponent,
      StepperItemComponent
    ],
  imports:
    [
      CommonModule,
      RouterModule
    ],
  providers: [ StepperService ],
  exports:
    [
      StepperContainerComponent,
      StepperItemComponent
    ]
})
export class StepperModule {}
