import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserToken } from 'src/app/account-login/state';
import { Laboratory } from '../models/laboratory';

@Injectable({
  providedIn: "root"
})
export class LaboratoryService {
  baseUrl = environment.apiUrl + "/laboratory/" + this.userId;
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  get userId(): number {
    let id: number;
    this.store.pipe(select(getUserToken)).subscribe(
      data => id = data
    );
    return id;
  }
  getLaboratoryIndicators() {
    return this.httpClient.get<Laboratory[]>(this.baseUrl);
  }

  setLaboratoryIndicators(laboratories: Laboratory[]) {
    return this.httpClient.post<Laboratory[]>(this.baseUrl, laboratories);
  }
}