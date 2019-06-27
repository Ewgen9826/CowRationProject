import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class VerticalSliderComponent implements OnInit {
  @Input() value: number;

  options: Options = {
    showSelectionBar: true,
    ceil: 100,
    floor: 0,
    hidePointerLabels: true,
    hideLimitLabels: true,
    vertical: true
  };

  constructor() { }

  ngOnInit() {

  }

}
