import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-square-block',
  templateUrl: './square-block.component.html',
  styleUrls: ['./square-block.component.css'],

  encapsulation: ViewEncapsulation.Native
})
export class SquareBlockComponent implements OnInit {

  @Input() blockHeaderName: string;
  @Input() blocksectionName: string;
  @Input() height: string;
  @Input() width: string;
  constructor() { }

  ngOnInit() {
  }

}
