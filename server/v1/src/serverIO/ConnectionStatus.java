package serverIO;

import com.corundumstudio.socketio.*;


public class ConnectionStatus {
    
    SocketIOServer status;
    
    public ConnectionStatus (SocketIOServer _s) {
        status = _s;
    }

    void connectedEvent() {
        
        //Check if a client has connected THREAD
        status.addConnectListener((SocketIOClient client) -> {
            System.out.println("New Connection from " + client.getRemoteAddress());
        });
    }
    
    void disconnectedEvent(){
        //Check if a client has disconnected THREAD
        status.addDisconnectListener((SocketIOClient client) -> {
            System.out.println("Disconnection from " + client.getRemoteAddress());
        });
    }

}
