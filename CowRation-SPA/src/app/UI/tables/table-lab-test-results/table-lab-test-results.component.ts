import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Laboratory } from 'src/app/user-module/ration/models/laboratory';

@Component({
  selector: 'app-table-lab-test-results',
  templateUrl: './table-lab-test-results.component.html',
  styleUrls: ['./table-lab-test-results.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TableLabTestResultsComponent implements OnInit {
  @Input() headerFirstBalance: string;
  @Input() headerSecondBalance: string;
  @Input() headerThirdBalance: string;
  @Input() headerFourthBalance: string;
  @Input() headerFifthBalance: string;

  @Input() laboratoryIndicators: Laboratory[];

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
