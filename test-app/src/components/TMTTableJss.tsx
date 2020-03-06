import * as React from 'react'

interface TMTTableProps {
    rows: number,
    columns: number,
    headers: string[]
}
export const tablestyle = (color: string) => <style jsx>{`
                    table {
                      border: solid 1px;
                      background-color: ${color};
                      padding: 0px 3px 2px 5px;
                    }
                 `}</style>;

export default class TMTTableJss extends React.Component<TMTTableProps, any> {
    validHeaders: string[];

    constructor(props: TMTTableProps) {
        super(props);
        this.validHeaders = props.headers.slice(0, props.columns);
    }

    render() {

        return (
            <table>
                {tablestyle('red') }
                <tr>
                    {this.validHeaders.map(header =>
                        <th>{header}</th>
                    )}
                </tr>
            </table>
        )
    }
}
