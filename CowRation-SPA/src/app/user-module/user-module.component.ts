import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Logout } from "../account-login/state/authentication.actions";

@Component({
  selector: "app-user-module",
  templateUrl: "./user-module.component.html",
  styleUrls: ["./user-module.component.css"]
})
export class UserModuleComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
