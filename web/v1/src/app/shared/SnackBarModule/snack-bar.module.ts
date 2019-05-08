import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SnackBarComponent } from './snack-bar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [SnackBarComponent],
    declarations: [SnackBarComponent]
})
export class SnackBarModule { }