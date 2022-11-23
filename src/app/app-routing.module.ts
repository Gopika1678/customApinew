import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountfruitsComponent } from './countfruits/countfruits.component';
import { FruitsfavComponent } from './fruitsfav/fruitsfav.component';


const routes: Routes = [{path:'fruitsfav',component:FruitsfavComponent},{path:'countfruits',component:CountfruitsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
