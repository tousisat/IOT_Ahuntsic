package serverIO;
import com.corundumstudio.socketio.*;
import java.io.IOException;

public class Main {


    public static void main(String[] args) throws InterruptedException, IOException {
        
        RaspberryPi rpi = new RaspberryPi();
        rpi.openSerialCommunication("/dev/ttyACM0", rpi.myBaudRate._9600);
        Configuration config = new Configuration();
        config.setPort(3000);
        final SocketIOServer server = new SocketIOServer(config);
        server.start();
        
        //Check for connection status
        ConnectionStatus status = new ConnectionStatus(server);
        status.connectedEvent(); //open a THREAD
        status.disconnectedEvent(); //open a THREAD
        
        //Receive Data from a web client
        ReceiveData receiveEvent= new ReceiveData(server, rpi);
        receiveEvent.run(); //open a THREAD
               
        //Send Data when the arduino serial is available
        SendData sendEvent = new SendData(server, rpi);
        sendEvent.run(); //run in the MAIN
        
        //Stop the application when the "end" command is sent
        rpi.serial.close();
        server.stop();
        System.exit(0);
    }   
}
