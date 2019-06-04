import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserToken } from 'src/app/account-login/state';
import { KormStorage } from '../models/korm-storage';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  baseUrl = environment.apiUrl + "/storage/";
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  get userId(): number {
    let id: number;
    this.store.pipe(select(getUserToken)).subscribe(
      data => id = data
    );
    return id;
  }

  getStorageKorms() {
    return this.httpClient.get(this.baseUrl + this.userId + "/korms/");
  }

  getHowManyDay(korms: KormStorage[]) {
    korms.forEach(korm => {
      korm.day = 1;
    });
    return of(korms);
  }
}
