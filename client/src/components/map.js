import React from 'react'
import {GoogleMap} from 'react-google-maps'

export const Map = ({lat, lng}) => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: lat, lng: lng}}
            
        />
    )
}

 
