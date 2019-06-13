import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelComponent } from './admin-panel.component';
import { MenuComponent } from './menu/menu.component';
import { KormsManagmentComponent } from './korms-managment/korms-managment.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { RationHistoryComponent } from './ration-history/ration-history.component';
import { AddAdminUserComponent } from './add-admin-user/add-admin-user.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { TablesModule } from '../UI/tables/tables.module';
import { ControlsModule } from '../UI/controls/controls.module';
import { KormsInputNewComponent } from './korms-managment/korms-input-new/korms-input-new.component';




@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    TablesModule,
    ControlsModule,


  ],
  declarations: [
    AdminPanelComponent,
    MenuComponent,
    KormsManagmentComponent,
    UserManagmentComponent,
    RationHistoryComponent,
    AddAdminUserComponent,
    KormsInputNewComponent
  ]
})
export class AdminPanelModule { }
