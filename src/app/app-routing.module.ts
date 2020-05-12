import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericWelcomeComponent } from './components/generic-welcome/generic-welcome.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MaterialIconsComponent } from './components/material-icons/material-icons.component';
import { CovidIconsComponent } from './components/covid-icons/covid-icons.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';


const routes: Routes = [
  {
    path: '',
    component: CovidIconsComponent
  },
  // {
  //   path: '',
  //   component: WelcomeComponent
  // },
  {
    path: 'gen-wel',
    component: GenericWelcomeComponent
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
