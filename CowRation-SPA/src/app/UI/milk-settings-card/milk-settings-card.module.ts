import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilkSettingsCardComponent } from "./milk-settings-card.component";
import { ControlsModule } from "../controls/controls.module";

@NgModule({
  imports: [CommonModule, ControlsModule],
  declarations: [
    MilkSettingsCardComponent
  ],
  exports: [MilkSettingsCardComponent]
})
export class MilkSettingsCardModule {}
