import { RunComponent } from './../RunComponent/run.component';
import { ControlRouting } from './control.routing';
import { ConfigurationComponent } from '../ConfigurationComponent/configuration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    ButtonModule as NgButtonModule,
    CarouselModule as NgCarouselModule,
    InputTextModule as NgInputTextModule,
    PanelModule as NgPanelModule,
    DialogModule as NgDialogModule,
    SliderModule as NgSliderModule,
    TooltipModule as NgTooltipModule,
    ToggleButtonModule as NgToggleButonModule,
    DataGridModule as NgDataGridModule,
    DataListModule as NgDataListModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        NgButtonModule,
        NgPanelModule,
        NgInputTextModule,
        NgCarouselModule,
        CommonModule,
        ControlRouting,
        FormsModule,
        ReactiveFormsModule,
        NgDialogModule,
        NgSliderModule,
        NgTooltipModule,
        NgToggleButonModule,
        NgDataGridModule,
        NgDataListModule
        ],

    declarations: [
        ConfigurationComponent,
        RunComponent
    ]

})

export class ControlModule{

}