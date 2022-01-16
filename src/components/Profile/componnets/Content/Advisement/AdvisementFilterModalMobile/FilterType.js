import React, { forwardRef } from "react";
import useStyles from "./StyleFilterItem";
import {
  Dialog,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const FilterType = ({ handleClose, handelChange, value }) => {
  const classes = useStyles();

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      TransitionComponent={Transition}
      classes={{
        paper: classes.filterItemContent,
      }}
    >
      <Divider className={classes.headerDivider} />
      <div className={classes.headerWrapper}>
        <ArrowForwardIcon onClick={handleClose} />
        <p>نوع تماس</p>
      </div>
      <RadioGroup
        aria-label="gender"
        name="fromTo"
        value={value}
        onChange={handelChange}
        className={classes.radioBottom}
      >
        <FormControlLabel value="all" control={<Radio />} label="همه" />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="تماس ورودی"
        />
        <FormControlLabel value="true" control={<Radio />} label="تماس خروجی" />
      </RadioGroup>
    </Dialog>
  );
};

export default FilterType;
