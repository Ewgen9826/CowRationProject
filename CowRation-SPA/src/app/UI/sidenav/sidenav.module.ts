import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidenavContainerComponent } from "./sidenav-container/sidenav-container.component";
import { SidenavItemComponent } from "./sidenav-item/sidenav-item.component";
import { ToggleService } from "./services/toggle.service";
import { SidebtnItemComponent } from "./sidebtn-item/sidebtn-item.component";

@NgModule({
	declarations: [SidenavContainerComponent, SidenavItemComponent, SidebtnItemComponent],
	imports: [CommonModule, RouterModule],
	providers: [ToggleService],
	exports: [SidenavContainerComponent, SidenavItemComponent, SidebtnItemComponent]
})
export class SidenavModule { }
