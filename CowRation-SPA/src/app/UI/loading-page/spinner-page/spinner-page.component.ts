import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css']
})
export class SpinnerPageComponent implements OnInit {

  @Input() loading: Observable<any>;
  isShow;
  constructor() { }

  ngOnInit() {
    this.loading.subscribe(data => {
      this.isShow = data;
    });
  }

}
