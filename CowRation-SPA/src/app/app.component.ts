import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { filter, map, mergeMap } from "rxjs/operators";
import { Store, select } from '@ngrx/store';
import { AppState } from './state/app.state';
import { getLoadingState } from './account-login/state';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls:
    [
      "./app.component.css"
    ]
})
export class AppComponent implements OnInit {
  loading$;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => this.titleService.setTitle(event["title"]));
    this.loading$ = this.store.pipe(select(getLoadingState));
  }
}
