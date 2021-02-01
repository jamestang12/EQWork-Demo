import {combineReducers} from 'redux'
import stats from './stats'
import alert from './alert'
import event from './event'
export default combineReducers({
    stats,
    alert,
    event
});