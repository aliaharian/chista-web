import React from "react";
import {
  InputLabel,
  InputAdornment,
  Input,
  Select,
  MenuItem,
  Icon,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import JalaliUtils from "@date-io/jalaali";
import useStyles from "./Styles";
import errorIcon from "../../../../../../../assets/images/warning.svg";
import clsx from "clsx";

const CalendarForm = ({
  name,
  icon,
  label,
  formik,
  className,
  required = false,
}) => {
  const classes = useStyles();
  const {
    values,
    handleChange,
    touched,
    errors,
    setFieldValue,
    normalize,
  } = formik;

  const customOnchange = (e) => {
    if (normalize) {
      setFieldValue(e.target.name, normalize(e.target.value));
      return;
    }
    setFieldValue(name, e);
  };

  return (
    <div
      className={clsx(
        classes.inputWrapper,
        classes.calendarWrapper,
        className ? className : "",
        errors[name] && classes.errorWrapperCalendar
      )}
    >
      <InputLabel
        htmlFor={name}
        className={clsx(required ? classes.inputLabelRequired : "")}
      >
        {label}
      </InputLabel>
      <MuiPickersUtilsProvider utils={JalaliUtils}>
        <DatePicker
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={icon} alt={name} />
              </InputAdornment>
            ),
            className: classes.root,
          }}
          value={values[name] === "" ? null : values[name]}
          format={"jDD jMMMM jYYYY"}
          onChange={customOnchange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </MuiPickersUtilsProvider>
      {errors[name] && touched[name] && (
        <p className={classes.errorMessage}>
          <img src={errorIcon} alt="" />
          <span>{errors[name]}</span>
        </p>
      )}
    </div>
  );
};

export default CalendarForm;
