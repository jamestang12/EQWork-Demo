import {GET_DAILY_STATE, GET_HOURLY_STATE, GET_ERROR} from '../actions/type'

const initialState = {
    statsDaily: [],
    stateHourly: [],
    loading: true,
    error: {},
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_DAILY_STATE:
            return{
                ...state,
                statsDaily: payload,
                loading: false,
            }
        case GET_HOURLY_STATE:
            return{
                ...state,
                stateHourly: payload,
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

