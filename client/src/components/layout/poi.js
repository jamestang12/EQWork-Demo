import React, { useEffect } from 'react'

const POI = ({setTitle}) => {
    useEffect(() => {
        setTitle("POI")
    },[])
    return (
        <div>
            POI
        </div>
    )
}

export default POI