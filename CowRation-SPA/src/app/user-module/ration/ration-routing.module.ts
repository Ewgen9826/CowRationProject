import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SelectionFeedComponent } from "./pages/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./pages/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./pages/laboratory-feed/laboratory-feed.component";
import { CountCowComponent } from "./pages/count-cow/count-cow.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "count-cow",
    pathMatch: "full"
  },
  {
    path: "selection-feel",
    component: SelectionFeedComponent,
    data: { title: "Выбор кормов" }
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
    data: {title: "Количество голов"}
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class RationRoutingModule {}
