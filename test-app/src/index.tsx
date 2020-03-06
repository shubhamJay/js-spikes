import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TMTTable from "./components/TMTTable";

ReactDOM.render(
    <TMTTable rows={7} columns={5} headers={["subsystem", "state", "health", "activity", "heartbeat"]}/>,
    document.getElementById('root')
);
