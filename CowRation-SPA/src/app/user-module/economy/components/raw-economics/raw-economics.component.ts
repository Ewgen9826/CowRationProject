import { Component, OnInit } from '@angular/core';
import { PreviousYearData } from '../../models/PreviousYearData';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getPreviousYearDataState } from '../../state';
import { PreviousYearDataSet } from '../../state/economy.actions';

@Component({
  selector: 'app-raw-economics',
  templateUrl: './raw-economics.component.html',
  styleUrls: ['./raw-economics.component.css']
})
export class RawEconomicsComponent implements OnInit {
  previousYearData: PreviousYearData;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(getPreviousYearDataState)).subscribe(data => {
      this.previousYearData = data;
    });
  }

  setPreviousYearData() {
    this.store.dispatch(new PreviousYearDataSet(this.previousYearData));
  }

}
