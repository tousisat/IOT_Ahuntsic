import { SnackBarComponent } from './../SnackBarModule/snack-bar.component';
import { Injectable } from '@angular/core';

@Injectable()
export class SnackBarService {
    primed: boolean;
    
    activate: (message?: string, title?: string, color?: string, timeout?: number) => void;

    activateIfPrimed(message?: string, title?: string, color?: string, timeout?) {

        if (this.primed) {
            this.primed = false;
            this.activate(message, title, color, timeout);
        }

    }

    activateError(message?: string) {
        this.activate(message, null, "red", 5000);
    }

}
