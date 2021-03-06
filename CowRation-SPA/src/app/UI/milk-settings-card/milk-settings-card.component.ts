import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-milk-settings-card',
  templateUrl: './milk-settings-card.component.html',
  styleUrls: ['./milk-settings-card.component.css']
})
export class MilkSettingsCardComponent implements OnInit {

  @Input() percent: number;
  @Input() price: number;

  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
