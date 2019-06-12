import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { getKorms, getUserKorms } from "../../state";
import { LoadKorms, LoadUserKorms, ChangeUserKorms } from "../../state/ration.actions";
import { Korm } from "../../models/korm";
import { Router } from "@angular/router";
@Component({
  selector: "app-selection-feed",
  templateUrl: "./selection-feed.component.html",
  styleUrls: ["./selection-feed.component.css"]
})
export class SelectionFeedComponent implements OnInit {

  korms: Korm[];
  userKorms: Korm[];
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new LoadKorms());
    this.store.dispatch(new LoadUserKorms());

    this.store.pipe(select(getKorms)).subscribe(data => {
      this.korms = data;
    });

    this.store.pipe(select(getUserKorms)).subscribe(data => {
      this.userKorms = data;
      this.korms.forEach(korm => {
        const k = this.userKorms.some(el => el.id === korm.id);
        if (k) {
          korm.select = true;
        }
      });
    });

  }

  changeKormsForUser() {
    const list = this.korms.filter(k => k.select);
    const changeKorms = [
      ...list.filter(k => !this.userKorms.find(el => el.id === k.id)),
      ...this.userKorms.filter(k => !list.find(el => el.id === k.id))
    ];
    if (changeKorms.length > 0) {
      this.store.dispatch(new ChangeUserKorms(list));
    }
    this.router.navigateByUrl("company/ration/category-feel");
  }
}

