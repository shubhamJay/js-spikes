import * as React from "react"

interface HelloProps {
    name: String
}
export default class HelloWorld extends React.Component<HelloProps,any> {
    render(){
        return <h1>hello world from {this.props.name}</h1>
    }
}
