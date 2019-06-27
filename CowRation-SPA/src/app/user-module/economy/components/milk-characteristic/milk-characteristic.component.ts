import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { CharacteristicsMilk } from '../../models/CharacteristicsMilk';
import { getCharacteristicsMilkState } from '../../state';

@Component({
  selector: 'app-milk-characteristic',
  templateUrl: './milk-characteristic.component.html',
  styleUrls: ['./milk-characteristic.component.css']
})
export class MilkCharacteristicComponent implements OnInit {
  characteristicsMilk: CharacteristicsMilk;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(getCharacteristicsMilkState)).subscribe(data => {
      this.characteristicsMilk = data;
    });
  }

}
