import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { AppState } from 'src/app/state/app.state';
import { Store, select } from '@ngrx/store';
import { getLoadingState } from './state';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: "app-ration",
  templateUrl: "./ration.component.html",
  styleUrls: ["./ration.component.css"]
})
export class RationComponent implements OnInit {
<<<<<<< HEAD
  loading$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getLoadingState));
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  }

}
