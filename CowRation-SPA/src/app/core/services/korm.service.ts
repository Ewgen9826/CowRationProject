import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../authentication/auth.service";
import { Observable } from "rxjs";
import { KormSelect } from "../models/korm-select";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class KormService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getKorms(): Observable<KormSelect[]> {
    return this.http.get(this.baseUrl + "/korms").pipe(
      map((data: any[]) => {
        let korms = data;
        return korms.map((korm: KormSelect) => {
          const model = {
            id: korm.id,
            name: korm.name,
            price: korm.price,
            select: false
          };
          return model;
        });
      })
    );
  }
  getUserKorms(): Observable<KormSelect[]> {
    return this.http
      .get(this.baseUrl + "/korms/user/" + this.authService.decodedToken.nameid)
      .pipe(
        map((data: any[]) => {
          let korms = data;
          return korms.map((korm: KormSelect) => {
            const model = {
              id: korm.id,
              name: korm.name,
              price: korm.price,
              select: true
            };
            return model;
          });
        })
      );
  }

  addKormsForUser(korms: KormSelect[]) {
    if (korms.length < 0) {
      console.log(korms.length);
      return;
    }
    return this.http.post(
      this.baseUrl +
        "/korms/user/" +
        this.authService.decodedToken.nameid +
        "/add",
      korms
    );
  }
  removeKormsForUser(korms: KormSelect[]) {
    if (korms.length < 0) {
      console.log(korms.length);
      return;
    }
    return this.http.post(
      this.baseUrl +
        "/korms/user/" +
        this.authService.decodedToken.nameid +
        "/remove",
      korms
    );
  }
}
