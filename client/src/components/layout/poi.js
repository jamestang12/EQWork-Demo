import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getPoi} from '../../actions/poi'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import poi from '../../reducers/poi';

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

    useEffect(() => {
        setTitle("POI")
        getPoi()
    },[])

    console.log(pois)
    useEffect(() => {
        setPoi(pois.poi)
    },[pois.loading])

    return (
        <div className={classes.root}>
            {!pois.loading && poiItem.length != 0? 
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>

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