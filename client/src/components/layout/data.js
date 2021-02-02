import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getHourlyState} from '../../actions/state'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tables from '../table'
import Search from '../search'

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

const Data = ({setTitle, getHourlyState, stats, events}) => {
    const classes = useStyles();
    const [statsHouly, setStatsHouly] = useState([])
    const onSearch = (e) => {
        console.log(e.target.value)
    }
    useEffect(() => {
        setTitle("Data")
        getHourlyState()
    },[])

    useEffect(() => {
        setStatsHouly(stats.stateHourly)
    },[stats.loading])
    return (
        <div className={classes.root}>
          {!stats.loading && statsHouly.length != 0? 
              <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Search/>
                    <div style={{marginTop: "20px"}}>
                        <Tables dataValue={statsHouly} orgValue={stats.stateHourly} currentValue={statsHouly} setCurrentValue={setStatsHouly}/>
                    </div>            
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
    stats: state.stats,
    events: state.event
})

export default connect(mapStateToProps, {getHourlyState})(Data)
