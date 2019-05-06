import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../services/loading.service";
@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls:
    [
      "./loading.component.css"
    ]
})
export class LoadingComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}

  public progress:number;
  ngOnInit() {
    this.progress = 65;
  }
}
