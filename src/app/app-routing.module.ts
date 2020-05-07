import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericWelcomeComponent } from './components/generic-welcome/generic-welcome.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'gen-wel',
    component: GenericWelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
