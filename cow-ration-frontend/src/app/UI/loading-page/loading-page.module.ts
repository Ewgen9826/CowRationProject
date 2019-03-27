import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./loading/loading.component";
import { SpinnerPageComponent } from './spinner-page/spinner-page.component';
@NgModule({
  declarations:
    [
      LoadingComponent,
      SpinnerPageComponent
    ],
  imports:
    [
      CommonModule
    ],
  exports:
    [
      LoadingComponent,
      SpinnerPageComponent
    ]
})
export class LoadingPageModule {}
