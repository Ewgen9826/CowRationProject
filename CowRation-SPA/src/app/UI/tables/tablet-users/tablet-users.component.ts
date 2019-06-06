import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-tablet-users',
  templateUrl: './tablet-users.component.html',
  styleUrls: ['./tablet-users.component.css']
})
export class TabletUsersComponent implements OnInit {

  intervalBotton;
  intervalTop;

  @Input() headerFirstUser: string;
  @Input() headerSecondAction: string;
  @Input() users: User[];
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
