import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadCowCount, ChangeCowCount } from '../../state/ration.actions';
import { getCowCountState } from '../../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count-cow',
  templateUrl: './count-cow.component.html',
  styleUrls: ['./count-cow.component.css']
})
export class CountCowComponent implements OnInit {
  changeCowCount: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCowCount());
    this.store.pipe(select(getCowCountState)).subscribe(data => {
      this.changeCowCount = data;
    });
  }

  change() {
    this.store.dispatch(new ChangeCowCount(this.changeCowCount));
  }

}
