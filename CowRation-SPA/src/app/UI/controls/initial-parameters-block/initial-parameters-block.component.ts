import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-initial-parameters-block',
  templateUrl: './initial-parameters-block.component.html',
  styleUrls: ['./initial-parameters-block.component.css'],
})
export class InitialParametersBlockComponent implements OnInit {
  @Input() nameParameter: string;
  @Input() parameterUnit: string;
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
