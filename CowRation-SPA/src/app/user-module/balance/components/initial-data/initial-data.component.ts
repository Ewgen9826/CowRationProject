import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadStorageKorms } from '../../state/balance.actions';
import { getStorageKorms } from '../../state';

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.css']
})
export class InitialDataComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  storageKorms$;
  ngOnInit() {
    this.storageKorms$ = this.store.pipe(select(getStorageKorms));
  }

}
