import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css']
})
export class SpinnerPageComponent implements OnInit {
  @Input() isShow: boolean;
  constructor() { }

  ngOnInit() {
  }

}
