import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { UserRegister } from "src/app/core/models/user-register";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model = new UserRegister();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() { }

  register() {
    this.authenticationService.register(this.model).subscribe(
      success => console.log(success),
      err => console.log(err)
    );
  }
}
