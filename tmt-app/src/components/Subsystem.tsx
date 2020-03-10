import * as React from 'react'
import {TMTTable} from "./Table";
import {ACTIVITY, HEALTH, STATE, SUBSYSTEMS} from "../constants/constants";

export const Subsystems = () => {
    return (
        <TMTTable
            columns={5}
            rows={5}
            headers={["Subsystem", "State", "Health", "Activity", "Heartbeat"]}
            data={[
                [SUBSYSTEMS.INSTRUMENT_SEQUENCER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.BUSY, Math.random().toString()],
                [SUBSYSTEMS.COMPONENTS_CONTROLLER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
                [SUBSYSTEMS.DETECTOR_CONTROLLER, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.IDLE, Math.random().toString()],
                [SUBSYSTEMS.INSTRUMENT_SEQUENCER_GMOS, STATE.CONFIGURING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
                [SUBSYSTEMS.COMPONENTS_CONTRLLER_GMOS, STATE.CONFIGURING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()],
                [SUBSYSTEMS.MASK_ASSEMBLY_GMOS, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.BUSY, Math.random().toString()],
                [SUBSYSTEMS.CALIBRATION_UNIT_GCAL, STATE.RUNNING, HEALTH.GOOD, ACTIVITY.MOVING, Math.random().toString()]
            ]}
        />
    )
}
