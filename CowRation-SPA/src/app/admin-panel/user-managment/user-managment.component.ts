import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
=======
  users: User[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      data => this.users = data["users"]
    );
  }
 
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

}
