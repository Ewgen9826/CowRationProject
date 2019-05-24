import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { KormStorage } from "src/app/core/models/korm-storage";

@Component({
  selector: 'app-dietary-indicators',
  templateUrl: './dietary-indicators.component.html',
  styleUrls: ['./dietary-indicators.component.css']
})
export class DietaryIndicatorsComponent implements OnInit {
  storageKorms: KormStorage[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      data => this.storageKorms = data["storageKorms"]
    );
  }

}
