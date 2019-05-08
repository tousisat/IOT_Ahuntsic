import { SnackBarService } from './../ServicesModule/snack-bar.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'snack-bar-component',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {
    @ViewChild('snackbar') _snackbarElement: any;
    shown: boolean;
    previousTimeout: any;

    private _defaults = {
        title: '',
        message: "Hi! I'm a SnackBar!",
        color: "white",
        timeout: 2500
    };

    title: string;
    message: string;
    color: string;
    timeout: number;

    nextTitle: string;
    nextMessage: string;
    nextColor: string;
    nextTimeout: number;

    constructor(private _snackBarService: SnackBarService) { }

    ngOnInit() {
        this._snackBarService.activate = this.activate.bind(this);
    }

    activate(message = this._defaults.message, title = this._defaults.title, color = this._defaults.color, timeout = this._defaults.timeout) {
        this.nextTitle = title;
        this.nextMessage = message;
        this.nextColor = color;
        this.nextTimeout = timeout;

        this.runSnackbar();
    }

    //Only one snackbar can be shown at a time. If the snackbar is already shown, we hide it then show it again with
    //the new content.
    private runSnackbar() {
        if (this.shown) {
            this.hide(this.showNext);
        } else {
            this.showNext(this);
        }
    }

    private showNext(me: any) {
        me.shown = true;
        me.title = me.nextTitle;
        me.message = me.nextMessage;
        me.color = me.nextColor;
        me.timeout = me.nextTimeout;
        
        getComputedStyle(document.getElementById('snackbar'), "");

        me._snackbarElement.nativeElement.style.opacity = 1;
        me._snackbarElement.nativeElement.children[0].style.color = me.color;
        me._snackbarElement.nativeElement.style.bottom = "0px";
        me._snackbarElement.nativeElement.style.zIndex = 9999;

        if (me.previousTimeout)
            window.clearTimeout(me.previousTimeout);

        me.previousTimeout = window.setTimeout(() => me.hide(null), me.timeout);
    }

    private hide(nextAction: Function) {
        this._snackbarElement.nativeElement.style.opacity = 0;
        this._snackbarElement.nativeElement.style.bottom = "-48px";
        let me = this;

        window.setTimeout(() => {
            this._snackbarElement.nativeElement.style.zIndex = 0;
            this.shown = false;
            if (nextAction) {
                nextAction(me);
            }
        }, 400

        );

    }

}