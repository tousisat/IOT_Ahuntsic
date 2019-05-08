import { SnackBarService } from './snack-bar.service';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()

export class SocketCommunicationService {
  private socket;
  public isConnected = false;

  constructor( private _snackBar: SnackBarService){}

  initializeConnection(url: string){
    if (this.socket)
      this.socket.disconnect();
      
    this.socket = io(url, {reconnection: false});

  }
  disconnect(){
    if (this.socket)
      this.socket.disconnect();
  }

  isConnectedEvent(){
      this.socket.on('connect',() => {
        this._snackBar.activate("Connected Brah!")
        this.isConnected = true;
      }); 
  }

  isDisconnectedEvent(){
    this.socket.on('disconnect',(socket) => {
      this._snackBar.activateError("Disconnected...")
      this.isConnected = false;
    })
  }

  isRefusedConnection(){
    this.socket.on('connect_error', () => {
      this._snackBar.activateError("Impossible Connection...")
    })
  }

  sendMessage(messageName: string, message: string){
    if (this.socket)
      this.socket.emit(messageName, message); 
  }
  
  ReceivedMessageEvent(messageName: string) {
    let dataReceived = new Observable(observer =>{
      this.socket.on(messageName, (data) => {
        observer.next(data);
      });
    });

    return dataReceived;
  }
}