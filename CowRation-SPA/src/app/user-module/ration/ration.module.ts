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
import { ControlsModule } from 'src/app/UI/controls/controls.module';
import { FeedingParametersCardModule } from 'src/app/UI/feeding-parameters-card/feeding-parameters-card.module';
import { CostRationComponent } from './pages/cost-ration/cost-ration.component';
import { RationResultComponent } from './pages/ration-result/ration-result.component';

@NgModule({
  declarations:
    [
      SelectionFeedComponent,
      CategoryFeedComponent,
      LaboratoryFeedComponent,
      CountCowComponent,
      RationComponent,
      CostRationComponent,
      RationResultComponent
    ],
  imports:
    [
      CommonModule,
      RationRoutingModule,
      StepperModule,
      TablesModule,
      ControlsModule,
      FeedingParametersCardModule
    ]
})
export class RationModule {}
