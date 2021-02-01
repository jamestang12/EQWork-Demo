import {combineReducers} from 'redux'
import stats from './stats'
import alert from './alert'
export default combineReducers({
    stats,
    alert
});