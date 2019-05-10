import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-cost-ration',
  templateUrl: './table-cost-ration.component.html',
  styleUrls: ['./table-cost-ration.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TableCostRationComponent implements OnInit {
  intervalBotton;
  intervalTop;
  
  @Input() headerFirstBalance: string;
  @Input() headerSecondBalance: string;
  @Input() headerThirdBalance: string;

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  public scrollTop(): void {
    this.intervalTop = 200;
    this.widgetsContent.nativeElement.scrollTo({ top: (this.widgetsContent.nativeElement.scrollTop - this.intervalTop), behavior: 'smooth' });
    this.intervalBotton = 0;
  }
  public scrollBotton(): void {      
    this.intervalBotton = 200;
    this.widgetsContent.nativeElement.scrollTo({ top: (this.widgetsContent.nativeElement.scrollTop + this.intervalBotton), behavior: 'smooth' });
    this.intervalTop = 0;    
  }
  elements: any = [
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Солома ячменная', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Солома ячменная', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Солома ячменная', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Солома ячменная', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Солома ячменная', secondColumn: '8874', thirdColumn: '10' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
