import { ConfigurationService } from './configuration.service';
import { SnackBarService } from './snack-bar.service';
import { SocketCommunicationService } from './socket-communication.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


@NgModule({
    imports: [HttpModule],
    providers: [
        SocketCommunicationService,
        SnackBarService,
        ConfigurationService
    ]
})

export class ServicesModule{

}