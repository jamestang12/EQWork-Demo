import {GET_DAILY_EVENT, GET_HOURLY_STATE, GET_ERROR} from './type'
import {setAlert} from './alert'
import axios from "axios";


export const getDailyEvent = () => async(dispatch) => {
    try {
        const res = await axios.get('/events/daily');
        dispatch({
            type: GET_DAILY_EVENT,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
        dispatch(setAlert("Throttle limit exceeded", "danger"))
    }
}
