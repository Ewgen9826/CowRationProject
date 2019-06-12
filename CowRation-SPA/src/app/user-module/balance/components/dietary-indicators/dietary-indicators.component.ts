import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getStorageKorms } from '../../state';
import { LoadStorageKorms } from '../../state/balance.actions';

@Component({
  selector: 'app-dietary-indicators',
  templateUrl: './dietary-indicators.component.html',
  styleUrls: ['./dietary-indicators.component.css']
})
export class DietaryIndicatorsComponent implements OnInit {
  storageKorms$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadStorageKorms());
    this.storageKorms$=this.store.pipe(select(getStorageKorms));
  }

}
