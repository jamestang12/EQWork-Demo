import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getDailyState} from '../../actions/state'
import Chart from '../chart'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Charts = ({getDailyState, stats,setTitle }) => {
    const classes = useStyles();

    useEffect(() => {
        getDailyState();
        setTitle("Charts")
    },[])
   
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <Chart/>

                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Chart/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
const mapStateToProps = state => ({
    stats: state.stats
})
export default connect(mapStateToProps, {getDailyState})(Charts)
