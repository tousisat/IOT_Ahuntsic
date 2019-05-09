const io = require("../socket");

const sendToClient = (data) => {
        io.getIO().emit("myServerMessage", data)
}

module.exports = {sendToClient};
