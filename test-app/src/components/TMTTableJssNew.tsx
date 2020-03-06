import * as React from 'react'
import {createUseStyles} from 'react-jss';

interface TMTTableProps {
    rows: number,
    columns: number,
    headers: string[],
    color: String
}

const useStyles = createUseStyles({
    myTable: (props: TMTTableProps)  => ({
        color: props.color,
        backgroundColor: 'white'
    })
})

export const TMTTableJssNew = (props: TMTTableProps) => {
    const validHeaders = props.headers.slice(0, props.columns);
    const classes = useStyles(props)

    return (
        <table className={classes.myTable}>

            <tr>
                {validHeaders.map(header =>
                    <th>{header}</th>
                )}
            </tr>
        </table>
    )

}
