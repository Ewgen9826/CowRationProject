import { Component, Input, OnInit } from "@angular/core";
import { ToggleService } from "../services/toggle.service";

@Component({
	selector: "app-sidenav-item",
	templateUrl: "./sidenav-item.component.html",
	styleUrls: [ "./sidenav-item.component.css" ]
})
export class SidenavItemComponent implements OnInit {
	@Input() icon: string;
	@Input() label: string;
	@Input() link: string;
	constructor(public toggleService: ToggleService) {}

	ngOnInit() {}
}
