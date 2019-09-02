//rpi connection ip
export const SOCKET_IP = ipaddress => `http://${ipaddress}:3000`;
export const CAMERA_IP = ipaddress =>
  `http://${ipaddress}:3001/stream/video.mjpeg`;

//Socket.io tunnel
export const WEB_TO_SERVER_TAG = "myClientMessage";
export const SERVER_TO_WEB_TAG = "myServerMessage";
