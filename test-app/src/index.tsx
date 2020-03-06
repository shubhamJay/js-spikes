import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from "./HelloWorld";
import TMTTable from "./components/TMTTable";
import StyledTMTTable from "./components/StyledTMTTable";


ReactDOM.render(
    <div>
        <HelloWorld name={"TMT"}/>
        <TMTTable rows={7} columns={5} headers={["subsystem", "state", "health", "activity", "heartbeat"]}/>,
        <StyledTMTTable rows={7} columns={5} headers={["subsystem", "state", "health", "activity", "heartbeat"]}/>,
    </div>,

    document.getElementById('root')
);
