import React, { useState } from "react";
import { Dialog, Typography, InputAdornment, Icon } from "@material-ui/core";
import useStyles from "./StylesFilterModalMobile";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FilterStatus from "./FilterStatus";
import FilterType from "./FilterType";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import clsx from "clsx";
import { getAdvisementList } from "../../../../../../../redux/adviserDashboard/Actions";
import { transform } from "../../../../../../utilities";
import { useDispatch } from "react-redux";

const AdvisementFilterModalMobile = ({
  handelFilterModal,
  handelSetFilterValue,
  filterValues,
}) => {
  const Dispatch = useDispatch();
  const classes = useStyles();

  const [filterValue, setFilterValue] = useState(filterValues);

  const [filterItem, setFilterItem] = useState("");

  const handelChange = (e) => {
    setFilterItem("");
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };

  const handelChangeCalendarAz = (date) => {
    setFilterValue({ ...filterValue, fromTime: jMoment(date).unix() });
  };

  const handelChangeCalendarTa = (date) => {
    setFilterValue({ ...filterValue, toTime: jMoment(date).unix() });
  };

  const handelClearForm = () => {
    setFilterValue({
      fromTo: "all",
      success: "all",
      fromTime: "",
      toTime: "",
    });
  };

  const renderDate = (date) => {
    const timeUnix = new Date(date);
    const day = transform.customizeDateAndTime(timeUnix * 1000, {
      day: "numeric",
    });

    const month = transform.customizeDateAndTime(timeUnix * 1000, {
      month: "short",
    });

    const year = transform.customizeDateAndTime(timeUnix * 1000, {
      year: "numeric",
    });
    return (
      <div className={classes.dateTime}>
        <span>{day}</span> <span>{month}</span> <span>{year}</span>
      </div>
    );
  };

  const renderFilterItem = () => {
    switch (filterItem) {
      case "type":
        return (
          <FilterType
            value={filterValue.fromTo}
            handelChange={handelChange}
            handleClose={() => setFilterItem("")}
          />
        );
      case "status":
        return (
          <FilterStatus
            value={filterValue.success}
            handelChange={handelChange}
            handleClose={() => setFilterItem("")}
          />
        );
      default:
        "";
    }
  };

  const handelSubmit = () => {
    Dispatch(
      getAdvisementList(
        false,
        {
          fromTo: filterValue.fromTo === "all" ? "" : filterValue.fromTo,
          success: filterValue.success === "all" ? "" : filterValue.success,
          fromTime: filterValue.fromTime,
          toTime: filterValue.toTime,
        },
        true
      )
    );
    handelFilterModal(false);
    handelSetFilterValue(filterValue);
  };

  return (
    <Dialog
      fullScreen
      open={true}
      //   onClose={handleClose}
      classes={{
        paper: classes.modalWrapper,
      }}
    >
      <div className={classes.headerWrapper}>
        <div className={classes.backWrapper}>
          <ArrowForwardIosIcon
            className={classes.breadcrumbCaret}
            onClick={() => handelFilterModal(false)}
          />
          <Typography className={classes.breadcrumbTextCh1}>
            محدود کردن
          </Typography>
        </div>
        <Typography onClick={handelClearForm}>پاک کردن</Typography>
      </div>
      <div className={classes.contentWrapper}>
        <div style={{ width: "100%" }}>
          <div
            className={classes.filterItem}
            onClick={() => setFilterItem("status")}
          >
            <p>وضعیت تماس</p>
            <button>
              {filterValue.success === "true" && "تماس های موفق"}
              {filterValue.success === "false" && "تماس های ناموفق"}
              {filterValue.success !== "true" &&
                filterValue.success !== "false" &&
                "انتخاب"}
              <ArrowBackIosIcon style={{ fontSize: "16" }} />
            </button>
          </div>
          <div
            className={classes.filterItem}
            onClick={() => setFilterItem("type")}
          >
            <p>نوع تماس</p>
            <button>
              {filterValue.fromTo === "true" && "تماس های خروجی"}
              {filterValue.fromTo === "false" && "تماس های ورودی"}
              {filterValue.fromTo !== "true" &&
                filterValue.fromTo !== "false" &&
                "انتخاب"}
              <ArrowBackIosIcon style={{ fontSize: "16" }} />
            </button>
          </div>

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
              className={classes.datepicker}
              name={"toTime"}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                startAdornment: (
                  <div
                    className={clsx(
                      classes.filterItem,
                      classes.filterItemCalendar
                    )}
                  >
                    <p>از تاریخ</p>
                    <button>
                      {filterValue.fromTime
                        ? renderDate(filterValue.fromTime)
                        : "انتخاب"}

                      <ArrowBackIosIcon style={{ fontSize: "16" }} />
                    </button>
                  </div>
                ),
                className: classes.root,
              }}
              onChange={handelChangeCalendarAz}
              value={null}
              format={"jDD jMMMM jYYYY"}
              fullWidth
            />
          </MuiPickersUtilsProvider>
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
              className={classes.datepicker}
              name={"toTime"}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                startAdornment: (
                  <div
                    className={clsx(
                      classes.filterItem,
                      classes.filterItemCalendarLast
                    )}
                  >
                    <p>تا تاریخ</p>
                    <button>
                      {filterValue.toTime
                        ? renderDate(filterValue.toTime)
                        : "انتخاب"}

                      <ArrowBackIosIcon style={{ fontSize: "16" }} />
                    </button>
                  </div>
                ),
                className: classes.root,
              }}
              onChange={handelChangeCalendarTa}
              value={null}
              format={"jDD jMMMM jYYYY"}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </div>
        <button className={classes.filterBtn} onClick={handelSubmit}>
          محدودسازی
        </button>
      </div>
      {renderFilterItem()}
    </Dialog>
  );
};

export default AdvisementFilterModalMobile;
