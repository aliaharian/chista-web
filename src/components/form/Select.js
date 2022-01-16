import React from "react"
import {TextField, MenuItem, InputAdornment} from "@material-ui/core"
import Icon from "../Icon/Icon";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "rgba(213, 223, 235, 0.22)",
        '& fieldset': {display: 'none'},
        height: 56,
        fontSize: 15,
        fontFamily: theme.font.regular,
        borderRadius: 13
    },
}));
const Select = ({
                    input,
                    label,
                    options,
                    meta: {touched, error} = false,
                    icon,
                    defaultValue=null,
                    ...custom
                }) => {

    const classes = useStyles();
    return (
        <TextField
            select
            style={{margin: '2px 0', padding: '0 8px', height: 56, background: 'none'}}
            fullWidth
            autoWidth={true}
            InputLabelProps={{shrink: false}}
            helperText={touched && error ? error : null}
            error={touched && error !== undefined}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                        <Icon src={icon}/>
                    </InputAdornment>), className: classes.root
            }}
            variant="outlined"
            defaultValue={defaultValue}
            {...input}
            {...custom}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default Select
