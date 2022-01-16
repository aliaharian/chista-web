import React, { useState } from "react";
import AdvisementDesktop from "../AdvisementDesktop";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./StylesFilterModalDesktop";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import JalaliUtils from "@date-io/jalaali";
import Icon from "../../../../../Icon/Icon";
import jMoment from "moment-jalaali";
import DateRangeIcon from "@material-ui/icons/DateRange";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
  TextField,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { JDatePicker } from "../../../../../form";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import { useDispatch } from "react-redux";
import { getAdvisementList } from "../../../../../../../redux/adviserDashboard/Actions";
import CloseIcon from "@material-ui/icons/Close";

const AdvisementFilterModalDesktop = ({
  closeModal,
  handelSetFilterValue,
  filterValues,
}) => {
  const Dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterValue, setFilterValue] = useState(filterValues);

  const handleChange = (e) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };

  const handelSubmit = () => {
    Dispatch(
      getAdvisementList(
        false,
        {
          fromTo: filterValue.fromTo === "all" ? "" : filterValue.fromTo,
          success: filterValue.success === "all" ? "" : filterValue.success,
          fromTime: filterValue.fromTime
            ? jMoment(filterValue.fromTime).unix()
            : "",
          toTime: filterValue.toTime ? jMoment(filterValue.toTime).unix() : "",
        },
        true
      )
    );
    closeModal(false);
    handelSetFilterValue(filterValue);
  };

  const handelClearForm = () => {
    setFilterValue({
      fromTo: "all",
      success: "all",
      fromTime: "",
      toTime: "",
    });
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => closeModal(false)}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.modalWrapper,
      }}
    >
      <CloseIcon
        className={classes.closeModalIcon}
        onClick={() => closeModal(false)}
      />
      <button className={classes.clearFormDesktop} onClick={handelClearForm}>
        پاک کردن
      </button>
      <DialogTitle id="responsive-dialog-title" className={classes.modalTitle}>
        محدود سازی
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText className={classes.modalSubTitle}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </DialogContentText> */}
        {/* <Divider className={classes.divider} /> */}
        <Grid container className={classes.inputWrapper}>
          <Grid item xs={6} className={classes.inputLabel}>
            <PhoneInTalkOutlinedIcon />
            <span>وضعیت تماس</span>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="success"
              select
              value={filterValue.success}
              onChange={handleChange}
              // SelectProps={{
              //   native: true,
              // }}
              variant="outlined"
              style={{ width: "100%" }}
              className={classes.input}
            >
              <option value={"true"}>تماس موفق</option>
              <option value={"false"}>تماس ناموفق</option>
            </TextField>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.inputWrapper}>
          <Grid item xs={6} className={classes.inputLabel}>
            <PhoneInTalkOutlinedIcon />
            <span>نوع تماس</span>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="fromTo"
              select
              value={filterValue.fromTo}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              className={classes.input}
            >
              <option value={"false"}>تماس های ورودی</option>
              <option value={"true"}>تماس های خروجی</option>
            </TextField>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item xs={3} className={classes.inputLabel}>
            <DateRangeIcon />
            <span>تاریخ</span>
          </Grid>
          <Grid item xs={9} className={classes.dateWrapper}>
            <MuiPickersUtilsProvider utils={JalaliUtils}>
              <span>از</span>
              <DatePicker
                // {...rest}
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
                name={"fromTime"}
                InputLabelProps={{ shrink: false }}
                // helperText={showError ? meta.error || meta.submitError : undefined}
                // error={showError}

                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ display: "flex", height: "auto" }}
                    >
                      <Icon src={""} style={{ height: "20px" }} />
                    </InputAdornment>
                  ),
                  className: classes.root,
                  // restInput,
                }}
                // onChange={onChange}
                value={
                  filterValue.fromTime === "" ? null : filterValue.fromTime
                }
                format={"jDD jMMMM jYYYY"}
                onChange={(fromTime) =>
                  setFilterValue({ ...filterValue, fromTime })
                }
                variant="outlined"
                margin="dense"
                fullWidth
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={JalaliUtils}>
              <span>تا</span>
              <DatePicker
                // {...rest}
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
                name={"toTime"}
                InputLabelProps={{ shrink: false }}
                // helperText={showError ? meta.error || meta.submitError : undefined}
                // error={showError}

                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ display: "flex", height: "auto" }}
                    >
                      <Icon src={""} style={{ height: "20px" }} />
                    </InputAdornment>
                  ),
                  className: classes.root,
                  // restInput,
                }}
                // onChange={onChange}
                value={filterValue.toTime === "" ? null : filterValue.toTime}
                format={"jDD jMMMM jYYYY"}
                onChange={(toTime) =>
                  setFilterValue({ ...filterValue, toTime })
                }
                variant="outlined"
                margin="dense"
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <button className={classes.filterBtn} onClick={handelSubmit}>
          محدودسازی
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AdvisementFilterModalDesktop;
