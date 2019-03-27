import { Component, OnInit } from "@angular/core";
import { menuToggle, iconToggle } from "../animations/sidenav-toggle.animation";
import { ToggleService } from "../services/toggle.service";
@Component({
	selector: "app-sidenav-container",
	templateUrl: "./sidenav-container.component.html",
	styleUrls: [ "./sidenav-container.component.css" ],
	animations: [ menuToggle, iconToggle ]
})
export class SidenavContainerComponent implements OnInit {
	constructor(public toggleService: ToggleService) {}

	ngOnInit() {}
}
