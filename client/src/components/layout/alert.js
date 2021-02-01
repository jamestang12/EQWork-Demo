import React from "react";
import { connect } from "react-redux";
import Alert from '@material-ui/lab/Alert';


const Alerts = ({ alerts }) =>

  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} >
      
      <Alert severity="error">{alert.msg}</Alert>

    </div>
  ));

const mapStateToPros = (state) => ({
  alerts: state.alert, //from root reducers folder index.js
});

export default connect(mapStateToPros)(Alerts);

