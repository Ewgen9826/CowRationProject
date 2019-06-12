import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserModuleComponent } from "./user-module/user-module.component";
import { SignInComponent } from "./account-login/login/sign-in/sign-in.component";
import { RegisterComponent } from "./account-login/login/register/register.component";
import { UserModuleModule } from "./user-module/user-module.module";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { AuthenticationGuardService } from "./core/guards/authentication-guard.service";
import { RoleGuardService } from "./core/guards/role-guard.service";
import { LoginGuardService } from "./core/guards/login-guard.service";

const routes: Routes = [
  {
    path: "login",
    component: SignInComponent,
    canActivate: [LoginGuardService],
    data: { title: "Вход в систему" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Регистрация" }
  },
  {
    path: "company",
    component: UserModuleComponent,
    runGuardsAndResolvers: "always",
    canActivate: [AuthenticationGuardService],
    loadChildren: () => UserModuleModule
  },
  {
    path: "admin",
    component: AdminPanelComponent,
    //canActivate: [RoleGuardService],
    runGuardsAndResolvers: "always",
    loadChildren: () => AdminPanelModule,
    data: { expectedRole: "Admin" }
  },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
