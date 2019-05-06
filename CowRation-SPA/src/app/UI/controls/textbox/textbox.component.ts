import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  public inputValidator(event: any) {
    const pattern = /^[0-9,]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9,]/g, "");
    }
  }

}
