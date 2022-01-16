import React, { memo } from "react";
import { InputLabel, InputAdornment, Input } from "@material-ui/core";
import useStyles from "./Styles";
import clsx from "clsx";
import errorIcon from "../../../../../../../assets/images/warning.svg";

const InputForm = ({
  name,
  icon,
  label,
  formik,
  normalize,
  className,
  constValue = "",
  required = false,
}) => {
  const { values, handleChange, touched, errors, setFieldValue } = formik;
  const classes = useStyles();

  const customOnchange = (e) => {
    if (name === "sheba" && e.target.value.length > 29) return;
    if (normalize) {
      setFieldValue(e.target.name, `${normalize(e.target.value)}`);
      return;
    }
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div
      className={clsx(
        classes.inputWrapper,
        className ? className : "",
        constValue ? classes.constValueWrapper : "",
        errors[name] && classes.errorWrapper
      )}
    >
      <InputLabel
        htmlFor={name}
        className={clsx(required ? classes.inputLabelRequired : "")}
      >
        {label}
      </InputLabel>
      <Input
        value={values[name]}
        onChange={customOnchange}
        name={name}
        disableUnderline={true}
        id={name}
        classes={{ root: classes.inputRoot }}
        startAdornment={
          <InputAdornment position="start">
            <span className={classes.constValue}>{constValue}</span>
            <img src={icon} alt="user icon" />
          </InputAdornment>
        }
      />
      {errors[name] && touched[name] && (
        <p className={classes.errorMessage}>
          <img src={errorIcon} alt="" />
          <span>{errors[name]}</span>
        </p>
      )}
    </div>
  );
};

export default memo(InputForm);
