import { TerminalRouting } from './terminal.routing';
import { TerminalComponent } from './terminal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
    ButtonModule as NgButtonModule,
    TerminalModule as NgTerminalModule,
    InputTextModule as NgInputTextModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TerminalRouting,
        NgButtonModule,
        NgTerminalModule,
        NgInputTextModule,       
    ],

    declarations: [
        TerminalComponent
    ]

})

export class TerminalModule{ }