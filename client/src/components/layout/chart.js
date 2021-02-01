import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'

const Charts = ({setTitle, setAlert}) => {
    useEffect(() => {
        setTitle("Charts")
    },[])
    return (
        <div>
            Charts
        </div>
    )
}

export default connect(null, {setAlert})(Charts)
