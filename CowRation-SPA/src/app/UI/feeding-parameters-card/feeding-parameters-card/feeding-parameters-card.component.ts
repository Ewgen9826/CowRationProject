import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feeding-parameters-card',
  templateUrl: './feeding-parameters-card.component.html',
  styleUrls: ['./feeding-parameters-card.component.css']
})
export class FeedingParametersCardComponent implements OnInit {
  @Input() header: string;
  @Input() value: number;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  change(model: any) {
    this.value = model;
    this.valueChange.emit(this.value);
  }
}
