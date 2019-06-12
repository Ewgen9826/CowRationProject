import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from "../services/toggle.service";

@Component({
  selector: 'app-sidebtn-item',
  templateUrl: './sidebtn-item.component.html',
  styleUrls: ['./sidebtn-item.component.css']
})
export class SidebtnItemComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() link: string;
  constructor(public toggleService: ToggleService) { }

  ngOnInit() { }
}
