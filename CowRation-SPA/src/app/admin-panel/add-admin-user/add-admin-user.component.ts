import { NgModule } from '@angular/core';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AdminRegister } from 'src/app/admin-panel/core/models/admin-registration';
import { Store } from '@ngrx/store';

@Component({
  selector: "app-add-admin-user",
  templateUrl: "./add-admin-user.component.html",
  styleUrls: ["./add-admin-user.component.css"]
})
export class AddAdminUserComponent implements OnInit {

  newAdmin: AdminRegister = new AdminRegister();

  @Input() firstblock = true;
  @Input() showBlock = false;
  @Input() notification = false;



  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addAdmin() {
    this.newAdmin.login = '';
    this.newAdmin.firstName = '';
    this.newAdmin.lastName = '';
    this.newAdmin.email = '';
    this.newAdmin.password = '';
    this.newAdmin.repeatPassword = '';
    this.notification = true;
  }


  constructor() { }

  ngOnInit() {
  }

}
