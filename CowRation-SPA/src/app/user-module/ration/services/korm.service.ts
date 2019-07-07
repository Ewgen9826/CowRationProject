import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Korm } from "../models/korm";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { getUserId } from "src/app/account-login/state";

@Injectable({
  providedIn: "root"
})
export class KormService {
  baseUrl = environment.apiUrl + "/korms";
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }


  get userId(): number {
    let id: number;
    this.store.pipe(select(getUserId)).subscribe(
      data => id = data
    );
    return id;
  }

  getKorms(): Observable<Korm[]> {
    return this.httpClient.get(this.baseUrl).pipe(
      map((data: any[]) => {
        const korms = data;
        return korms.map((korm: Korm) => {
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

  getUserKorms(): Observable<Korm[]> {
    return this.httpClient
      .get(this.baseUrl + "/user/" + this.userId)
      .pipe(
        map((data: any[]) => {
          const korms = data;
          return korms.map((korm: Korm) => {
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

  changeUserKorms(korms: Korm[]): Observable<Korm[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json"
      })
    };
    return this.httpClient
      .post(this.baseUrl + "/user/" + this.userId + "/change", korms, httpOptions)
      .pipe(
        map((data: any[]) => {
          const korms = data;
          return korms.map((korm: Korm) => {
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
}
