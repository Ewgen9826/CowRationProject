import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DietaryIndicatorsComponent } from './pages/dietary-indicators/dietary-indicators.component';
import { InitialDataComponent } from './pages/initial-data/initial-data.component';
import { KormsStorageResolver } from "src/app/core/resolvers/korms-storage-resolver";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dietary-indicators",
    pathMatch: "full"
  },
  {
    path: "dietary-indicators",
    component: DietaryIndicatorsComponent,
    data: { title: "Исходные данные" },
    resolve: {storageKorms: KormsStorageResolver}
  },
  {
    path: "initial-data",
    component: InitialDataComponent,
    data: { title: "Показатели рациона" }
  },
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
export class BalanceRoutingModule { }
