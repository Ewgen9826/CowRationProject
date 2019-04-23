import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RawEconomicsComponent } from './pages/raw-economics/raw-economics.component';
import { MilkCharacteristicComponent } from './pages/milk-characteristic/milk-characteristic.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PlannedIndicatorsComponent } from './pages/planned-indicators/planned-indicators.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "raw-economics",
    pathMatch: "full"
  },
  {
    path: "raw-economics",
    component: RawEconomicsComponent,
    data: { title: "Исходные данные" }
  },
  {
    path: "milk-characteristic",
    component: MilkCharacteristicComponent,
    data: { title: "Характеристика молока" }
  },
  {
    path: "expenses",
    component: ExpensesComponent,
    data: { title: "Затраты" }
  },
  {
    path: "planned-indicators",
    component: PlannedIndicatorsComponent,
    data: { title: "Планируемые показатели" }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomyRoutingModule { }
