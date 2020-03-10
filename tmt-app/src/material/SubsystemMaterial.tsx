import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ACTIVITY, HEALTH, STATE, SUBSYSTEMS} from "../constants/constants";
import {Grid} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";


const rows = [
    [SUBSYSTEMS.INSTRUMENT_SEQUENCER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.BUSY, Math.random().toString()],
    [SUBSYSTEMS.COMPONENTS_CONTROLLER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
    [SUBSYSTEMS.DETECTOR_CONTROLLER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.IDLE, Math.random().toString()],
    [SUBSYSTEMS.INSTRUMENT_SEQUENCER_GMOS, STATE.CONFIGURING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
    [SUBSYSTEMS.COMPONENTS_CONTRLLER_GMOS, STATE.CONFIGURING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
    [SUBSYSTEMS.MASK_ASSEMBLY_GMOS, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.BUSY, Math.random().toString()],
    [SUBSYSTEMS.CALIBRATION_UNIT_GCAL, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()]
];

export const MSubsystems = () => {
    const headers = ["Subsystems", "State", "Health", "Activity", "Heartbeat"]
    return (
        <Grid container item md={6}>
        <Paper>
            <Table size="small" title={"SUBSYSTEMS"} aria-label="a dense table" className="highlight">
                <TableHead background-color={grey}>
                    <TableRow key={"header"}>
                        {headers.map(header => (
                            <TableCell key={header}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {row.map(column => (
                                <TableCell key={column}>{column}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
        </Grid>
    );
};
