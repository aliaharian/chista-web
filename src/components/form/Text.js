import React from "react"
import {TextField} from "@material-ui/core"

const Text = ({
                  input,
                  label,
                  meta: {touched, error},
                  placeholder,
                  disabled=false,
                  ...custom
              }) => {

    return (
        <TextField
            fullWidth
            style={{marginBottom: 5, marginTop: 8}}
            helperText={touched && error ? error : null}
            placeholder={label}
            error={touched && error !== undefined}
            margin="dense"
            variant="outlined"
            value={'sssss'}
            disabled={disabled}
            onChange={(e) => {
            }}
            {...input}
            {...custom}
        />
    )
}

export default Text
