import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserModuleComponent } from "./user-module/user-module.component";
import { SignInComponent } from "./account-login/login/sign-in/sign-in.component";
import { RegisterComponent } from "./account-login/login/register/register.component";
import { UserModuleModule } from "./user-module/user-module.module";
import { AuthGuard } from "./core/guards/auth.guard";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: SignInComponent,
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
    canActivate: [AuthGuard],
    loadChildren: () => UserModuleModule
  },
  {
    path: "admin",
    component: AdminPanelComponent,
    loadChildren: () => AdminPanelModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
