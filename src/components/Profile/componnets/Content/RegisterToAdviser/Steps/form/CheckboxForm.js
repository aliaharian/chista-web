import React, { memo } from "react";
import {
  InputLabel,
  InputAdornment,
  Input,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import useStyles from "./Styles";
import clsx from "clsx";
import errorIcon from "../../../../../../../assets/images/warning.svg";

const CheckboxForm = ({
  name,
  icon,
  label,
  formik,
  normalize,
  className,
  constValue = "",
}) => {
  const { values, handleChange, touched, errors, setFieldValue } = formik;
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.checkboxWrapper,
        className ? className : "",
        errors[name] && classes.errorWrapper
      )}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={values[name]}
            onChange={handleChange}
            name={name}
          />
        }
        label={label}
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

export default memo(CheckboxForm);
