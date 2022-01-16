import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  getCourseList,
} from "../../../../../../../redux/adviserDashboard";
import useStyles from "./Styles";
import SeachCategory from "../../../../../SearchCategory/SearchCategory";
import clsx from "clsx";
import { numberFormat } from "../../../../../../utilities";

const Category = ({ handelStep, courses }) => {
  const classes = useStyles();

  const [checkedCourse, setCheckedCourse] = useState(courses || []);

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

  const handelSubmit = () => {
    handelStep("further", { courses: checkedCourse });
  };

  return (
    <>
      <SeachCategory
        checkedCourse={checkedCourse}
        handleToggleCourse={handleToggleCourse}
      />
      <div className={classes.categoryFooter}>
        {checkedCourse.length > 0 ? (
          <p>
            <span className={classes.selectedCoursesNumber}>{numberFormat.toPersianDigits(checkedCourse.length)}</span>
            <span>موضوع انتخاب شده</span>
          </p>
        ):
            <p>
              <span>هیچ موردی انتخاب نشده است</span>
            </p>
        }
        
        <button
          onClick={handelSubmit}
          className={clsx(
            classes.submitBtn,
            checkedCourse.length === 0 ? classes.disableBtn : ""
          )}
        >
          ادامه
        </button>
      </div>
    </>
  );
};

export default Category;
