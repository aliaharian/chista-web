import React from "react";
import {
  InputLabel,
  InputAdornment,
  Input,
  Select,
  MenuItem,
  Icon, Slide, Dialog,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import JalaliUtils from "@date-io/jalaali";
import useStyles from "./Styles";
import errorIcon from "../../../../assets/images/warning.svg";
// import Calendar from 'material-ui/lib/date-picker/calendar';


import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";
import {numberFormat} from "../../../../utilities";

function Transition(props) {
  return <Slide direction="up" {...props} />
}

function ToolbarComponent(props) {
  return <div>hello</div>
}

const CalendarForm = ({
  name,
  icon,
  label,
  formik,
  className,
    noPadding = false,
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
      setFieldValue(e.target.name, numberFormat.toPersianDigits(normalize(e.target.value)));
      return;
    }

    setFieldValue(name, e);
  };
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  console.log(values[name])
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
            padding: noPadding?"0":"0 8px",
            height: 56,
            background: "none",
          }}
          cancelLabel="لغو"
          clearLabel="پاک کردن"
          DialogProps={{
            fullScreen:isMobile,
            TransitionComponent:(Transition),
            transition:'slide'
          }}
          name={name}
          InputLabelProps={{ shrink: false }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={icon} alt={name} />
              </InputAdornment>
            ),
            className: classes.root,
            inputProps:{
              style:{
                fontFamily:'montar'
              }
            }

          }}
          value={values[name] === "" ? null : values[name]}
          format={"jDD jMMMM jYYYY"}
          onChange={customOnchange}
          margin="dense"
          ToolbarComponent={ToolbarComponent}
          // renderDay={()=>{return(<div>hello</div>)}}
        />
      </MuiPickersUtilsProvider>
      {errors[name] && touched[name] && (
        <p className={classes.errorMessage}>
          {/*<img src={errorIcon} alt="" />*/}
          <span>{errors[name]}</span>
        </p>
      )}
    </div>
  );
};

export default CalendarForm;
