import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-economy',
  templateUrl: './table-economy.component.html',
  styleUrls: ['./table-economy.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TableEconomyComponent implements OnInit {
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
    {firstColumn: 'Оплата труда', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Корма', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Работы и услуги', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Оплата труда', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Корма', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Работы и услуги', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Оплата труда', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Корма', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Работы и услуги', secondColumn: '8874', thirdColumn: '10' },
    {firstColumn: 'Оплата труда', secondColumn: '85', thirdColumn: '10'},
    {firstColumn: 'Корма', secondColumn: '837', thirdColumn: '10' },
    {firstColumn: 'Работы и услуги', secondColumn: '8874', thirdColumn: '10' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
