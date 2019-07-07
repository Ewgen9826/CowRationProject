import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AllKormsState } from '../core/store';
import { LoadingKorms } from '../core/store/korms/korms.actions';

@Component({
  selector: 'app-korms-managment',
  templateUrl: './korms-managment.component.html',
  styleUrls: ['./korms-managment.component.css']
})
export class KormsManagmentComponent implements OnInit {
  korms$;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadingKorms());
    this.korms$ = this.store.pipe(select(AllKormsState));
  }


}
