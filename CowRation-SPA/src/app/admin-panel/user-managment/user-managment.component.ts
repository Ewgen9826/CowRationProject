import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserRegister } from 'src/app/admin-panel/core/models/user-register';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../core/actions/user-register.actions';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

  newUser: UserRegister = new UserRegister();
  
  @Input() firstblock = true;
  @Input() showBlock = false;
  @Input() notification = false;
 

 
  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addUser(login, firstName, lastName, email, password, repeatPassword) {
    this.store.dispatch(new UserActions.AddUser({
      login: login,
      firstName: firstName,
      lastName:lastName,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    }))
    this.newUser.login = '[placeholder]';
    this.newUser.firstName = '';
    this.newUser.lastName = '';
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.repeatPassword = '';

    this.notification = true;
    
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   
  }

}
