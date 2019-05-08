import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ToolBarComponent } from './ToolBarComponent';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [ToolBarComponent],
    declarations: [ToolBarComponent]
})
export class ToolBarModule { }