import * as React from 'react'
import styled from 'styled-components'

let Table = styled.table`
    border-collapse: collapse;
    color: green;
`

let Th = styled.th`
   border: 1px solid;
   :hover {
    color: red;
    }
`

interface TMTTableProps {
    rows: number,
    columns: number,
    headers: string[]
}

export default class StyledTMTTable extends React.Component<TMTTableProps, any> {
    validHeaders: string[];

    constructor(props: TMTTableProps) {
        super(props);
        this.validHeaders = props.headers.slice(0, props.columns);
    }

    render() {
        return (
            <Table color={"green"}>
                <tr>
                    {this.validHeaders.map(header =>
                        <Th>{header}</Th>
                    )}
                </tr>
            </Table>
        )
    }
}
