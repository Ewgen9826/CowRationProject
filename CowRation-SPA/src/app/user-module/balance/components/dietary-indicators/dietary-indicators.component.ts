import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dietary-indicators',
  templateUrl: './dietary-indicators.component.html',
  styleUrls: ['./dietary-indicators.component.css']
})
export class DietaryIndicatorsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
