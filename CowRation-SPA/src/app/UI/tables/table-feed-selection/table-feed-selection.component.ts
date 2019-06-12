import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Korm } from "src/app/user-module/ration/models/korm";

@Component({
  selector: "app-table-feed-selection",
  templateUrl: "./table-feed-selection.component.html",
  styleUrls: ["./table-feed-selection.component.css"]
})
export class TableFeedSelectionComponent implements OnInit {
  @Input() korms: Korm[];
  headElements = ["Название корма", "Цена (руб/кг)", "Сортировать", "Выбор"];
  constructor() { }
  ngOnInit() { }
}
