import { SnackBarService } from './../../shared/ServicesModule/snack-bar.service';
import { Component } from '@angular/core';
@Component({
  selector: 'camera-component',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  private cameraConnectionString: string = "";
  private ipAddress: string = "";
  private canConnect: boolean = false;

      constructor(private _snackBarService: SnackBarService) { }

      onConnect(remoteId: string){
        if (this.ipAddress == remoteId) return;
        this.ipAddress = remoteId;
        this.canConnect = false;        
        this.cameraConnectionString = "http://" + remoteId + ":3001/stream/video.mjpeg";
      }

      onCameraError(){       
        this._snackBarService.activateError("Pi Camera Disconnected");
      }

      onCameraSuccess(){
        this._snackBarService.activate("Pi Camera Connected");
        this.canConnect = true;
      }

}