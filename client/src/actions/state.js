import {GET_DAILY_STATE, GET_HOURLY_STATE, GET_ERROR} from './type'
import axios from "axios";


export const getDailyState = () => async(dispatch) => {
    try {
        const res = await axios.get('/stats/daily');
        dispatch({
            type: GET_DAILY_STATE,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload:{
                msg: error.response.statusText,
                status: error.response.status,
            }
        })
    }
}
