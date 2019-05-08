package serverIO;

import java.io.IOException;
import com.corundumstudio.socketio.*;

public class SendData {   
    SocketIOServer dout;
    RaspberryPi rpi;

    public SendData(SocketIOServer _s, RaspberryPi _rpi){
        dout = _s;
        rpi = _rpi;
    }
    
    //Method for SENDING data to client
    public void run() {
        String msg = "";
        byte[] serialSend;
        int available = -1;
        
        while (!msg.equals("end")) {
                 
            try {
                msg = "";
                available = rpi.serial.available();
                if (available > 0) {
                    serialSend = rpi.serial.read(); //send the serial data to client
                    for (int i=0; i<serialSend.length; i++){msg += (char)serialSend[i];}
                    dout.getBroadcastOperations().sendEvent("myServerMessage", msg);
                    System.out.println("ARDUINO: " + msg + "*");
                    
                }
            } catch (IOException | IllegalStateException e) {
                available = -1;
            }

        }
    }
}

