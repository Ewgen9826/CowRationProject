import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AlertifyService } from "../utils/alertify.service";
import { AuthService } from "../authentication/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error("Необходимо авторизоваться!");
    this.router.navigate(["/login"]);
    return false;
  }
}
