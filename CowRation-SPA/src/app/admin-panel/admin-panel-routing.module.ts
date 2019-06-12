import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { UserManagmentComponent } from "./user-managment/user-managment.component";
import { KormsManagmentComponent } from "./korms-managment/korms-managment.component";
import { RationHistoryComponent } from "./ration-history/ration-history.component";
<<<<<<< HEAD
=======
import { AddAdminUserComponent } from './add-admin-user/add-admin-user.component';
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

const rationRoutes: Routes = [
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "user-managment",
    component: UserManagmentComponent
  },
  {
    path: "korms-managment",
    component: KormsManagmentComponent
  },
  {
    path: "ration-history",
    component: RationHistoryComponent
  },
  {
<<<<<<< HEAD
=======
    path: "new-user-admin",
    component: AddAdminUserComponent
  },
  {
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    path: "",
    redirectTo: "menu",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(rationRoutes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
