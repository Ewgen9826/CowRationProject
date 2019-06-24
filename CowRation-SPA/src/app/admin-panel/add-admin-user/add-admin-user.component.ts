import { NgModule } from '@angular/core';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AdminRegister } from 'src/app/admin-panel/core/models/admin-registration';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as AdminusersActions from '../core/actions/admin-register.actions';

@Component({
  selector: "app-add-admin-user",
  templateUrl: "./add-admin-user.component.html",
  styleUrls: ["./add-admin-user.component.css"]
})
export class AddAdminUserComponent implements OnInit {

  newAdmin: AdminRegister = new AdminRegister();
  
  @Input() firstblock = true;
  @Input() showBlock = false;
  @Input() notification = false;

  

  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addAdmin(login, firstName, lastName, email, password, repeatPassword){
    this.store.dispatch(new AdminusersActions.AddAdminUser({
      login: login,
      firstName: firstName,
      lastName:lastName,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    }))
    this.notification = true;
}


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
