import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-korms-input-new',
  templateUrl: './korms-input-new.component.html',
  styleUrls: ['./korms-input-new.component.css']
})
export class KormsInputNewComponent implements OnInit {

  @Input() notification: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
