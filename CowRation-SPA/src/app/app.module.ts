import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoadingPageModule } from "./UI/loading-page/loading-page.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModuleModule } from "./user-module/user-module.module";
import { LoginModule } from "./account-login/login/login.module";
import { ErrorInterceptorProvider } from "./core/utils/error.interceptor";
import { HttpClientModule } from "@angular/common/http";
import { AlertifyService } from "./core/utils/alertify.service";
import { AuthGuard } from "./core/guards/auth.guard";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";

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
    LoadingPageModule
  ],
  providers: [ErrorInterceptorProvider, AlertifyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
