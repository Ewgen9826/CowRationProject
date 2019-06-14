import { NgModule } from '@angular/core';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AdminRegister } from 'src/app/core/models/admin-registration';

@Component({
  selector: "app-add-admin-user",
  templateUrl: "./add-admin-user.component.html",
  styleUrls: ["./add-admin-user.component.css"]
})
export class AddAdminUserComponent implements OnInit {

  newAdmin: AdminRegister = new AdminRegister();
  
  @Input() firstblock = true;
  @Input() showBlock = false;

  

  showNewBlock() {
    this.firstblock = false;
    this.showBlock = true;
    return this.firstblock && this.showBlock;
  }

  addAdmin(){
    console.log(this.newAdmin);
}


  constructor() { }

  ngOnInit() {
  }

}
