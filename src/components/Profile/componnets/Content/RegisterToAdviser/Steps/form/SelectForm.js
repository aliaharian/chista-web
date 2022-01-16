import React, { memo } from "react";
import {
  InputLabel,
  InputAdornment,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";
import errorIcon from "../../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import clsx from "clsx";

const SelectForm = ({
  name,
  icon,
  label,
  formik,
  options,
  handleChange,
  required = false,
}) => {
  const classes = useStyles();
  const { values, touched, errors, setFieldValue } = formik;

  const customOnchange = (e) => {
    handleChange && handleChange(e);
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div className={classes.inputWrapper}>
      <InputLabel
        htmlFor={name}
        className={clsx(
          required ? classes.inputLabelRequired : "",
          classes.selectForm
        )}
      >
        {label}
      </InputLabel>
      <Select
        labelId={name}
        id={name}
        value={values[name]}
        name={name}
        onChange={customOnchange}
        startAdornment={
          <InputAdornment position="start">
            <img src={icon} alt="user icon" />
          </InputAdornment>
        }
      >
        {options.length > 0 &&
          options.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.title}
            </MenuItem>
          ))}
      </Select>
      {errors[name] && touched[name] && (
        <p className={classes.errorMessage}>
          <img src={errorIcon} alt="" />
          <span>{errors[name]}</span>
        </p>
      )}
    </div>
  );
};

export default memo(SelectForm);
