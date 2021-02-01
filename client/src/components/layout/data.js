import React, { useEffect } from 'react'

const Data = ({setTitle}) => {
    useEffect(() => {
        setTitle("Data")
    },[])
    return (
        <div>
            Data
        </div>
    )
}

export default Data
