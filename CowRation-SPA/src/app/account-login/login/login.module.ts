import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "src/app/core/authentication/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [SignInComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [SignInComponent],
  providers: [AuthService]
})
export class LoginModule {}
