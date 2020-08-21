import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GariconsComponent } from './garicons.component';
import { RainComponent } from './components/rain/rain.component';
import { HeavyRainComponent } from './components/heavy-rain/heavy-rain.component';
import { OvercastComponent } from './components/overcast/overcast.component';
import { OvercastSunComponent } from './components/overcast-sun/overcast-sun.component';
import { ThunderStormComponent } from './components/thunder-storm/thunder-storm.component';
import { LayersComponent } from './components/layers/layers.component';
import { PrinterComponent } from './components/printer/printer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MinimizeComponent } from './components/minimize/minimize.component';
import { RotateComponent } from './components/rotate/rotate.component';
import { ChevronComponent } from './components/chevron/chevron.component';
import { MoonComponent } from './components/moon/moon.component';
import { SunComponent } from './components/sun/sun.component';
import { CornerComponent } from './components/corner/corner.component';
import { CommonModule } from '@angular/common';
import { GariconRoutingModule } from './garicon-routing.module';
import { ActivityComponent } from './components/activity/activity.component';
import { AirplayComponent } from './components/airplay/airplay.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlignComponent } from './components/align/align.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { AtSignComponent } from './components/at-sign/at-sign.component';
import { ApertureComponent } from './components/aperture/aperture.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AwardComponent } from './components/award/award.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BatteryComponent } from './components/battery/battery.component';
import { BellComponent } from './components/bell/bell.component';

@NgModule({
  imports: [
    CommonModule,
    GariconRoutingModule
  ],
  declarations: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent,
    OvercastSunComponent,
    ThunderStormComponent,
    // UI
    LayersComponent,
    PrinterComponent,
    MenuComponent,
    MinimizeComponent,
    RotateComponent,
    ChevronComponent,
    // Misc
    CornerComponent,
    MoonComponent,
    SunComponent,
    ActivityComponent,
    AirplayComponent,
    AlertComponent,
    AlignComponent,
    AnchorComponent,
    ArrowComponent,
    AtSignComponent,
    ApertureComponent,
    ArchiveComponent,
    AwardComponent,
    BarChartComponent,
    BatteryComponent,
    BellComponent
  ],
  exports: [
    GariconsComponent,
    RainComponent,
    HeavyRainComponent,
    OvercastComponent,
    OvercastSunComponent,
    ThunderStormComponent,
    // UI
    LayersComponent,
    PrinterComponent,
    MenuComponent,
    MinimizeComponent,
    RotateComponent,
    ChevronComponent,
    // Misc
    CornerComponent,
    MoonComponent,
    SunComponent,
    ActivityComponent,
    AirplayComponent,
    AlertComponent,
    AlignComponent,
    AnchorComponent,
    ArrowComponent,
    AtSignComponent,
    ApertureComponent,
    ArchiveComponent,
    AwardComponent,
    BarChartComponent,
    BatteryComponent,
    BellComponent
  ]
})
export class GariconsModule { }
