import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
<<<<<<< HEAD
import { Laboratory } from 'src/app/user-module/ration/models/laboratory';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

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

<<<<<<< HEAD
  @Input() laboratoryIndicators: Laboratory[];

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
=======
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  elements: any = [
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Сенаж злаковый', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Силос кукурузный', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Патока кормовая', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
  ];
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  constructor() { }

  ngOnInit() {
  }

}
