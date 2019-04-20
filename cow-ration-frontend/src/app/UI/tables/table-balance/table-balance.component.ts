import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-table-balance',
  templateUrl: './table-balance.component.html',
  styleUrls: ['./table-balance.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableBalanceComponent implements OnInit {

  @Input() headerFirstBalance: string;
  @Input() headerSecondBalance: string;
  
  
  elements: any = [
    {firstColumn: 'Солома ячменная', secondColumn: '85'},
    {firstColumn: 'Сенаж злаковый', secondColumn: '837' },
    {firstColumn: 'Силож кукурузный', secondColumn: '8874' },
    {firstColumn: 'Солома ячменная', secondColumn: '85'},
    {firstColumn: 'Сенаж злаковый', secondColumn: '837' },
    {firstColumn: 'Силож кукурузный', secondColumn: '8874' }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
