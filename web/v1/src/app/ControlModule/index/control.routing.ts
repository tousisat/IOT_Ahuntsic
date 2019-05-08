import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConfigurationComponent } from '../ConfigurationComponent/configuration.component';
import { RunComponent } from './../RunComponent/run.component';

const CONTROL_ROUTES_MAIN: Routes = [
    {
        path: 'configuration',
        component: ConfigurationComponent
    },
    {
        path: 'run',
        component: RunComponent
    }
]

export const ControlRouting = RouterModule.forChild(CONTROL_ROUTES_MAIN);