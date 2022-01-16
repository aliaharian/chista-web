import React from "react";
import jMoment from "moment-jalaali";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import JalaliUtils from "@date-io/jalaali";
import { InputAdornment } from "@material-ui/core";
import Icon from "../Icon/Icon";
import { makeStyles } from "@material-ui/styles";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(213, 223, 235, 0.22)",
    "& fieldset": { display: "none" },
    height: 56,
    fontSize: 15,
    fontFamily: theme.font.regular,
    borderRadius: 13,
  },
}));
function JDatePicker(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    icon,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;
  const classes = useStyles();

  function handleDateChange(date) {
    if (date.toString().length > 10) {
      return Math.floor(new Date(date).getTime() / 1000);
    }
    return date;
  }
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils}>
      <DatePicker
        {...rest}
        okLabel="تأیید"
        label={""}
        style={{
          margin: "2px 0",
          padding: "0 8px",
          height: 56,
          background: "none",
        }}
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        name={name}
        InputLabelProps={{ shrink: false }}
        helperText={showError ? meta.error || meta.submitError : undefined}
        error={showError}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ display: "flex", height: "auto" }}
            >
              <Icon src={icon} style={{ height: "20px" }} />
            </InputAdornment>
          ),
          className: classes.root,
          restInput,
        }}
        onChange={onChange}
        value={value === "" ? null : jMoment.unix(handleDateChange(value))}
        format={"jDD jMMMM jYYYY"}
        variant="outlined"
        fullWidth
      />
    </MuiPickersUtilsProvider>
  );
}

export default JDatePicker;
