<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: 'app-feeding-parameters-card',
  templateUrl: './feeding-parameters-card.component.html',
  styleUrls: ['./feeding-parameters-card.component.css']
})
export class FeedingParametersCardComponent implements OnInit {
  @Input() header: string;
<<<<<<< HEAD
  @Input() value: number;
  @Output() valueChange = new EventEmitter();
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
  change(model: any) {
    this.value = model;
    this.valueChange.emit(this.value);
  }
=======

>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
}
