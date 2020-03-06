import * as React from 'react'

interface TMTTableProps {
    rows: number,
    columns: number,
    headers: string[]
}

export default class TMTTable extends React.Component<TMTTableProps, any> {
    validHeaders: string[];

    constructor(props : TMTTableProps) {
        super(props);
        this.validHeaders = props.headers.slice(0, props.columns);
    }

    render() {
        return (
            <table>
                <tr>
                    {this.validHeaders.map(header =>
                        <th>{header}</th>
                    )}
                </tr>
            </table>
        )
    }
}
