import {GET_DAILY_EVENT, GET_HOURLY_EVENT, GET_ERROR} from '../actions/type'

const initialState = {
    eventDaily: [],
    eventHourly: [],
    loading: true,
    error: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_DAILY_EVENT:
            return{
                ...state,
                eventDaily: payload,
                loading: false,
            }
        case GET_HOURLY_EVENT:
            return{
                ...state,
                eventHourly: payload,
                loading: false,
            }
            case GET_ERROR:
                return{
                    ...state,
                    error: payload,
                    loading: false,
                }
        default:
            return state
    }
}
