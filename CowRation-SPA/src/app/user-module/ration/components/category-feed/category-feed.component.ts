import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { FeedingCategory } from '../../models/feeding-category';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getFeedingCategory } from '../../state';
import { LoadFeedingCategory, ChangeFeedingCategory } from '../../state/ration.actions';
import { Router } from '@angular/router';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: "app-category-feed",
  templateUrl: "./category-feed.component.html",
  styleUrls: ["./category-feed.component.css"]
})
export class CategoryFeedComponent implements OnInit {
<<<<<<< HEAD
  feedingCategory: FeedingCategory = {
    udoy: 0,
    fat: 0,
    protein: 0,
    weight: 0
  };
  stateFeedingCategory: FeedingCategory;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new LoadFeedingCategory());

    this.store.pipe(select(getFeedingCategory)).subscribe(data => {
      if (data) {
        this.feedingCategory = data;
      }
    });
  }

  changeFeedingCategory() {
      this.store.dispatch(new ChangeFeedingCategory(this.feedingCategory));
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  }

}
