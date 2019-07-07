import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Korm } from 'src/app/admin-panel/core/models/korm';
@Component({
  selector: 'app-table-korms',
  templateUrl: './table-korms.component.html',
  styleUrls: ['./table-korms.component.css']
})
export class TableKormsComponent implements OnInit {

  intervalBotton;
  intervalTop;

  @Input() korms: Observable<Korm[]>;

  @Input() headerFirstUser: string;
  @Input() headerSecondAction: string;
  @Input() headerthirdAction: string;

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
  constructor() {
  }

  ngOnInit() {
  }
}
