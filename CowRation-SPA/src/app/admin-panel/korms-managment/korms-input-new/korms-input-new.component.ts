import { Component, OnInit } from '@angular/core';
import { NewKorm } from 'src/app/core/models/new-korm';

@Component({
  selector: 'app-korms-input-new',
  templateUrl: './korms-input-new.component.html',
  styleUrls: ['./korms-input-new.component.css']
})
export class KormsInputNewComponent implements OnInit {

  newKorm: NewKorm = new NewKorm();

  addKorm(){
    console.log(this.newKorm);
 }

  constructor() { }

  ngOnInit() {
  }

}
