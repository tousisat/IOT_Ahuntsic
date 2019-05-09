let port;

module.exports = {
  init: (portName, baud) => {
    port = require('serialport')(portName, {
        baudRate: baud
      });
    return port;
  },
  getPort: () => {
    if (!port) {
      throw new Error('Port not initialized!');
    }
    return port;
  }
};
