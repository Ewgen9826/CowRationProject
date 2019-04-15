import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoadingPageModule } from "./UI/loading-page/loading-page.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModuleModule } from "./user-module/user-module.module";
import { LoginModule } from "./account-login/login/login.module";
import { TablesModule } from "./UI/tables/tables.module";
import { ControlsModule } from "./UI/controls/controls.module";

@NgModule({
  declarations:
    [
      AppComponent
    ],
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      UserModuleModule,
      LoginModule,
      LoadingPageModule,
      TablesModule,
      ControlsModule
    ],
  providers: [],
  bootstrap:
    [
      AppComponent
    ]
})
export class AppModule {}
