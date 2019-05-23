import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/authentication/auth.service";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService
      .login(this.model)
      .subscribe(
        next => {
          this.alertify.success( "Вы успешно авторизовались!" );
          this.router.navigate( ['/company/home'] );
        },
        error => this.alertify.error(error)
      );
  }
}
