import React from "react"
import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(213, 223, 235, 0.22)", '& fieldset': { display: 'none' }, height: 179, fontSize: 15, fontFamily: "chistaYekanR", borderRadius: 13
  },
  tal: { '& input': { textAlign: 'right !important' } }
}));

const ChistaTextArea = ({
  input,
  label,
  meta: { touched, error },
  placeholder,
    icon,
    tal,
    maxLength,
    minLength,
   endAdropment,
  ...custom
}) => {
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      className={classes.root}
      style={{ margin:'2px 0',padding:'0 8px'}}
      helperText={touched && error ? error : null}
      inputProps={{ maxLength: maxLength, minLength: minLength }}
      rows={3}
      multiline={true}
      error={touched && error !== undefined}
      margin="dense"
      InputLabelProps={{shrink: false}}
      variant="outlined"
      {...input}
      {...custom}
    />
  )
}

export default ChistaTextArea
