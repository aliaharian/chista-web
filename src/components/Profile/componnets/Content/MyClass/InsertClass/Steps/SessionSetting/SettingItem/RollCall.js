import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './Styles'
import blackboardIcon from '../../../../../../../../../assets/images/profile/BlackboardSidebar'
import presentIcon from "../../../../../../../../../assets/images/presentIcon.svg";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch2 from "../../../../../../../../form/Switch";

function RollCall(props) {
    const classes = useStyles()
    return (
        <div className={classes.rollCallContainer} onClick={() => {
            props.handleChange(!props.value)
        }}>
            <div>
                <img src={presentIcon} alt=""/>
                <p>حضور و غیاب هوشمند</p>
            </div>
            <div>
                <Switch2 value={props.value} onChange={() => {
                    props.handleChange(!props.value)
                }}/>
            </div>
        </div>
    )
}

export default RollCall