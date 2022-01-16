import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CircularProgress, Dialog, Slide } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";

import SeachCategory from "../../../../../SearchCategory/SearchCategory";
import {errorSnackbar, updateInfo} from "../../../../../../../redux/user";

import useStyles from "./styles";
import { useDispatch } from "react-redux";

function EditGroupDialog({ reset, handleClose, show, courses }) {
  const classes = useStyles();
  const Dispatch = useDispatch();

  const [checkedCourse, setCheckedCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleToggleCourse = (item) => () => {
    const currentIndex = checkedCourse.findIndex((cr) => cr.id === item.id);
    const newChecked = [...checkedCourse];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCourse(newChecked);
  };

  const handelSubmit = async () => {
    setLoading(true);
    const selectedCourseID = checkedCourse.map((item) => {
      return {
        id: item.id,
      };
    });
    const allCourses = [...courses, ...selectedCourseID];

    try {
      Dispatch(
        updateInfo({ courses: allCourses }, function (res) {
          setLoading(false);
          if (res.id) {
            handleClose();
          }
        })
      );
    } catch (err) {
      Dispatch(errorSnackbar(err));
    }
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={true}
        transition={Slide}
        keepMounted
        onClose={handleClose}
        PaperProps={{ className: classes.dialogRoot }}
      >
        <div className={classes.breadcrumbWrapper}>
          <div className={classes.breadcrumbTitle}>
            <ArrowForwardIcon />
            <span>ویرایش پروفایل استاد</span>
            <ChevronLeftIcon />
            <span>اطلاعات تخصصی</span>
          </div>
        </div>
        <SeachCategory
          checkedCourse={checkedCourse}
          handleToggleCourse={handleToggleCourse}
          courseWrapperHeight={250}
        />
        <button
          onClick={handelSubmit}
          className={clsx(
            classes.submitBtn,
            checkedCourse.length === 0 ? classes.disableBtn : "",
            loading ? classes.disableBtn : ""
          )}
        >
          {loading ? (
            <CircularProgress
              color="primary"
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <span>تایید</span>
          )}
        </button>
      </Dialog>
    </>
  );
}

export default EditGroupDialog;
