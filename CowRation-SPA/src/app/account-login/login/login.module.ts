import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { StoreModule } from "@ngrx/store";
import { reducer } from "../state/authentication.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthenticationEffect } from "../state/authentication.effects";

@NgModule({
  declarations: [SignInComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature("authentication", reducer),
    EffectsModule.forFeature([AuthenticationEffect]),
  ],
  exports: [SignInComponent],
  providers: [AuthenticationService]
})
export class LoginModule { }
