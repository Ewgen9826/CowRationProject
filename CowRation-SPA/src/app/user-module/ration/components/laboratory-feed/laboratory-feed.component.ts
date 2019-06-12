import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadLaboratory } from '../../state/ration.actions';
import { getLaboratoryIndicators } from '../../state';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: "app-laboratory-feed",
  templateUrl: "./laboratory-feed.component.html",
  styleUrls: ["./laboratory-feed.component.css"]
})
export class LaboratoryFeedComponent implements OnInit {
<<<<<<< HEAD
  laboratoryIndicators$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaboratory());
    this.laboratoryIndicators$=this.store.pipe(select(getLaboratoryIndicators));
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  }

}
