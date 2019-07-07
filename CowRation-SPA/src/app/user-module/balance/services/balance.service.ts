import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserId } from 'src/app/account-login/state';
import { KormStorage } from '../models/korm-storage';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ration } from '../../ration/models/ration';
import { getStorageKorms } from '../state';
import { getRationsState } from '../../state';

@Injectable({
  providedIn: "root"
})
export class BalanceService {
  baseUrl = environment.apiUrl + "/storage/" + this.userId;
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  get userId(): number {
    let id: number;
    this.store.pipe(select(getUserId)).subscribe(
      data => id = data
    );
    return id;
  }

  get rations(): Ration[] {
    let rationsData: Ration[];
    this.store.pipe(select(getRationsState)).subscribe(
      data => rationsData = data
    );
    return rationsData;
  }

  get kormsStorage(): KormStorage[] {
    let kormsStorage: KormStorage[];
    this.store.pipe(select(getStorageKorms)).subscribe(
      data => kormsStorage = data
    );
    return kormsStorage;
  }

  getStorageKorms(): Observable<KormStorage[]> {
    return this.httpClient.get<KormStorage[]>(this.baseUrl).pipe(
      map(data => {
        let korms = data;
        return korms.map(korm => {
          return {
            name: korm.name,
            foodValue: korm.foodValue,
            day: 0
          };
        })
      })
    );
  }

  changeKormsStorage(korms: KormStorage[]): Observable<KormStorage[]> {
    return this.httpClient.post<KormStorage[]>(this.baseUrl, korms).pipe(
      map(data => {
        let korms = data;
        return korms.map(korm => {
          return {
            name: korm.name,
            foodValue: korm.foodValue,
            day: 0
          };
        })
      })
    );
  }

  getHowManyDay(day: number) {
    console.log(this.rations);
    for (let i = 0; i < this.kormsStorage.length; i++) {
      const ration = this.rations.find(r => r.kormName === this.kormsStorage[i].name);
      if (!ration) break;
      this.kormsStorage[i].day = Math.round((this.kormsStorage[i].foodValue - (ration.value * day)) / ration.value);
    }
    console.log(this.kormsStorage);
    return of(this.kormsStorage);
  }
}
