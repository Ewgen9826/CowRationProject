import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserToken } from 'src/app/account-login/state';
import { Ration } from '../state/ration.model';

@Injectable({
    providedIn: "root"
})

export class RationsService {
    baseUrl = environment.apiUrl + "/ration/" + this.userId;
    constructor(private httpClient: HttpClient, private store: Store<AppState>) { }
    get userId(): number {
        let id: number;
        this.store.pipe(select(getUserToken)).subscribe(
            data => id = data
        );
        return id;
    }

    getRations() {
        return this.httpClient.get<Ration[]>(this.baseUrl);
    }

    calculateRations() {
        return this.httpClient.get<Ration[]>(this.baseUrl);
    }
}
