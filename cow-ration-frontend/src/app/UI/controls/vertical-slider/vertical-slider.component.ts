import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalSliderComponent implements OnInit {
  value: number = 50;
  
  options: Options = {
    showSelectionBar: true,
    ceil:100,
    floor:0,
    hidePointerLabels:true,
    hideLimitLabels:true,
    vertical:true
  };
  
  constructor() { }

  ngOnInit() {
  
  }

}
