import * as React from 'react'
import styled from "styled-components";

type TableProps = {
    tableName: string,
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
            <caption>{props.tableName}</caption>
            <tbody>
                <tr key={"header"}>
                    {validHeaders.map(header => {
                        return <th key={header}>{header}</th>
                    })}
                </tr>
                {props.data.map((row, index) => {
                    return <tr key={index}>
                        {row.map(column => {
                            return <td key={column}>{column}</td>
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
