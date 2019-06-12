import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button-choice",
  templateUrl: "./button-choice.component.html",
  styleUrls: ["./button-choice.component.css"]
})
export class ButtonChoiceComponent implements OnInit {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

}
