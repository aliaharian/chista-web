import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './Styles'
import blackboardIcon from '../../../../../../../../../assets/images/profile/BlackboardSidebar'
import BlackboardSidebar from "../../../../../../../../../assets/images/profile/BlackboardSidebar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function JoinBeforeStart(props) {
    const classes = useStyles()


    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }
    return (
        <div className={classes.joinBeforeStartContainer}>
            <BlackboardSidebar />
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    حضور اعضا خارج از ساعت جلسه
                </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={props.value || props.items[0].value}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    IconComponent={()=><ExpandMoreIcon />}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    {
                        props.items.map((item) => (
                            <MenuItem style={{fontSize:13}} value={item.value}>{item.text}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}

export default JoinBeforeStart