import * as typeMess from "../constant/Message";
import * as types from "../constant/ActionType";

var initial = typeMess.MSG_WELCOME

const message = (state = initial, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default message;