import * as actionTypes from "../actions/actionsType";

const initialState = {
    isConnect: false,
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONNECT:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.CONNECT_START:
            return {
                ...state,
                isConnect: true,
                isLoading: false
            };
        case actionTypes.CONNECT_STOP:
            return {
                ...state,
                isLoading: false,
                isConnect: false
            };
        default:
            return state;
    }
};

export default reducer;
