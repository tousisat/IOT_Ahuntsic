import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent } from './NavigationBarComponent';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule
    ],
    declarations: [NavigationBarComponent],
    
    exports: [NavigationBarComponent]
    
})
export class NavigationBarModule { }