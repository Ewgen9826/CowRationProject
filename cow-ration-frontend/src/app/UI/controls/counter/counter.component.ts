import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  days:number = 0;
  constructor() { }

  ngOnInit() {
    
  }
  decreaseInNumber(): void {
    this.days--;
  }
  increaseInNumber(): void {
    this.days++;
  }
}
