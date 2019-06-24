import { Component, OnInit, Input } from '@angular/core';
import { NewKorm } from 'src/app/admin-panel/core/models/new-korm';
import { Store } from '@ngrx/store';
import * as KormsActions from '../../core/actions/new-korm.actions';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-korms-input-new',
  templateUrl: './korms-input-new.component.html',
  styleUrls: ['./korms-input-new.component.css']
})
export class KormsInputNewComponent implements OnInit {

  @Input() notification: boolean = false;

  newKorm: NewKorm = new NewKorm();
 

  addKorm(name, category, price, property1, property2, property3, property4, property5, property6, property7, property8, property9, property10, property11, property12, property13, property14, property15, property16, property17, property18, property19, property20, property21, property22) {

  this.store.dispatch(new KormsActions.AddKorm({
    name: name,
    category: category,
    price: price,
    property1: property1,
    property2: property2,
    property3: property3,
    property4: property4,
    property5: property5,
    property6: property6,
    property7: property7,
    property8: property8,
    property9: property9,
    property10: property10,
    property11: property11,
    property12: property12,
    property13: property13,
    property14: property14,
    property15: property15,
    property16: property16,
    property17: property17,
    property18: property18,
    property19: property19,
    property20: property20,
    property21: property21,
    property22: property22
  
  }));
  this.notification = true;

    
 }
 

 constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
