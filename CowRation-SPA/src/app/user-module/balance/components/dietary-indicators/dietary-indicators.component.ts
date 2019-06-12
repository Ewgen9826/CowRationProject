import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
<<<<<<< HEAD
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getStorageKorms } from '../../state';
import { LoadStorageKorms } from '../../state/balance.actions';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: 'app-dietary-indicators',
  templateUrl: './dietary-indicators.component.html',
  styleUrls: ['./dietary-indicators.component.css']
})
export class DietaryIndicatorsComponent implements OnInit {
<<<<<<< HEAD
  storageKorms$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadStorageKorms());
    this.storageKorms$=this.store.pipe(select(getStorageKorms));
=======
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
  }

}
