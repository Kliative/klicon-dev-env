import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericWelcomeComponent } from './components/pre-gcon/generic-welcome/generic-welcome.component';
import { WelcomeComponent } from './components/pre-gcon/welcome/welcome.component';
import { MaterialIconsComponent } from './components/pre-gcon/material-icons/material-icons.component';
import { CovidIconsComponent } from './components/pre-gcon/covid-icons/covid-icons.component';
import { FeatherIconsComponent } from './components/pre-gcon/feather-icons/feather-icons.component';
import { GariconsModule } from './garicons/garicons.module';


const routes: Routes = [
  // {
  //   path: '',
  //   component: MaterialIconsComponent
  // },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'gen-wel',
    component: GenericWelcomeComponent
  },
  {
    path: 'gcon',
    loadChildren: './garicons/garicons.module#GariconsModule'
  },
  {
    path: 'mat',
    component: MaterialIconsComponent
  },
  {
    path: 'covid',
    component: CovidIconsComponent
  },
  {
    path: 'feather',
    component: FeatherIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
