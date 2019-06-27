import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Logout } from "../account-login/state/authentication.actions";
import { LoadRations } from './state/user.actions';

@Component({
  selector: "app-user-module",
  templateUrl: "./user-module.component.html",
  styleUrls: ["./user-module.component.css"]
})
export class UserModuleComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadRations());
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
