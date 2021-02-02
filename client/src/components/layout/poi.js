import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getPoi} from '../../actions/poi'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import poi from '../../reducers/poi';
import {GoogleMap,withScriptjs, withGoogleMap} from 'react-google-maps'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: '',
      color: theme.palette.text.secondary,
      minHeight: 400
      
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


const POI = ({setTitle, pois, getPoi}) => {
    const classes = useStyles();
    const [poiItem, setPoi] = useState([])
    const [location, setLocation] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        setTitle("POI")
        getPoi()
    },[])

    console.log(pois)
    useEffect(() => {
        setPoi(pois.poi)
        if(pois.poi.length != 0){
            setName(pois.poi[0].name)
            setLocation([pois.poi[0].lat, pois.poi[0].lon])
        }
    },[pois.loading])

    const Map = () =>{
        return(
            <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: location[0], lng: location[1]}}
        />
        )
    } 
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className={classes.root}>
            {!pois.loading && poiItem.length != 0? 
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ width: "80vw", height: "80vh" }}>
                            <WrappedMap
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCedJnV1l9qg-ZObjZLfBEbnoY8Uorr6d4&v=3.exp&libraries=geometry,drawing,places" 
                                loadingElement={<div style={{ height: `100%` }} />}
                                 containerElement={<div style={{ height: `100%` }} />}
                                 mapElement={<div style={{ height: `100%` }} />}
                            />
                            
                        </Paper>
                    </Grid>
                </Grid>:
                <div>
                    Loading
                </div>
        
            }
        </div>
    )
}

const mapStateToProps = state => ({
    pois: state.poi,
})

export default connect(mapStateToProps, {getPoi})(POI)