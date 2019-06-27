import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadLaboratory, ChangeLaboratory, CalculateRations } from '../../state/ration.actions';
import { getLaboratoryIndicators } from '../../state';
import { Observable } from 'rxjs';

@Component({
  selector: "app-laboratory-feed",
  templateUrl: "./laboratory-feed.component.html",
  styleUrls: ["./laboratory-feed.component.css"]
})
export class LaboratoryFeedComponent implements OnInit {
  laboratoryIndicators$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaboratory());
    this.laboratoryIndicators$ = this.store.pipe(select(getLaboratoryIndicators));
  }

  change() {
    let changeLaboratory;
    const subscribe = this.laboratoryIndicators$.subscribe(data => {
      changeLaboratory = data;
    })
    this.store.dispatch(new ChangeLaboratory(changeLaboratory));
    this.store.dispatch(new CalculateRations());
    subscribe.unsubscribe();
  }
}
