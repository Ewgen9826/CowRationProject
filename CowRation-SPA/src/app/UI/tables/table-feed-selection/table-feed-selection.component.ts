import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { KormSelect } from "src/app/core/models/korm-select";

@Component({
  selector: "app-table-feed-selection",
  templateUrl: "./table-feed-selection.component.html",
  styleUrls: ["./table-feed-selection.component.css"]
})
export class TableFeedSelectionComponent implements OnInit {
  @Input() korms: KormSelect[];

  headElements = ["Название корма", "Цена (руб/кг)", "Сортировать", "Выбор"];
  constructor() {}
  ngOnInit() { }
  choice( korm: KormSelect ) {
    this.korms.find( k => k == korm ).select = !this.korms.find( k => k == korm ).select;
  }
}
