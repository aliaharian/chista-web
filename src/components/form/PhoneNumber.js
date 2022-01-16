import React from "react"
import {TextField, InputAdornment, useMediaQuery} from "@material-ui/core"
import MobileIcon from '../../assets/images/MobileIcon'
import {useTheme} from "@material-ui/core/styles";

const Text = ({
                  input,
                  label,
                  meta: {touched, error} = true,
                  placeholder,
                  ...custom
              }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <TextField
            fullWidth
            style={{marginBottom: 5, marginTop: 8}}
            helperText={touched && error ? error : null}
            error={touched && error !== undefined}
            margin="dense"
            InputLabelProps={{shrink: false}}
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" style={{display: "flex", height: "auto"}}>
                        <MobileIcon style={{height: "20px", marginLeft: 7}}/>
                    </InputAdornment>),
                style: {
                    direction: 'ltr',
                    height: isMobile ? 48 : 56,
                    fontSize: 15,
                    fontFamily: "chistaYekanR",
                    borderRadius: 8
                }
            }}
            {...input}
            {...custom}
        />
    )
}

export default Text
