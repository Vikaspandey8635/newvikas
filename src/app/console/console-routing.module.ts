import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonnComponent } from '../buttonn/buttonn.component';
import { PropertyComponent } from '../property/property.component';

import { ConsoleComponent } from './console.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'property', component: PropertyComponent},
      { path: 'answer', component: ButtonnComponent},




    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleRoutingModule {}
