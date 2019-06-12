import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminPanelComponent } from "./admin-panel.component";
import { MenuComponent } from "./menu/menu.component";
import { KormsManagmentComponent } from "./korms-managment/korms-managment.component";
import { UserManagmentComponent } from "./user-managment/user-managment.component";
import { RationHistoryComponent } from "./ration-history/ration-history.component";
import { AddAdminUserComponent } from "./add-admin-user/add-admin-user.component";
import { AdminPanelRoutingModule } from "./admin-panel-routing.module";
<<<<<<< HEAD

@NgModule({
  imports: [CommonModule, AdminPanelRoutingModule],
=======
import { TablesModule } from '../UI/tables/tables.module';
import { ControlsModule } from '../UI/controls/controls.module';




@NgModule({
  imports: [
    CommonModule, 
    AdminPanelRoutingModule,
    TablesModule,
    ControlsModule,
    
   
  ],
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  declarations: [
    AdminPanelComponent,
    MenuComponent,
    KormsManagmentComponent,
    UserManagmentComponent,
    RationHistoryComponent,
    AddAdminUserComponent
<<<<<<< HEAD
=======
   
    
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  ]
})
export class AdminPanelModule {}
