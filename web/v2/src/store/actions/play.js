import * as actionTypes from "./actionsType";
let playLoopInterval;

const _connect = () => {
    return {
        type: actionTypes.CONNECT,
    };
};

const _connectStart = () => {
    return {
        type: actionTypes.CONNECT_START,
    };
};

const _connectStop = () => {
    return {
        type: actionTypes.CONNECT_STOP
    };
};

//-------------------------------------------

export const startConnection = (ipaddress) => dispatch => {
    dispatch(_connect());
    setTimeout(() => dispatch(_connectStart()), 2000);
}

export const endConnection = () => dispatch => {
    dispatch(_connect());
    setTimeout(() => dispatch(_connectStop()), 2000);
}

export const startKeyLoop = (key, loopIntervalMs) => dispatch => {
    console.log(key, loopIntervalMs);
    playLoopInterval = setInterval(() => {
        console.log(key, loopIntervalMs);
    }, loopIntervalMs)

};

export const stopKeyLoop = () => dispatch => {
    clearInterval(playLoopInterval);
    console.log("STOP");

}
