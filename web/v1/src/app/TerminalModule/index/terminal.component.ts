import { SocketCommunicationService } from "./../../shared/ServicesModule/socket-communication.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import * as io from "socket.io-client";

@Component({
  selector: "terminal-root",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.css"]
})
export class TerminalComponent implements OnDestroy, OnInit {
  response: any;
  connection: any;

  constructor(private chatService: SocketCommunicationService) {}

  ngOnInit() {}

  onConnect(remoteId: string) {
    this.chatService.initializeConnection("http://" + remoteId + ":3000");
    this.chatService.isConnectedEvent();
    this.chatService.isDisconnectedEvent();
    this.chatService.isRefusedConnection();

    //Subscribe to the Server Messages and Run in the Background
    this.connection = this.chatService
      .ReceivedMessageEvent("myServerMessage")
      .subscribe(message => {
        this.response = message;
      });
  }

  onSendCommand(event) {
    if (this.chatService.isConnected)
      this.chatService.sendMessage("myClientMessage", event.command);
  }

  ngOnDestroy() {
    if (this.connection) this.connection.unsubscribe();
  }
}
