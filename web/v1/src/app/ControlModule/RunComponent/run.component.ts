import { keyboardKey } from './../../shared/Type/keyboard-key.type';
import { SnackBarService } from './../../shared/ServicesModule/snack-bar.service';
import { SocketCommunicationService } from './../../shared/ServicesModule/socket-communication.service';
import { ConfigurationService } from './../../shared/ServicesModule/configuration.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'run-component',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit, OnDestroy {

  cameraConnectionString: string;
  noCameraUrl: string = "assets/cam/noCamera.jpg";
  ArrowUrl: string = "assets/cam/cam_arrow_green.png";
  ipAddress: string = "";
  tryConnect: boolean;
  keyboardKeys: keyboardKey[] = [];
  response: any;
  connection: any;
  remoteId: string;
  lastKeyExecutionTime: number = 0;
  lastKeyCode: string;
  intervalKeyTime: number;

  constructor(
    private _keyboardKeyService: ConfigurationService,
    private _chatService:SocketCommunicationService,
    private _snackBarService: SnackBarService
  ){}

  ngOnInit(){
    this.cameraConnectionString = this.noCameraUrl;
    Array.prototype.push.apply(this.keyboardKeys, this._keyboardKeyService.getKeyboardKeys());
    this.intervalKeyTime = this._keyboardKeyService.getIntervalKey();
  }

  ngOnDestroy(){
    this._chatService.disconnect();
  }

  onConnect(){

    if (!this.tryConnect){
      this.cameraConnectionString = this.noCameraUrl;
      this._chatService.disconnect();
    }

    if (this.tryConnect){
      this.remoteId =  this._keyboardKeyService.getIpAddress();
      this.cameraConnectionString = "http://" + this.remoteId + ":3001/stream/video.mjpeg";
    }

  }

  onCameraError(){       
    this.cameraConnectionString = this.noCameraUrl;
    this.tryConnect = false;
    this._chatService.disconnect();
  }

  onCameraSuccess(){
    if (this.cameraConnectionString != this.noCameraUrl){
      this._chatService.initializeConnection('http://'+ this.remoteId + ':3000');
      this._chatService.isConnectedEvent();
      this._chatService.isDisconnectedEvent();
      this._chatService.isRefusedConnection();
    }
  }

  onKeyDown(key: KeyboardEvent) {
    key.preventDefault();

    //Used to wait X milliseconds before executing the same key code
    var now = Date.now();
    var keyCode = key.code.toLowerCase();
    if ((now - this.lastKeyExecutionTime < this.intervalKeyTime) && (this.lastKeyCode == keyCode)) return;
    this.lastKeyExecutionTime = now;
    this.lastKeyCode = keyCode;

    //try to detect an arrow or a key press
    var formatKey = keyCode.replace(/arrow|key/g,'');
    var myCmd = this._keyboardKeyService.getCmdbyKeyName(formatKey);
    if (myCmd){
      console.log(formatKey);
      this._chatService.sendMessage("myClientMessage", myCmd);
    }
  }

  onKeyUp(){
    this.lastKeyExecutionTime = 0;
  }

}