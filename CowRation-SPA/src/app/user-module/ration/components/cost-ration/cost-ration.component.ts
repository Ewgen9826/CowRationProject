import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store, select } from '@ngrx/store';
import { getRationState } from '../../state';
import { CalculateRations } from '../../state/ration.actions';

@Component({
  selector: 'app-cost-ration',
  templateUrl: './cost-ration.component.html',
  styleUrls: ['./cost-ration.component.css']
})
export class CostRationComponent implements OnInit {
  rations;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(getRationState)).subscribe(data => {
      this.rations = data;
      console.log(data);
    });
  }

}
