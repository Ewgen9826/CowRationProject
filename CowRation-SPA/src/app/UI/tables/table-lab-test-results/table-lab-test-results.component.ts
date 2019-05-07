import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-lab-test-results',
  templateUrl: './table-lab-test-results.component.html',
  styleUrls: ['./table-lab-test-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableLabTestResultsComponent implements OnInit {
  @Input() headerFirstBalance: string;
  @Input() headerSecondBalance: string;
  @Input() headerThirdBalance: string;
  @Input() headerFourthBalance: string;
  @Input() headerFifthBalance: string;

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  elements: any = [
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Сенаж злаковый', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Силос кукурузный', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
    {firstColumn: 'Патока кормовая', secondColumn: '85', thirdColumn: '10', fourthColumn: '85', fifthColumn: '10'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
