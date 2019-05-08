package serverIO;

import com.corundumstudio.socketio.*;


public class ReceiveData {  
    SocketIOServer din;
    RaspberryPi rpi;
    
    public ReceiveData (SocketIOServer _s, RaspberryPi _rpi) {
        din = _s;
        rpi = _rpi;
    }
    
    //THREAD for receiving Data from Client
    void run() {
        
        din.addEventListener("myClientMessage", Data.class, (SocketIOClient client, Data data, AckRequest ackRequest) -> {
            String myReceivedMessage = data.getMessage();
            System.out.println("SERVER: " + myReceivedMessage);
            rpi.serial.write(myReceivedMessage); //write the received data to the serial.
        });
        
    }

}
