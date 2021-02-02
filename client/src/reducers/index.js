import {combineReducers} from 'redux'
import stats from './stats'
import alert from './alert'
import event from './event'
import poi from './poi'
export default combineReducers({
    stats,
    alert,
    event,
    poi
});