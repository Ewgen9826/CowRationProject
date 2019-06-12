import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RawEconomicsComponent } from "./components/raw-economics/raw-economics.component";
import { MilkCharacteristicComponent } from "./components/milk-characteristic/milk-characteristic.component";
import { ExpensesComponent } from "./components/expenses/expenses.component";
import { RationResultComponent } from "./components/ration-result/ration-result.component";
import { EconomyResultComponent } from "./components/economy-result/economy-result.component";

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
    path: "ration-result",
    component: RationResultComponent,
    data: { title: "Экономические результаты рациона" }
  },
  {
    path: "economy-result",
    component: EconomyResultComponent,
    data: { title: "Экономические показатели" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomyRoutingModule { }
