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

<<<<<<< HEAD
  baseUrl = environment.apiUrl + "/storage/"+this.userId;
=======
  baseUrl = environment.apiUrl + "/storage/";
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  get userId(): number {
    let id: number;
    this.store.pipe(select(getUserToken)).subscribe(
      data => id = data
    );
    return id;
  }

  getStorageKorms() {
<<<<<<< HEAD
    return this.httpClient.get<KormStorage[]>(this.baseUrl);
=======
    return this.httpClient.get(this.baseUrl + this.userId + "/korms/");
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  }

  getHowManyDay(korms: KormStorage[]) {
    korms.forEach(korm => {
      korm.day = 1;
    });
    return of(korms);
  }
}
