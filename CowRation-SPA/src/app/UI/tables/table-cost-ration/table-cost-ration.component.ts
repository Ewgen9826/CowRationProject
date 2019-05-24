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
    {firstColumn: 'Солома ячменная', secondColumn: 2},
    {firstColumn: 'Сенаж злаково-разнотравный', secondColumn: 12.5 },
    {firstColumn: 'Силос кукурузный', secondColumn: 15.5},
    {firstColumn: 'Патока кормовая', secondColumn: 0.5},
    {firstColumn: 'Жом свекловичный свежий', secondColumn: '5.8' },
    {firstColumn: 'Кукуруза зерно', secondColumn: 1.3 },
    {firstColumn: 'Овес зерно', secondColumn: 1.5},
    {firstColumn: 'Тритикале', secondColumn: 1.6 },
    {firstColumn: 'Рожь зерно', secondColumn: 0.9 },
    {firstColumn: 'Шрот подсолнечниковый', secondColumn: '2.1'},
    {firstColumn: 'Мел кормовой', secondColumn: 0.065 },
    {firstColumn: 'Соль поваренная', secondColumn: 0.095 },
    {firstColumn: 'Сода пищевая', secondColumn: 0.12 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
