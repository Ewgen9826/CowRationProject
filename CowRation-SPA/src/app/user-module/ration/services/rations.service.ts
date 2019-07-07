import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserId } from 'src/app/account-login/state';
import { Ration } from '../models/ration';

@Injectable({
    providedIn: "root"
})
export class RationsService {
    baseUrl = environment.apiUrl + "/ration/" + this.userId;
    constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

    get userId(): number {
        let id: number;
        this.store.pipe(select(getUserId)).subscribe(
            data => id = data
        );
        return id;
    }
    calculateRations() {
        console.log(this.baseUrl+"/calculate");
        return this.httpClient.get<Ration[]>(this.baseUrl+"/calculate");
    }
}