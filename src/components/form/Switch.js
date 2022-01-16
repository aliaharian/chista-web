import React from "react"
import {Switch} from "@material-ui/core"
import useStyles from "./Style";
import clsx from "clsx";

const Switch2 = ({value, label , onChange , disabled , className}) => {
    const classes = useStyles();
    return (
        <>
            <span className={classes.switchLabel}>{label}</span>
            <div className={classes.switchButton}>
                <Switch
                    className={clsx(classes.switchContainer , className)}
                    checked={value}
                    onChange={onChange}
                    name="switch"
                    color="primary"
                    style={disabled?{pointerEvents:'none'}:{}}
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </div>
        </>
    )
}

export default Switch2
