import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilkSettingsCardComponent } from "./milk-settings-card.component";
import { VerticalSliderComponent } from "../controls/vertical-slider/vertical-slider.component";
import { TextboxComponent } from "../controls/textbox/textbox.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    MilkSettingsCardComponent,
    VerticalSliderComponent,
    TextboxComponent
  ],
  exports: [MilkSettingsCardComponent]
})
export class MilkSettingsCardModule {}
