import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SelectionFeedComponent } from "./pages/selection-feed/selection-feed.component";
import { CategoryFeedComponent } from "./pages/category-feed/category-feed.component";
import { LaboratoryFeedComponent } from "./pages/laboratory-feed/laboratory-feed.component";

const routes: Routes = [
  {
    path: "selection-feel",
    component: SelectionFeedComponent
  },
  {
    path: "category-feel",
    component: CategoryFeedComponent
  },
  {
    path: "laboratory-fell",
    component: LaboratoryFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RationRoutingModule { }
