import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableChartIcon from '@material-ui/icons/TableChart';
import MapIcon from '@material-ui/icons/Map';

const ListItems = ({}) => {
 

  return(
        <div>
            <ListItem button  component="a" href="/">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
            </ListItem>
            <ListItem button  component="a" href="/data">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Data" />
            </ListItem>
            <ListItem button  component="a" href="/poi">
            <ListItemIcon>
                <MapIcon />
            </ListItemIcon>
            <ListItemText primary="POI" />
            </ListItem>
    </div>
  )
}

export default ListItems



