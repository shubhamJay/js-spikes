import React from 'react';
import ReactDOM from 'react-dom';
import {Subsystems} from "./components/Subsystem";
import {MSubsystems} from "./material/SubsystemMaterial";

const App = <div>
    <Subsystems/>
    <MSubsystems/>
</div>

ReactDOM.render(App, document.getElementById('root'));
