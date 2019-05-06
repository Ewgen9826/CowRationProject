import { Component, OnInit } from "@angular/core";
//import { AuthService } from "src/app/core/authentication/auth.service";
//import { AlertifyService } from "src/app/core/utils/alertify.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  model: any = {};

  constructor(
    //private authService: AuthService,
    //private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  /*login() {
    this.authService
      .login(this.model)
      .subscribe(
        next => this.alertify.success("Logged in successfully"),
        error => this.alertify.error(error)
      );
  }*/
}
