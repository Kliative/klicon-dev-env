import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { GenericWelcomeComponent } from './components/pre-gcon/generic-welcome/generic-welcome.component';
import { WelcomeComponent } from './components/pre-gcon/welcome/welcome.component';
import { MaterialIconsComponent } from './components/pre-gcon/material-icons/material-icons.component';
import { MiFormComponent } from './components/pre-gcon/material-icons/mi-form/mi-form.component';
import { CovidIconsComponent } from './components/pre-gcon/covid-icons/covid-icons.component';
import { FeatherIconsComponent } from './components/pre-gcon/feather-icons/feather-icons.component';
import { FeatherWeatherIconsComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-weather-icons.component';
import { EditComponent } from './components/pre-gcon/material-icons/edit/edit.component';
import { ThumbsUpComponent } from './components/pre-gcon/material-icons/thumbs-up/thumbs-up.component';
import { AnimatThumbsUpComponent } from './components/pre-gcon/material-icons/animat-thumbs-up/animat-thumbs-up.component';
import { ClockComponent } from './components/pre-gcon/material-icons/clock/clock.component';
import { AnimatWrenchComponent } from './components/pre-gcon/material-icons/animat-wrench/animat-wrench.component';
import { AnimatBellComponent } from './components/pre-gcon/material-icons/animat-bell/animat-bell.component';
import { AnimatShoppingCartComponent } from './components/pre-gcon/material-icons/animat-shopping-cart/animat-shopping-cart.component';
import { AnimatLockComponent } from './components/pre-gcon/material-icons/animat-lock/animat-lock.component';
import { AnimatLanguageGlobeComponent } from './components/pre-gcon/material-icons/animat-language-globe/animat-language-globe.component';
import { AaFRainComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/aa-f-rain/aa-f-rain.component';
import { FeatherRainComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-rain/feather-rain.component';
import { FeatherHeavyRainComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-heavy-rain/feather-heavy-rain.component';
import { FeatherSnowComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-snow/feather-snow.component';
import { FeatherOvercastComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-overcast/feather-overcast.component';
import { FeatherOvaercastSunComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-ovaercast-sun/feather-ovaercast-sun.component';
import { FeatherThunderStormComponent } from './components/pre-gcon/feather-icons/feather-weather-icons/feather-thunder-storm/feather-thunder-storm.component';
import { FeatherUiIconsComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/feather-ui-icons.component';
import { ChevronComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/chevron/chevron.component';
import { RotateComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/rotate/rotate.component';
import { MenuComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/menu/menu.component';
import { FunkyMenuComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/funky-menu/funky-menu.component';
import { PrinterComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/printer/printer.component';
import { LayersComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/layers/layers.component';
import { MinimizeComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/minimize/minimize.component';
import { SunComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/sun/sun.component';
import { MoonComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/moon/moon.component';
import { CornerComponent } from './components/pre-gcon/feather-icons/feather-ui-icons/corner/corner.component';
import { BaseComponent } from './components/base/base.component';
import { HttpClientModule } from '@angular/common/http';


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
    FeatherSnowComponent,
    FeatherOvercastComponent,
    FeatherOvaercastSunComponent,
    FeatherThunderStormComponent,
    // 
    FeatherUiIconsComponent,
    ChevronComponent,
    RotateComponent,
    MenuComponent,
    FunkyMenuComponent,
    PrinterComponent,
    LayersComponent,
    MinimizeComponent,
    // 
    SunComponent,
    MoonComponent,
    CornerComponent,
    BaseComponent
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
