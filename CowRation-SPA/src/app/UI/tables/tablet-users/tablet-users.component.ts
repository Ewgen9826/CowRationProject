import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/admin-panel/core/models/user';

@Component({
  selector: 'app-tablet-users',
  templateUrl: './tablet-users.component.html',
  styleUrls: ['./tablet-users.component.css']
})
export class TabletUsersComponent implements OnInit {

  @Input() users: User[];
  @Output() removeUser = new EventEmitter<number>();
  intervalBotton;
  intervalTop;

  @Input() headerFirstUser: string;
  @Input() headerSecondAction: string;

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
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

  ngOnInit() {
  }

  remove(userId: number) {
    this.removeUser.emit(userId);
  }
}
