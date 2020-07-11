import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GariconsComponent } from './garicons.component';


const routes: Routes = [
  {
    path: '',
    component: GariconsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GariconRoutingModule { }
