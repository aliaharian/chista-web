import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        '&>.MuiSwitch-switchBase': {
            top: 1
        },
        '&>.Mui-disabled': {
            backgroundColor: 'transparent' + '!important',
            border: 'none' + '!important'
        },
        '&>span>span>.MuiSwitch-thumb': {
            width: 18,
            height: 18,
            backgroundColor: 'white',
            border: '2px solid #cdccd7'
        },
        '&>.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#3f53d9',
            opacity: 1,
        },
        '&>.Mui-checked': {
            '&>.MuiIconButton-label>.MuiSwitch-thumb': {
                border: '2px solid #3f53d9'
            }
        },
        '&>.MuiSwitch-track': {
            width: 30,
            height: 14,
            borderRadius: 9,
            backgroundColor: '#cdccd7'
        }
    }
}))

function ChistaSwitch({...props}) {
    const classes = useStyles();
    return (
            <FormGroup dir='ltr'>
                <FormControlLabel 
                    control={
                        <Switch
                        classes={{
                            root: classes.root,
                        }}
                        checked={props.checked} 
                        disabled={props.disabled} 
                        onChange={props.onChange}
                        />
                    } 
                    label={typeof props.label !=='undefined' ? props.label : ''} 
                />
            </FormGroup>
    )
}

export default ChistaSwitch;