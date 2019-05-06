import { Component, OnInit } from '@angular/core';
import { LoadingService } from "../services/loading.service";
@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css']
})
export class SpinnerPageComponent implements OnInit {
  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
  }

}
