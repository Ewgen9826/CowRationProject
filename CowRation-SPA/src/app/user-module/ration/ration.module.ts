import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StepperModule } from "../../UI/stepper/stepper.module";
import { RationRoutingModule } from "./ration-routing.module";
import { RationComponent } from "./ration.component";
import { SelectionFeedComponent } from "./pages/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./pages/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./pages/laboratory-feed/laboratory-feed.component";
import { TablesModule } from "src/app/UI/tables/tables.module";
import { CountCowComponent } from "./pages/count-cow/count-cow.component";

@NgModule({
  declarations:
    [
      SelectionFeedComponent,
      CategoryFeedComponent,
      LaboratoryFeedComponent,
      CountCowComponent,
      RationComponent
    ],
  imports:
    [
      CommonModule,
      RationRoutingModule,
      StepperModule,
      TablesModule
    ]
})
export class RationModule {}
