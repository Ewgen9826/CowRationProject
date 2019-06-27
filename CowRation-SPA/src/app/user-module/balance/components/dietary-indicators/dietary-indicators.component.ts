import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getStorageKorms } from '../../state';
import { LoadStorageKorms, ChangeValue, CalcDay } from '../../state/balance.actions';

@Component({
  selector: 'app-dietary-indicators',
  templateUrl: './dietary-indicators.component.html',
  styleUrls: ['./dietary-indicators.component.css']
})
export class DietaryIndicatorsComponent implements OnInit {
  storageKorms;
  day: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadStorageKorms());
    this.store.pipe(select(getStorageKorms)).subscribe(data => {
      this.storageKorms = data;
    });
  }

  change() {
    this.store.dispatch(new ChangeValue(this.storageKorms));
    setTimeout(() => {
      this.store.dispatch(new CalcDay(this.day));
    }, 500);
  }
}
