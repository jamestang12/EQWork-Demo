import {GET_DAILY_STATE, GET_HOURLY_STATE, GET_ERROR} from './type'
import {setAlert} from './alert'
import axios from "axios";


export const getDailyState = () => async(dispatch) => {
    try {
        const res = await axios.get('/stats/daily');
        dispatch({
            type: GET_DAILY_STATE,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
        dispatch(setAlert("Throttle limit exceeded", "danger"))
    }
}

export const getHourlyState = () => async(dispatch) => {
    try {
        const res = await axios.get('/stats/hourly');
        dispatch({
            type: GET_HOURLY_STATE,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
        dispatch(setAlert("Throttle limit exceeded", "danger"))
    }
}

