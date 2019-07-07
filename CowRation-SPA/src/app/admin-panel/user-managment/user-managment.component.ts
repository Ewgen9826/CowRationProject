import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { User } from '../core/models/user';
import { LoadingUsers, AddUser, RemoveUser } from '../core/store/user/user.actions';
import { AllUserState } from '../core/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

  newUser: User = new User();

  @Input() firstblock = true;
  @Input() showBlock = false;
  @Input() notification = false;

  users$;

  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addUser() {
    this.store.dispatch(new AddUser(this.newUser));
    this.newUser.login = '';
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.companyName = '';
    this.notification = true;
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadingUsers());
    this.users$ = this.store.pipe(select(AllUserState));
  }

  remove(userId: number) {
    this.store.dispatch(new RemoveUser(userId));
  }

}
