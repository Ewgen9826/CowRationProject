import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stepper-item",
  templateUrl: "./stepper-item.component.html",
  styleUrls:
    [
      "./stepper-item.component.css"
    ]
})
export class StepperItemComponent implements OnInit {

  @Input() header: string;

  constructor() {}

  ngOnInit() {}
}
