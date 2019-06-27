import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getIsRationCalculate } from '../../state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRationCalculate$;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.isRationCalculate$ = this.store.pipe(select(getIsRationCalculate));
  }

}
