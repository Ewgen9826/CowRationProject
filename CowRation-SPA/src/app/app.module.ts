import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoadingPageModule } from "./UI/loading-page/loading-page.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModuleModule } from "./user-module/user-module.module";
import { LoginModule } from "./account-login/login/login.module";
import { HttpClientModule } from "@angular/common/http";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AuthenticationGuardService } from "./core/guards/authentication-guard.service";
import { RoleGuardService } from "./core/guards/role-guard.service";
import { LoginGuardService } from "./core/guards/login-guard.service";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModuleModule,
    AdminPanelModule,
    LoginModule,
    LoadingPageModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers:
    [
      AuthenticationGuardService,
      RoleGuardService,
      LoginGuardService,
      //[{ provide: RouterStateSerializer, useClass: CustomSerializer}]
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
