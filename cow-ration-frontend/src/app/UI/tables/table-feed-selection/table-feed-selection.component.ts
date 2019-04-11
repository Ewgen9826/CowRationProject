import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-feed-selection',
  templateUrl: './table-feed-selection.component.html',
  styleUrls: ['./table-feed-selection.component.css']
})
export class TableFeedSelectionComponent implements OnInit {
  elements: any = [
    {feedName: 'Солома ячменная', price: '0.06'},
    {feedName: 'Сенаж злаковый', price: '0.06' },
    {feedName: 'Силож кукурузный', price: '0.06' },
    {feedName: 'Патока кормовая', price: '0.06' }
    
  ];
  headElements = ['Название корма', 'Цена (руб/кг)', 'Сортировать', 'Выбор', 'Действие'];
  constructor() { }

  ngOnInit() {
  }

}
