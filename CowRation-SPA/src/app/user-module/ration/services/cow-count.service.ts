import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserId } from 'src/app/account-login/state';
import { FeedingCategory } from '../models/feeding-category';

@Injectable({
    providedIn: "root"
})

export class CowCountService {
    baseUrl = environment.apiUrl + "/auth/cowcount/" + this.userId;
    constructor(private httpClient: HttpClient, private store: Store<AppState>) { }
    get userId(): number {
        let id: number;
        this.store.pipe(select(getUserId)).subscribe(
            data => id = data
        );
        return id;
    }

    getCowCount() {
        return this.httpClient.get<number>(this.baseUrl);
    }

    setCowCount(cowCount: number) {
        return this.httpClient.post<number>(this.baseUrl, {cowCount: cowCount});
    }
}

