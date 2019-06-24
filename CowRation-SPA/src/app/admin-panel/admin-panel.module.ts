import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
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
import { StoreModule } from '@ngrx/store';
import { reducer } from './core/reducers/user-register.reducer';




@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    TablesModule,
    ControlsModule,
    FormsModule,
  


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
