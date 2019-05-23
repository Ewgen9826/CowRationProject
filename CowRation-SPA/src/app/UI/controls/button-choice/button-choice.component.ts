import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button-choice",
  templateUrl: "./button-choice.component.html",
  styleUrls: ["./button-choice.component.css"]
})
export class ButtonChoiceComponent implements OnInit {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
  onValueChange( model: boolean ) {
    this.value = model;
    this.valueChange.emit( model );
  }
}
