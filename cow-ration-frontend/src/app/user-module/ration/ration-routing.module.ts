import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SelectionFeedComponent } from "./pages/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./pages/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./pages/laboratory-feed/laboratory-feed.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "selection-feel",
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
    path: "laboratory-fell",
    component: LaboratoryFeedComponent,
    data: { title: "Данные лаборатории" }
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
