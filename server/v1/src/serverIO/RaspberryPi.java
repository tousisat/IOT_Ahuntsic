package serverIO;

import com.pi4j.io.gpio.*; //pi4j-core.jar
import com.pi4j.io.serial.*;
import java.io.IOException;

public class RaspberryPi {

    // create gpio controller
    final GpioController gpio = GpioFactory.getInstance();
    // provision gpio pin #01 as an output pin and turn on
    final GpioPinDigitalOutput pin = gpio.provisionDigitalOutputPin(RaspiPin.GPIO_01, "MyLED", PinState.LOW);

    // create an instance of the serial communications class
    final Serial serial = SerialFactory.createInstance();   
    // create serial config settings
    SerialConfig config = new SerialConfig();
    Baud myBaudRate;
    
    void openSerialCommunication(String com, Baud baudRate) throws InterruptedException, IOException{
    config.device(com).baud(baudRate);
    serial.open(config);
    }

    void Toggle() {
        pin.toggle();
    }

}
