import * as React from "react"
import {TMTTableJssNew} from "./components/TMTTableJssNew";

interface HelloProps {
    name: String
}
export default class HelloWorld extends React.Component<HelloProps,any> {
    render(){
        return (
            <div>
                <TMTTableJssNew rows={7} columns={5} headers={["subsystem", "state", "health", "activity", "heartbeat"]} color={'red'}/>,
                <TMTTableJssNew rows={7} columns={5} headers={["subsystem", "state", "health", "activity", "heartbeat"]} color={'green'}/>,
            </div>
        )
    }
}
