import { Component, OnInit } from "@angular/core";
import { AppState } from 'src/app/state/app.state';
import { Store, select } from '@ngrx/store';
import { getLoadingState } from './state';
import { Observable } from 'rxjs';

@Component({
  selector: "app-ration",
  templateUrl: "./ration.component.html",
  styleUrls: ["./ration.component.css"]
})
export class RationComponent implements OnInit {
  loading$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getLoadingState));

  }
}
