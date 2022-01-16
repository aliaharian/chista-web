import React from "react"
import {TextField, MenuItem} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding:'0!important',
        '& fieldset': {display: 'none'}, height: 56, fontSize: 15, fontFamily: theme.font.regular, borderRadius: 13
        , '& .MuiOutlinedInput-input': {
            padding: '0!important'
        }
        ,
        '& .MuiSelect-select:focus': {
            backgroundColor: 'none!important',
            boxShadow: '300px 300px #fff inset'
        }
    },
}));
const AdviserProfileSelect = ({
                                  input,
                                  label,
                                  options,
                                  meta: {touched, error},
                                  icon,
                                  open,
                                  closeSelectProp,
                                  ...custom
                              }) => {

    const classes = useStyles();
    const closeSelect = () => {
        closeSelectProp()
    }

    return (
        <TextField
            select
            style={{margin: '2px 0', padding: '0', height: 18, background: 'none'}}
            fullWidth
            id={`selectProvince`}
            autoWidth={true}
            InputLabelProps={{shrink: false}}
            helperText={touched && error ? error : null}
            error={touched && error !== undefined}
            InputProps={{
                className: classes.root
            }}
            SelectProps={{
                IconComponent: (() => <></>),
                open: open,
                native: false,
                onClose: (closeSelect),
                onBlur: (closeSelect),
            }}
            variant="outlined"
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

export default AdviserProfileSelect
