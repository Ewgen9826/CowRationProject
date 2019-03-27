import { trigger, query, state, style, animate, transition, animateChild, group } from "@angular/animations";
export const menuToggle = trigger("MenuToggle", [
	state(
		"show-menu",
		style({
			width: "150px"
		})
	),
	state(
		"hide-menu",
		style({
			width: "50px"
		})
	),
	transition("show-menu => hide-menu", [
		group([ query("@IconToggle", animateChild()), animate("300ms ease-out") ])
	]),
	transition("hide-menu => show-menu", [ group([ query("@IconToggle", animateChild()), animate("300ms ease-out") ]) ])
]);

export const iconToggle = trigger("IconToggle", [
	state(
		"show-menu",
		style({
			transform: "rotate(0deg)"
		})
	),
	state(
		"hide-menu",
		style({
			transform: "rotate(180deg)"
		})
	),
	transition("show-menu => hide-menu", animate("300ms")),
	transition("hide-menu => show-menu", animate("300ms"))
]);

export const labelToggle = trigger("LabelToggle", [
	state(
		"show-menu",
		style({
			transform: "rotate(0deg)"
		})
	),
	state(
		"hide-menu",
		style({
			transform: "rotate(180deg)"
		})
	),
	transition("show-menu => hide-menu", animate("300ms")),
	transition("hide-menu => show-menu", animate("300ms"))
]);
