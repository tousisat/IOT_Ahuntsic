//rpi connection ip

//the port of socket.io is by default 3000
export const SOCKET_IP = (ipaddress, port = 3000) => `http://${ipaddress}:${port}`;

//the port of the camera is by default 3001
export const CAMERA_IP = (ipaddress, port = 3001) =>
  `http://${ipaddress}:${port}/stream/video.mjpeg`;

//Socket.io tunnel
export const WEB_TO_SERVER_TAG = "myClientMessage";
export const SERVER_TO_WEB_TAG = "myServerMessage";
