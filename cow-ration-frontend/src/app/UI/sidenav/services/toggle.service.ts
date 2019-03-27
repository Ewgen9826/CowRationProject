import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ToggleService {
	public showMenu = true;
	constructor() {}
	get stateMenuToggle() {
		return this.showMenu ? "show-menu" : "hide-menu";
	}
	toggle() {
		this.showMenu = !this.showMenu;
	}
}
