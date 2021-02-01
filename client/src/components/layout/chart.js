import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getDailyState} from '../../actions/state'

const Charts = ({getDailyState, stats,setTitle }) => {
    useEffect(() => {
        getDailyState();
    },[])
    useEffect(() => {
        setTitle("Charts")
    },[])
    return (
        <div>
            Charts
        </div>
    )
}
const mapStateToProps = state => ({
    stats: state.stats
})
export default connect(mapStateToProps, {getDailyState})(Charts)
