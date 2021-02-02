import {GET_POI} from './type'
import {setAlert} from './alert'
import axios from "axios";


export const getPoi = () => async(dispatch) => {
    try {
        const res = await axios.get('/poi');
        dispatch({
            type: GET_POI,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
        dispatch(setAlert("Throttle limit exceeded", "danger"))
    }
}