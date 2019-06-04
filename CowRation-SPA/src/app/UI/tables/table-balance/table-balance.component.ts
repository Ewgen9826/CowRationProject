import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-balance',
  templateUrl: './table-balance.component.html',
  styleUrls: ['./table-balance.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TableBalanceComponent implements OnInit {
  intervalBotton;
  intervalTop;

  @Input() headerFirstBalance: string;
  @Input() headerSecondBalance: string;

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

  constructor() { }

  ngOnInit() {
  }

}
