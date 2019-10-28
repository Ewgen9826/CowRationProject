import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Ration } from 'src/app/user-module/ration/models/ration';

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

  @Input() rations:Ration[];

  @ViewChild('widgetsContent', { read: ElementRef, static: true }) public widgetsContent: ElementRef<any>;
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
  constructor() { }

  ngOnInit() {
  }

}
