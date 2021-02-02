import {GET_POI} from '../actions/type'

const initialState = {
    poi: [],
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_POI:
            return{
                ...state,
                poi: payload,
                loading: false,
            }
       
        default:
            return state
    }
}

