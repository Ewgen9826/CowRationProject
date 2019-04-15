import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StepperModule } from "../../UI/stepper/stepper.module";
import { RationRoutingModule } from "./ration-routing.module";
import { RationComponent } from "./ration.component";
import { SelectionFeedComponent } from "./pages/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./pages/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./pages/laboratory-feed/laboratory-feed.component";

@NgModule({
  declarations:
    [
      SelectionFeedComponent,
      CategoryFeedComponent,
      LaboratoryFeedComponent,
      RationComponent
    ],
  imports:
    [
      CommonModule,
      RationRoutingModule,
      StepperModule
    ]
})
export class RationModule {}
