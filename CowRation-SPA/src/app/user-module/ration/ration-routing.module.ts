import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SelectionFeedComponent } from "./components/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./components/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./components/laboratory-feed/laboratory-feed.component";
import { CountCowComponent } from "./components/count-cow/count-cow.component";
import { CostRationComponent } from "./components/cost-ration/cost-ration.component";
import { RationResultComponent } from "./components/ration-result/ration-result.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "count-cow",
    pathMatch: "full"
  },
  {
    path: "selection-feel",
    component: SelectionFeedComponent,
    data: { title: "Выбор кормов" },
  },
  {
    path: "category-feel",
    component: CategoryFeedComponent,
    data: { title: "Категория кормления" }
  },
  {
    path: "laboratory-feel",
    component: LaboratoryFeedComponent,
    data: { title: "Результаты анализов" }
  },
  {
    path: "count-cow",
    component: CountCowComponent,
    data: { title: "Количество голов" }
  },
  {
    path: "cost-ration",
    component: CostRationComponent,
    data: { title: "Стоимость рациона" }
  },
  {
    path: "ration-result",
    component: RationResultComponent,
    data: { title: "Рацион" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RationRoutingModule {}
