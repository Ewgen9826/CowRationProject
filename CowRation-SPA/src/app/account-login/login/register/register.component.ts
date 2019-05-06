import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/authentication/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register( this.model ).subscribe(
      () => console.log( "Success!" ),
      ( error ) => console.log( error )
    );
  }
  cancel() {
    console.log("Cancelled");
  }
}
