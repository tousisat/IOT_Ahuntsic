import { DashboardRouting } from './dashboard.routing';
import { DashBoardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
        FormsModule,
        ReactiveFormsModule,
        ],

    declarations: [
        DashBoardComponent
    ]

})

export class DashboardModule{

}