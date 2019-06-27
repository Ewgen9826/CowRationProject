import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls:
    [
      "./dashboard-card.component.css"
    ]
})
export class DashboardCardComponent implements OnInit {
  @Input() cardIcon: string;
  @Input() headerText: string;
  @Input() btnText: string;
  @Input() btnColor: string;
  @Input() disable: boolean;
  @Input() link: string;
  public mouseWarrning = false;
  constructor() {}

  ngOnInit() {}
}
