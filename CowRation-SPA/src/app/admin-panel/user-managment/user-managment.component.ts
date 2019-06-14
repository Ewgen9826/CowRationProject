import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserRegister } from 'src/app/core/models/user-register';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

  newUser: UserRegister = new UserRegister();
  
  @Input() firstblock = true;
  @Input() showBlock = false;
  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addUser(){
    console.log(this.newUser);
}

  constructor() { }

  ngOnInit() {
   
  }

}
