import { Component, OnInit } from "@angular/core";
import { Observable, from } from "rxjs";
import { AlertifyService } from "../../../core/utils/alertify.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Login } from "../../state/authentication.actions";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  username: string;
  password: string;
  getState: Observable<any>;
  token: Observable<any>;
  errorMessage: string = null;

  constructor(private store: Store<AppState>
  ) {

  }

  ngOnInit() {

  }

  login() {
    const payload = {
      username: this.username,
      password: this.password
    };

    this.store.dispatch(new Login(payload));
  }
}
