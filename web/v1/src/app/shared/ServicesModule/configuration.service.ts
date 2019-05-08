import { keyboardKey } from "./../Type/keyboard-key.type";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfigurationService {
  private keyboardKeys: keyboardKey[] = [];
  private intervalKey: number = 100;
  private ipAddress: string = "rasp_jt";

  private Url: string = "assets/keyboard/computer_key_";
  private extension: string = ".png";

  readonly imgUrl: string[] = [
    this.Url + "Arrow_Up" + this.extension,
    this.Url + "Arrow_Down" + this.extension,
    this.Url + "Arrow_Left" + this.extension,
    this.Url + "Arrow_Right" + this.extension,
    this.Url + "A" + this.extension,
    this.Url + "B" + this.extension,
    this.Url + "C" + this.extension,
    this.Url + "D" + this.extension,
    this.Url + "E" + this.extension,
    this.Url + "F" + this.extension,
    this.Url + "G" + this.extension,
    this.Url + "H" + this.extension,
    this.Url + "I" + this.extension,
    this.Url + "J" + this.extension,
    this.Url + "K" + this.extension,
    this.Url + "L" + this.extension,
    this.Url + "M" + this.extension,
    this.Url + "N" + this.extension,
    this.Url + "O" + this.extension,
    this.Url + "P" + this.extension,
    this.Url + "Q" + this.extension,
    this.Url + "R" + this.extension,
    this.Url + "S" + this.extension,
    this.Url + "T" + this.extension,
    this.Url + "U" + this.extension,
    this.Url + "V" + this.extension,
    this.Url + "W" + this.extension,
    this.Url + "X" + this.extension,
    this.Url + "Y" + this.extension,
    this.Url + "Z" + this.extension
  ];

  getCmdbyKeyName(keyName: string): string {
    var keyFound: keyboardKey = this.keyboardKeys.find(
      x => x.KeyName.toLowerCase() == keyName.toLowerCase()
    );
    if (!keyFound) return null;
    return keyFound.KeyCmd;
  }

  getKeyboardKeys(): keyboardKey[] {
    return this.keyboardKeys;
  }

  setKeyboardKeys(keys: keyboardKey[]) {
    this.keyboardKeys = keys;
  }

  getIntervalKey(): number {
    return this.intervalKey;
  }

  setIntervalKey(interval: number) {
    this.intervalKey = interval;
  }

  getIpAddress(): string {
    return this.ipAddress;
  }

  setIpAddress(ip: string) {
    this.ipAddress = ip;
  }
}
