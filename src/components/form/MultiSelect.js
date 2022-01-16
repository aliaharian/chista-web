import React from "react"
import { TextField, InputAdornment } from "@material-ui/core"
import Icon from "../Icon/Icon";
import { makeStyles } from "@material-ui/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(213, 223, 235, 0.22)", '& fieldset': { display: 'none' }, height: 56, fontSize: 15, fontFamily: theme.font.regular, borderRadius: 13
  },
  subRoot: {
    backgroundColor: 'none',
    padding: "0 8px",
  },
  tag: {
    '& .MuiChip-deletable':{
      overflow: "hidden"
    }
  }
}));
const MultiSelect = ({
  input,
  label,
  options,
  meta: { touched, error },
  icon,
  defaultValue,
  value,
  ref,
  ...custom
}) => {

  const classes = useStyles();
  return (
    <Autocomplete
      ref={ref}
      fullWidth
      noOptionsText={''}
      limitTags={1}
      options={options}
      getOptionLabel={(option) => option.name}
      defaultValue={defaultValue}
      value={value}
      debug={true}
      blur={false}
      multiple
      onChange={(e, newValue) => { input.onChange(newValue) }}
      renderInput={(params) =>
        <TextField
          {...params} InputProps={{
            ...params.InputProps,
            startAdornment: (
              <div style={{
                display: "flex",
                alignItems: "center",
                overflowY: "hidden",
                overflowX: "auto",
              }} className={classes.tag}>
                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                  <Icon src={icon} />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </div>
            ), className: [classes.root].join(' ')
          }} className={classes.subRoot} variant="outlined" />}
      margin="dense"
      variant="outlined"
      {...custom}
    />
  )
}

export default MultiSelect
