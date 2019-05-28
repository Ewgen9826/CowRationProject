import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminPanelComponent } from "./admin-panel.component";
import { MenuComponent } from "./menu/menu.component";
import { KormsManagmentComponent } from "./korms-managment/korms-managment.component";
import { UserManagmentComponent } from "./user-managment/user-managment.component";
import { RationHistoryComponent } from "./ration-history/ration-history.component";
import { AddAdminUserComponent } from "./add-admin-user/add-admin-user.component";
import { AdminPanelRoutingModule } from "./admin-panel-routing.module";
import { ControlsModule } from 'src/app/UI/controls/controls.module';

import { TablesModule } from 'src/app/UI/tables/tables.module';

@NgModule({
  imports: [CommonModule, AdminPanelRoutingModule, ControlsModule, TablesModule],
  declarations: [
    AdminPanelComponent,
    MenuComponent,
    KormsManagmentComponent,
    UserManagmentComponent,
    RationHistoryComponent,
    AddAdminUserComponent
  ],
  exports: 
    [
      TablesModule 
    ]
})
export class AdminPanelModule {}
