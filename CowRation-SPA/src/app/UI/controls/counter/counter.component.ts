import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() fontSize: string;
  @Input() colorText: string;
  @Input() fontWeight: string;
  @Input() fontStyle: string;
  @Input() lineHeight: string;
  @Input() width: string;
  @Input() height: string;

  counterValue: number = 0;
  @Output() counterChange = new EventEmitter();
  constructor() { }
  @Input()
  get counter() {
    return this.counterValue;
  }
  set counter(value) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {

  }
  decreaseInNumber(): void {
    this.counter--;
  }
  increaseInNumber(): void {
    this.counter++;
  }
  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
    this.counter = event.target.value;
  }
}
