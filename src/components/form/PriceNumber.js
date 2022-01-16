import React from "react"
import {TextField, InputAdornment, Typography} from "@material-ui/core"

const Text = ({
                  input,
                  label,
                  classInput,
                  handleChange,
                  meta: {touched, error},
                  placeholder,
                  ...custom
              }) => (

    <TextField
        fullWidth
        style={{marginBottom: 5, marginTop: 8, height: 80}}
        helperText={touched && error ? error : null}
        error={touched && error !== undefined}
        margin="dense"
        InputLabelProps={{shrink: false}}
        variant="outlined"
        InputProps={{
            inputProps: { maxLength: 7, className:classInput},
            startAdornment: (
                <InputAdornment position="start" style={{display: "flex", height: "auto", marginLeft: 27,}}>
                    <Typography style={{color: '#1641ff', fontSize: '13px'}}>{label}</Typography>
                </InputAdornment>), style: {
                direction: 'ltr',
                height: 56,
                fontFamily: "chistaYekanR",
                borderRadius: 18,
                fontSize: '19px',
                textAlign: 'center',
                color: '#1a172d',
                fontWeight: 'bold',
                border: 'solid 1px rgba(189, 200, 214, 0.3'
            },

        }}
        {...input}
        {...custom}
    />
)

export default Text
