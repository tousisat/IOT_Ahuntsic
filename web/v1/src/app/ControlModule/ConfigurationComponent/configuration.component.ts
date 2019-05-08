import { ServicesModule } from "./../../shared/ServicesModule/services.module";
import { ConfigurationService } from "./../../shared/ServicesModule/configuration.service";
import { keyboardKey } from "./../../shared/Type/keyboard-key.type";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "configuration-component",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.css"]
})
export class ConfigurationComponent implements OnInit {
  keyboardKeys: keyboardKey[] = [];
  displayAdd: boolean = false;
  displayRemove: boolean = false;
  _sendInterval: number;
  set sendInterval(value: number) {
    this._sendInterval = value;
    this._keyboardKeyService.setIntervalKey(value);
  }
  get sendInterval() {
    return this._sendInterval;
  }
  _ipAddress: string;
  set ipAddress(value: string) {
    this._ipAddress = value;
    this._keyboardKeyService.setIpAddress(value);
  }
  get ipAddress() {
    return this._ipAddress;
  }

  constructor(private _keyboardKeyService: ConfigurationService) {}

  ngOnInit() {
    Array.prototype.push.apply(
      this.keyboardKeys,
      this._keyboardKeyService.getKeyboardKeys()
    );
    this.sendInterval = this._keyboardKeyService.getIntervalKey();
    this.ipAddress = this._keyboardKeyService.getIpAddress();
  }

  onAdd() {
    this.displayAdd = true;
  }

  onRemove() {
    this.displayRemove = true;
  }

  saveConfiguration() {
    this._keyboardKeyService.setKeyboardKeys(this.keyboardKeys);
  }

  onImgClickAdd(imgUrl: string) {
    var nameStart: number = imgUrl.lastIndexOf("_") + 1;
    var nameStop: number = imgUrl.lastIndexOf(".");
    var nameImg: string = imgUrl.substring(nameStart, nameStop).toUpperCase();
    var cmdImg: string = nameImg.toLowerCase().charAt(0);

    var myNewKey: keyboardKey = new keyboardKey();
    myNewKey = { KeyCmd: cmdImg, KeyName: nameImg, KeyImg: imgUrl };
    this.keyboardKeys.push(myNewKey);
    this.saveConfiguration();
  }

  onImgClickRemove(key: keyboardKey) {
    this.keyboardKeys.splice(this.keyboardKeys.indexOf(key), 1);
    this.saveConfiguration();
  }
}
