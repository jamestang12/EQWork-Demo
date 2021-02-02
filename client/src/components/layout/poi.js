import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getPoi} from '../../actions/poi'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import poi from '../../reducers/poi';
import {GoogleMap,withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [zoomValue, setZoomValue] = useState(10)
    const [mark, setMark] = useState(null)
    const [stateOption, setStateOption] = useState("EQ Works");


    useEffect(() => {
        setTitle("POI")
        getPoi()
    },[])

    const handleClick = (item) => {
        // setSelectedMark(item)
        setMark(item)
        setLocation([item.lat, item.lon])
        setZoomValue(20)
        setStateOption(item.name)
    }
    const Map = () =>{
        return(
            <GoogleMap
        zoom={zoomValue}
        center={{lat: location[0], lng: location[1]}}

        >
            {poiItem.map((item) => (
                    <Marker key={item.poi_id} position={{lat: item.lat, lng: item.lon}}
                    // onClick={() => {console.log(item)}}
                    onClick={() => {handleClick(item)}}
                />
            ))}

            
            
        </GoogleMap>
        )
    } 
    const WrappedMap = withScriptjs(withGoogleMap(Map));


    useEffect(() => {
        setPoi(pois.poi)
        if(pois.poi.length != 0){
            setName(pois.poi[0].name)
            setLocation([pois.poi[0].lat, pois.poi[0].lon])
            const WrappedMap = withScriptjs(withGoogleMap(Map));
        }
    },[pois.loading])

    const handleChange = (event) => {
        console.log(event.target.value)
        const result = pois.poi.find(value => {
            return value.name == event.target.value
        })
        setZoomValue(20)
        setLocation([result.lat, result.lon])
        setMark(result)
        setStateOption(event.target.value)

    }

    return (
        <div className={classes.root}>
            {!pois.loading && poiItem.length != 0? 
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ width: "80vw", height: "80vh" }}>
                            <WrappedMap
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCedJnV1l9qg-ZObjZLfBEbnoY8Uorr6d4&v=3.exp&libraries=geometry,drawing,places" 
                                loadingElement={<div style={{ height: `80%` }} />}
                                 containerElement={<div style={{ height: `90%` }} />}
                                 mapElement={<div style={{ height: `100%` }} />}
                            />
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={stateOption}
                                onChange={(e) =>handleChange(e)}
                                label="Type of data"
                            >
                            <MenuItem value="">
                                    <em>Select one</em>
                                </MenuItem>
                                <MenuItem value={"EQ Works"}>EQ Works</MenuItem>
                                <MenuItem value={"CN Tower"}>CN Tower</MenuItem>
                                <MenuItem value={"Niagara Falls"}>Niagara Falls</MenuItem>
                                <MenuItem value={"Vancouver Harbour"}>Vancouver Harbour</MenuItem>

                            </Select>
                            </FormControl>
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