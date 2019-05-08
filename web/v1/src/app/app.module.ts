import { ControlModule } from './ControlModule/index/control.module';
import { CameraModule } from './CameraModule/index/camera.module';
import { SnackBarModule } from './shared/SnackBarModule/snack-bar.module';
import { DashboardModule } from './DashboardModule/index/dashboard.module';
import { ToolBarModule } from './ToolBarModule/ToolBarModule';
import { NavigationBarModule } from './NavigationBarModule/NavigationBarModule';
import { TerminalModule } from './TerminalModule/index/terminal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServicesModule } from './shared/ServicesModule/services.module';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesModule,
    AppRouting,
    TerminalModule,
    NavigationBarModule,
    ToolBarModule,
    DashboardModule,
    SnackBarModule,
    CameraModule,
    ControlModule,
    BrowserAnimationsModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
