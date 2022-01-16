import React, {useRef} from "react"
import {TextField} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles";
import {numberFormat} from "../../utilities";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        direction: "rtl",
        marginTop: 66,
    },
    textField: {
        backgroundColor: "rgba(189, 200, 214, 0.05)",
        border: "1px solid rgba(189, 200, 214, 0.28)",
        borderRadius: 13
    },
    input: {
        width: "56px !important",
        height: "56px !important",
        fontFamily: 'chistaYekanR',
        margin: '0 12px',
        fontSize: 20,
        color: '#536b88',
        backgroundColor: "rgba(189, 200, 214, 0.05)",
        '& fieldset': {
            border: "1px solid transparent !important",
            borderRadius: "8px !important",
        },
        '& div': {
            backgroundColor: '#f5f8fa',
            borderRadius:8,
            '& .MuiInputBase-input':{
                borderRadius:'8px',
                '&:focus': {
                    '& fieldset': {
                        outline: 'none',
                        border: "1px solid rgba(189, 200, 214, 1) !important",
                    }
                },
                '&:active': {
                    '& fieldset': {
                        outline: 'none',
                        border: "1px solid rgba(189, 200, 214, 1) !important",
                    }
                }
            },
            '&:hover': {
                '& fieldset': {
                    outline: 'none',
                    border: "1px solid rgba(189, 200, 214, 1) !important",
                },
            },
            '&:focus': {
                '& fieldset': {
                    outline: 'none',
                    border: "1px solid rgba(189, 200, 214, 1) !important",
                }
            },
            '&:active': {
                '& fieldset': {
                    outline: 'none',
                    border: "1px solid rgba(189, 200, 214, 1) !important",
                }
            }
        }
    },
    filled:{
        backgroundColor: "#fff",
        '& fieldset': {
            border: "1px solid rgba(189, 200, 214, 1) !important",
            borderRadius: "8px !important",
        },
        '& div': {
            backgroundColor: '#fff',
        }
    }
}));
const VerifyText = ({
                        input,
                        label,
                        submit,
                        meta: {touched, error},
                        placeholder,
                        ...custom
                    }) => {

    const classes = useStyles();

    const refV1 = useRef();
    const refV2 = useRef();
    const refV3 = useRef();
    const refV4 = useRef();

    function handleChange(event) {
        let refsMap = [refV1, refV2, refV3, refV4]
        event.target.value = numberFormat.toPersianDigits(event.target.value)

        let newstate = {
            ...{
                v0: input.value.length >= 1 ? input.value.slice(0, 1) : '',
                v1: input.value.length >= 2 ? input.value.slice(1, 2) : '',
                v2: input.value.length >= 3 ? input.value.slice(2, 3) : '',
                v3: input.value.length >= 4 ? input.value.slice(3, 4) : ''
            }, ['v' + event.target.name]: event.target.value
        }
        let nValue = Object.values(newstate).join('')
        input.onChange(nValue);
        if (nValue.length === 4) {
            setTimeout(() => {
                submit()
            }, 500)
        }

        if (event.target.name < 3) 
            refsMap[parseInt(event.target.name) + 1].current.focus();
    }

    return (
        <div className={classes.root}>
            <TextField className={clsx(classes.input,input.value.length >= 1 && classes.filled)} InputLabelProps={{shrink: false}} variant="outlined"
                       error={touched && error !== undefined} name="0"
                       inputProps={{maxLength: 1, name: "0", style: {textAlign: "center", required: true}, ref: refV1}}
                       value={input.value.length >= 1 ? input.value.slice(0, 1) : ''} placeholder="-"
                       onChange={handleChange}/>
            <TextField className={clsx(classes.input,input.value.length >= 2 && classes.filled)} InputLabelProps={{shrink: false}} variant="outlined"
                       error={touched && error !== undefined} name="1"
                       inputProps={{maxLength: 1, name: "1", style: {textAlign: "center", required: true}, ref: refV2}}
                       maxLength={1} value={input.value.length >= 2 ? input.value.slice(1, 2) : ''} placeholder="-"
                       onChange={handleChange}/>
            <TextField className={clsx(classes.input,input.value.length >= 3 && classes.filled)} InputLabelProps={{shrink: false}} variant="outlined"
                       error={touched && error !== undefined} name="2"
                       inputProps={{maxLength: 1, name: "2", style: {textAlign: "center", required: true}, ref: refV3}}
                       maxLength={1} value={input.value.length >= 3 ? input.value.slice(2, 3) : ''} placeholder="-"
                       onChange={handleChange}/>
            <TextField className={clsx(classes.input,input.value.length >= 4 && classes.filled)} InputLabelProps={{shrink: false}} variant="outlined"
                       error={touched && error !== undefined} name="3"
                       inputProps={{maxLength: 1, name: "3", style: {textAlign: "center", required: true}, ref: refV4}}
                       maxLength={1} value={input.value.length >= 4 ? input.value.slice(3, 4) : ''} placeholder="-"
                       onChange={handleChange}/>
        </div>
    )
}

export default VerifyText
