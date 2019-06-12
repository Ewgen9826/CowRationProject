import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { StepperModule } from "../../UI/stepper/stepper.module";
import { RationRoutingModule } from "./ration-routing.module";
import { RationComponent } from "./ration.component";
import { SelectionFeedComponent } from "./components/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./components/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./components/laboratory-feed/laboratory-feed.component";
import { TablesModule } from "src/app/UI/tables/tables.module";
import { CountCowComponent } from "./components/count-cow/count-cow.component";
import { ControlsModule } from 'src/app/UI/controls/controls.module';
import { FeedingParametersCardModule } from 'src/app/UI/feeding-parameters-card/feeding-parameters-card.module';
import { CostRationComponent } from './components/cost-ration/cost-ration.component';
import { RationResultComponent } from './components/ration-result/ration-result.component';
import { KormService } from "./services/korm.service";
import { reducer } from "./state/ration.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RationEffects } from "./state/ration.effect";

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
      FeedingParametersCardModule,
      FormsModule,
      StoreModule.forFeature("ration", reducer),
      EffectsModule.forFeature([RationEffects]),
    ],
  providers: [KormService]
})
export class RationModule { }
