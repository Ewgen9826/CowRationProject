import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserToken } from 'src/app/account-login/state';
import { FeedingCategory } from '../models/feeding-category';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class FeedingService {
    baseUrl = environment.apiUrl + "/feedingcategory/" + this.userId;
    constructor(private httpClient: HttpClient, private store: Store<AppState>) { }
    get userId(): number {
        let id: number;
        this.store.pipe(select(getUserToken)).subscribe(
            data => id = data
        );
        return id;
    }

    getFeedingCategory(): Observable<FeedingCategory> {
        return this.httpClient.get<FeedingCategory>(this.baseUrl);
    }

    setFeedingCategory(feedingCategory: FeedingCategory) {
        return this.httpClient.post(this.baseUrl, feedingCategory);
    }
}

