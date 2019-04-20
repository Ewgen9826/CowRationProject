import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-square-block',
  templateUrl: './square-block.component.html',
  styleUrls: ['./square-block.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class SquareBlockComponent implements OnInit {

  @Input() blockHeaderName: string;

  constructor() { }

  ngOnInit() {
  }

}
