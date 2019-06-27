import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() fontSize: string;
  @Input() colorText: string;
  @Input() fontWeight: string;
  @Input() fontStyle: string;
  @Input() lineHeight: string;
  @Input() width: string;
  @Input() height: string;

  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  public inputValidator(event: any) {
    const pattern = /^(\d*\.)?\d+$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^(\d*\.)?\d+$/g, "");
    }
    this.value = (<HTMLInputElement>event.target).valueAsNumber;
    this.valueChange.emit(this.value);
  }

}
