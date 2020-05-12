import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { GenericWelcomeComponent } from './components/generic-welcome/generic-welcome.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MaterialIconsComponent } from './components/material-icons/material-icons.component';
import { MiFormComponent } from './components/material-icons/mi-form/mi-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidIconsComponent } from './components/covid-icons/covid-icons.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FeatherWeatherIconsComponent } from './components/feather-icons/feather-weather-icons/feather-weather-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericWelcomeComponent,
    WelcomeComponent,
    MaterialIconsComponent,
    MiFormComponent,
    CovidIconsComponent,
    FeatherIconsComponent,
    FeatherWeatherIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
