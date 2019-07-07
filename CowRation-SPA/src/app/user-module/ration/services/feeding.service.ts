import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getUserId } from 'src/app/account-login/state';
import { FeedingCategory } from '../models/feeding-category';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class FeedingService {
    baseUrl = environment.apiUrl + "/feedingcategory/";
    constructor(private httpClient: HttpClient, private store: Store<AppState>) { }
    get userId(): number {
        let id: number;
        this.store.pipe(select(getUserId)).subscribe(
            data => id = data
        );
        console.log(id);
        return id;
    }

    getFeedingCategory(): Observable<FeedingCategory> {
        return this.httpClient.get<FeedingCategory>(this.baseUrl + this.userId);
    }

    setFeedingCategory(feedingCategory: FeedingCategory) {
        return this.httpClient.post(this.baseUrl + this.userId, feedingCategory);
    }
}

