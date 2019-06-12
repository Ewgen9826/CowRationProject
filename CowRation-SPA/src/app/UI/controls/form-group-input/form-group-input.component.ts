import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-group-input',
  templateUrl: './form-group-input.component.html',
  styleUrls: ['./form-group-input.component.css'],

  encapsulation: ViewEncapsulation.Native
})
export class FormGroupInputComponent implements OnInit {

  @Input() blockHeaderName: string;
  @Input() blockHeaderNameSecond: string;
  @Input() firstblock = true;
  @Input() showBlock = false;

  showNewBlock(){
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }


  constructor() { }

  ngOnInit() {
  }

}
