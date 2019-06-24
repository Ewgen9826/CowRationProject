import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/admin-panel/core/models/user-register';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as UserActions from 'src/app/admin-panel/core/actions/user-register.actions';

@Component({
  selector: 'app-tablet-users',
  templateUrl: './tablet-users.component.html',
  styleUrls: ['./tablet-users.component.css']
})
export class TabletUsersComponent implements OnInit {

  users: Observable<UserRegister[]>;

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

  constructor(private store: Store<AppState>) { 
    this.users = store.select('users');
  }

  ngOnInit() {
  }

  delUser(index){
    this.store.dispatch(new UserActions.RemoveUser(index) )
  }
  
}
