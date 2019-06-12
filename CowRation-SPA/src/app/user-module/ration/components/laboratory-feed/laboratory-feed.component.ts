import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadLaboratory } from '../../state/ration.actions';
import { getLaboratoryIndicators } from '../../state';

@Component({
  selector: "app-laboratory-feed",
  templateUrl: "./laboratory-feed.component.html",
  styleUrls: ["./laboratory-feed.component.css"]
})
export class LaboratoryFeedComponent implements OnInit {
  laboratoryIndicators$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaboratory());
    this.laboratoryIndicators$=this.store.pipe(select(getLaboratoryIndicators));
  }

}
