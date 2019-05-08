import { CameraRouting } from './camera.routing';
import { CameraComponent } from './camera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    ButtonModule as NgButtonModule,
    InputTextModule as NgInputTextModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        CameraRouting,
        FormsModule,
        ReactiveFormsModule,
        NgButtonModule,
        NgInputTextModule
        ],

    declarations: [
        CameraComponent
    ]

})

export class CameraModule{

}