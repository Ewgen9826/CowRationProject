import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox-string',
  templateUrl: './textbox-string.component.html',
  styleUrls: ['./textbox-string.component.css']
})
export class TextboxStringComponent implements OnInit {
  @Input() fontSize: string;
  @Input() colorText: string;
  @Input() fontWeight: string;
  @Input() fontStyle: string;
  @Input() lineHeight: string;
  @Input() width: string;
  @Input() height: string;
  @Input() type: string;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }
  public inputValidator(event: any) {
   
  }

}
