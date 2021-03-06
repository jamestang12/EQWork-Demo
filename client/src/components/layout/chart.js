import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getDailyState} from '../../actions/state'
import {getDailyEvent} from '../../actions/event'
import Chart from '../chart'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

const Charts = ({getDailyState, getDailyEvent,stats, events,setTitle }) => {
    const classes = useStyles();
    const [statsDaily, SetStatsDaily] = useState([])
    const [stateTitle, setStateTitle] = useState("impressions")
    const [stateOption, setStateOption] = useState(10);
    const [eventDaily, setEventDaily] = useState([])

    const handleChange = (event) => {
    //   setAge(event.target.value);
        setStateOption(event.target.value)
        if(event.target.value == 10){
            const value = stats.statsDaily.map((item) => {
                return item.impressions
            })
            setStateTitle("impressions")
            SetStatsDaily(value)
        }else if(event.target.value == 20){
            const value = stats.statsDaily.map((item) => {
                return item.clicks
            })
            setStateTitle("clicks")
            SetStatsDaily(value)
        }else if(event.target.value == 30){
            const value = stats.statsDaily.map((item) => {
                return item.revenue
            })
            setStateTitle("revenue")
            SetStatsDaily(value)
        }else{
            const value = stats.statsDaily.map((item) => {
                return item.impressions
            })
            setStateTitle("impressions")
            SetStatsDaily(value)
        }
        
    };

    useEffect(() => {
        getDailyState();
        getDailyEvent();
        setTitle("Charts")
        
    },[getDailyState, getDailyEvent])

    useEffect(() => {
        const value = stats.statsDaily.map((item) => {
            return item.impressions
        })
        const eventValue = events.eventDaily.map((item) => {
            return item.events
        })
        SetStatsDaily(value)
        setEventDaily(eventValue)
    }, [stats.loading, SetStatsDaily, setEventDaily, events.loading])

    return (
        <div className={classes.root}>
           {!stats.loading && statsDaily.length != 0 && !events.loading && eventDaily.length != 0 ?  <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <Chart statsDaily={statsDaily} stateTitle={`Average daily stats: ${stateTitle}`}/>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Type of data</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={stateOption}
                                onChange={handleChange}
                                label="Type of data"
                            >
                            <MenuItem value="">
                                    <em>Select one</em>
                                </MenuItem>
                                <MenuItem value={10}>impressions</MenuItem>
                                <MenuItem value={20}>clicks</MenuItem>
                                <MenuItem value={30}>revenue</MenuItem>
                            </Select>
                </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                      <Chart statsDaily={eventDaily} stateTitle={`Average daily events`}/>
                    </Paper>
                </Grid>
            </Grid>:
            <div>
                Loading
                
                </div>}
        </div>
    )
}
const mapStateToProps = state => ({
    stats: state.stats,
    events: state.event
})
export default connect(mapStateToProps, {getDailyState, getDailyEvent})(Charts)
