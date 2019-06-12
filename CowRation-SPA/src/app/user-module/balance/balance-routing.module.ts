import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
<<<<<<< HEAD
import { DietaryIndicatorsComponent } from './components/dietary-indicators/dietary-indicators.component';
import { InitialDataComponent } from './components/initial-data/initial-data.component';
=======
import { DietaryIndicatorsComponent } from './pages/dietary-indicators/dietary-indicators.component';
import { InitialDataComponent } from './pages/initial-data/initial-data.component';
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

const routes: Routes = [
  {
    path: "",
    redirectTo: "dietary-indicators",
    pathMatch: "full"
  },
  {
    path: "dietary-indicators",
    component: DietaryIndicatorsComponent,
    data: { title: "Исходные данные" }
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
