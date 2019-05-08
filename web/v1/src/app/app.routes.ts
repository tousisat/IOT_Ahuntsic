import { DashBoardComponent } from './DashboardModule/index/dashboard.component';
import { TerminalComponent } from './TerminalModule/index/terminal.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];