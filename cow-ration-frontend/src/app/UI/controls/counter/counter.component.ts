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
  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
