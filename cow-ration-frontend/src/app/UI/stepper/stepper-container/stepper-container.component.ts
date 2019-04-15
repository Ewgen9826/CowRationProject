import { Component, OnInit,Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-stepper-container",
  templateUrl: "./stepper-container.component.html",
  styleUrls:
    [
      "./stepper-container.component.css"
    ],
  encapsulation: ViewEncapsulation.None
})
export class StepperContainerComponent implements OnInit {

  @Input() headerFirstItem: string;
  @Input() headerLastItem: string;
  @Input() headerStepper: string;

  constructor() {}

  ngOnInit() {}
}
