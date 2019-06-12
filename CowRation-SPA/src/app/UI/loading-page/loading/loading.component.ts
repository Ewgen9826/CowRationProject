import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls:
    [
      "./loading.component.css"
    ]
})
export class LoadingComponent implements OnInit {
  @Input() isShow: boolean;
  constructor() { }

  public progress: number;
  ngOnInit() {
    this.progress = 65;
  }
}
