import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feeding-parameters-card',
  templateUrl: './feeding-parameters-card.component.html',
  styleUrls: ['./feeding-parameters-card.component.css']
})
export class FeedingParametersCardComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
