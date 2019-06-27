import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewKorm } from 'src/app/admin-panel/core/models/new-korm';
import * as KormActions from 'src/app/admin-panel/core/actions/new-korm.actions';
@Component({
  selector: 'app-table-korms',
  templateUrl: './table-korms.component.html',
  styleUrls: ['./table-korms.component.css']
})
export class TableKormsComponent implements OnInit {

  intervalBotton;
  intervalTop;

  korms: Observable<NewKorm[]>;

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
  constructor(private store: Store<AppState>) {
    this.korms = store.select('korms')
   }
   delKorm(index){
     this.store.dispatch(new KormActions.RemoveKorm(index))
   }

  ngOnInit() {
  }
}
