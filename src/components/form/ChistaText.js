import React from "react"
import {TextField, InputAdornment, Typography} from "@material-ui/core"
import Icon from "../Icon/Icon";
import {makeStyles} from "@material-ui/styles";

const useStyles= makeStyles(theme => ({
    root:{
        backgroundColor:"rgba(213, 223, 235, 0.22)",'& fieldset':{display:'none'},height:56,fontSize:15,fontFamily:"chistaYekanR",borderRadius:13
    },
    tal:{'& input':{textAlign:'right !important'}}
}));

const ChistaText = ({
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

  const classes=useStyles();
  return(
    <TextField
      fullWidth
      className={classes.root}
      style={{ margin:'2px 0',padding:'0 8px',height:56 ,background: 'none'}}
      helperText={touched && error ? error : null}
      inputProps={{ maxLength: maxLength, minLength: minLength }}
      error={touched && error !== undefined}
      InputLabelProps={{shrink: false}}
      variant="outlined"
      InputProps={{startAdornment:(
          <InputAdornment position="start" style={{display:"flex",height:"auto"}}>
              <Icon src={icon} />
          </InputAdornment>),
              className:[classes.root,tal?classes.tal:''].join(' '),endAdornment:(
              endAdropment?<Typography style={{fontFamily:'yekan',fontSize:13,color:''}}>{endAdropment}</Typography>:'')
      }}
      {...input}
      {...custom}
    />
  )
}

export default ChistaText
