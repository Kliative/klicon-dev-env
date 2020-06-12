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
import { EditComponent } from './components/material-icons/edit/edit.component';
import { ThumbsUpComponent } from './components/material-icons/thumbs-up/thumbs-up.component';
import { ClockComponent } from './components/material-icons/clock/clock.component';
import { AnimatWrenchComponent } from './components/material-icons/animat-wrench/animat-wrench.component';
import { AnimatBellComponent } from './components/material-icons/animat-bell/animat-bell.component';
import { AnimatShoppingCartComponent } from './components/material-icons/animat-shopping-cart/animat-shopping-cart.component';
import { AnimatLockComponent } from './components/material-icons/animat-lock/animat-lock.component';
import { AnimatLanguageGlobeComponent } from './components/material-icons/animat-language-globe/animat-language-globe.component';
import { AnimatThumbsUpComponent } from './components/material-icons/animat-thumbs-up/animat-thumbs-up.component';
import { FeatherRainComponent } from './components/feather-icons/feather-weather-icons/feather-rain/feather-rain.component';
import { AaFRainComponent } from './components/feather-icons/feather-weather-icons/aa-f-rain/aa-f-rain.component';
// tslint:disable-next-line: max-line-length
import { FeatherHeavyRainComponent } from './components/feather-icons/feather-weather-icons/feather-heavy-rain/feather-heavy-rain.component';
import { FeatherSnowComponent } from './components/feather-icons/feather-weather-icons/feather-snow/feather-snow.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericWelcomeComponent,
    WelcomeComponent,
    MaterialIconsComponent,
    MiFormComponent,
    CovidIconsComponent,
    FeatherIconsComponent,
    FeatherWeatherIconsComponent,
    EditComponent,
    ThumbsUpComponent,
    AnimatThumbsUpComponent,
    ClockComponent,
    AnimatWrenchComponent,
    AnimatBellComponent,
    AnimatShoppingCartComponent,
    AnimatLockComponent,
    AnimatLanguageGlobeComponent,
    AaFRainComponent,
    FeatherRainComponent,
    FeatherHeavyRainComponent,
    FeatherSnowComponent
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
