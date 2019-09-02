import { SOCKET_IP } from "./../constants/setup";

let io;

export const init = (ipaddress, callback) => {
  io = require("socket.io-client")(SOCKET_IP(ipaddress), {
    reconnection: false,
    timeout: 5000
  });

  //connect, error, disconnect
  io.on("connect", () => callback("connect"));
  io.on("connect_error", () => callback("error"));
  io.on("error", () => callback("error"));
  io.on("connect_timeout", () => callback("error"));
  io.on("disconnect", () => callback("disconnect"));

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};
