import * as React from 'react'
import styled from "styled-components";

type TableProps = {
    rows: number,
    columns: number,
    headers: string[],
    className?: string,
    data: string[][]
}

const Table = (props: TableProps) => {
    let validHeaders = props.headers.slice(0, props.columns)
    return (
        <table className={props.className}>
            <tbody>
                <tr>
                    {validHeaders.map(header => {
                        return <th>{header}</th>
                    })}
                </tr>
                {props.data.map((row) => {
                    return <tr>
                        {row.map(column => {
                            return <td>{column}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
};

export const TMTTable = styled(Table)`
 table, td, th {  
  border: 1px solid;
  text-align: left;
}
th {
  background-color: gray;
}
`;
