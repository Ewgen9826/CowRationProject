import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserModuleComponent } from "./user-module/user-module.component";
import { SignInComponent } from "./account-login/login/sign-in/sign-in.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
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
    path: "company",
    component: UserModuleComponent,
    runGuardsAndResolvers: "always",
    canActivate: [AuthenticationGuardService],
    loadChildren: () => import("./user-module/user-module.module").then(mod => mod.UserModuleModule),
  },
  {
    path: "admin",
    component: AdminPanelComponent,
    // canActivate: [RoleGuardService],
    runGuardsAndResolvers: "always",
    loadChildren: () => import("./admin-panel/admin-panel.module").then(mod => mod.AdminPanelModule),
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
