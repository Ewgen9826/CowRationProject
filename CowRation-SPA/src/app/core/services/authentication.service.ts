import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRegister } from "../../admin-panel/core/models/user-register";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  baseUrl = environment.apiUrl + "/auth";
  jwtHelper = new JwtHelperService();
  constructor(private httpClient: HttpClient) { }

  register(userRegister: UserRegister) {
    return this.httpClient.post(this.baseUrl + "/register", userRegister);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string) {
    return this.httpClient.post(this.baseUrl + "/login", { username: username, password: password });
  }
}
