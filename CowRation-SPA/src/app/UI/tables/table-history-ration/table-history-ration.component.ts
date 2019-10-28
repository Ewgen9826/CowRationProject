import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KormsHistory } from 'src/app/admin-panel/core/models/korms-table-history';

@Component({
  selector: 'app-table-history-ration',
  templateUrl: './table-history-ration.component.html',
  styleUrls: ['./table-history-ration.component.css']
})
export class TableHistoryRationComponent implements OnInit {

  intervalBotton;
  intervalTop;

  @Input() headerOneKorms: string;
  @Input() headerTwoKorms: string;
  @Input() headerTreeKorms: string;

  kormsHistory: Observable<KormsHistory[]>;



  @ViewChild('widgetsContent', { read: ElementRef, static: true }) public widgetsContent: ElementRef<any>;
  public scrollTop(): void {
    this.intervalTop = 200;
    // tslint:disable-next-line:max-line-length
    this.widgetsContent.nativeElement.scrollTo({ top: (this.widgetsContent.nativeElement.scrollTop - this.intervalTop), behavior: 'smooth' });
    this.intervalBotton = 0;
  }
  public scrollBotton(): void {
    this.intervalBotton = 200;
    // tslint:disable-next-line:max-line-length
    this.widgetsContent.nativeElement.scrollTo({ top: (this.widgetsContent.nativeElement.scrollTop + this.intervalBotton), behavior: 'smooth' });
    this.intervalTop = 0;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
