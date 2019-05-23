import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { KormService } from "src/app/core/services/korm.service";
import { KormSelect } from "src/app/core/models/korm-select";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { Observable, combineLatest  } from "rxjs";

@Component({
  selector: "app-selection-feed",
  templateUrl: "./selection-feed.component.html",
  styleUrls: ["./selection-feed.component.css"]
})
export class SelectionFeedComponent implements OnInit {
  korms: KormSelect[];
  userkorms: KormSelect[];
  constructor( private activeRouter: ActivatedRoute,
    private kormService: KormService,
    private alertify:AlertifyService,
    private router:Router ) { }

  ngOnInit() {
    this.activeRouter.data.subscribe( data => {
      this.korms = data["korms"];
      this.userkorms = data["userkorms"];
    } );
    this.userkorms.forEach( ( userkorm: KormSelect ) => {
      this.korms.find( k => k.id == userkorm.id ).select = true;
    } );
    console.log( this.userkorms );
  }

  changeKormsForUser() {
    let selectKorms = this.korms.filter( k => k.select == true );
    let addKorms = selectKorms.filter( x => !this.userkorms.find(k=>k.id==x.id) );
    let removeKorms = this.userkorms.filter( x => !selectKorms.find( k => k.id == x.id ) );

    combineLatest(
      this.kormService.addKormsForUser( addKorms ),
      this.kormService.removeKormsForUser( removeKorms )
    ).subscribe(
      data => this.alertify.success( "Список кормов изменен" ),
      err => this.alertify.error( "Что-то пошло не так" )
    )
    }
  }

