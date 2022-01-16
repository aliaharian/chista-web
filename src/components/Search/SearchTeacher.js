import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import axios from "axios";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, TextField } from "@material-ui/core";
import CategoryWrapper from "../SearchCategory/CategoryWrapper";
import CoursesWrapper from "../SearchCategory/CoursesWrapper";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

const SeachTeacher = ({
  categories,
  courses,
  handleToggleCourse,
  showSuggets,
  searchCourse,
  filters,
  closeSuggest,
}) => {
  const textInput = useRef(null);
  const coursesRef = useRef(null);
  const refCategoryWrapper = useRef(null);
  const classes = useStyles();
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showCourseList, setShowCourseList] = useState(showSuggets);
  const [categorySelected, setCategorySelected] = useState("دسته بندی ها");
  const [searchedCourse, setSearchedCourse] = useState();

  const [searchValue, setSearchValue] = useState("");
  const [debouncedFunction] = useDebouncedCallback(async (value) => {
    setSearchValue(value);

    if (value) {
      const response = await axios.get(`/advisor/suggest?key=${value}&max=10`);
      setSearchedCourse(response.data);

      setShowCourseList(true);
    }
  }, 1000);

  const handelShowCategory = (name) => {
    debugger;
    setShowCategoryList(!showCategoryList);
    setShowCourseList(false);
    setCategorySelected(name.name);
  };

  useEffect(() => {
    window.addEventListener("mouseup", (event) => {
      if (
        event.target.tagName != 'LI' &&
        !refCategoryWrapper.current?.contains(event.target) &&
        !textInput.current?.contains(event.target) &&
        !coursesRef.current?.contains(event.target)
      ) {
        setShowCourseList(false);
        setShowCategoryList(false);
      }
    });

    if (!!filters.cat3Ids) {
      categories.find((category) => {
        category.sortedChildren &&
          category.sortedChildren.some((item) => {
            item.sortedChildren &&
              item.sortedChildren.some((item) => {
                if (item.id === filters.cat3Ids) {
                  setCategorySelected(item.name);
                }
              });
          });
      });
    } else if (!!filters.cat2Ids) {
      categories.find((category) => {
        category.sortedChildren &&
          category.sortedChildren.some((item) => {
            if (item.id === filters.cat2Ids) {
              setCategorySelected(item.name);
            }
          });
      });
    } else if (!!filters.cat1Ids) {
      categories &&
        categories.some((item) => {
          if (item.id === filters.cat1Ids) {
            setCategorySelected(item.name);
          }
        });
    } else {
      setCategorySelected("دسته بندی ها");
    }
    if (!showSuggets || closeSuggest) {
      textInput.current.value = null;
      setShowCourseList(false);
    }

  }, [filters, showSuggets, closeSuggest]);

  return (
    <div className={classes.searchBox}>
      <div className={classes.searchBoxWrapper}>
        <Button
          onClick={() => setShowCategoryList(!showCategoryList)}
          className={[classes.categoryBtn, classes.sectionDesktop]}
        >
         <span className={classes.textCategory}>{categorySelected}</span>
          <ExpandMoreIcon
            className={clsx(showCategoryList ? classes.openCategoryArrow : "")}
          />
        </Button>
        <TextField placeholder="جستجو در اساتید"
          inputRef={textInput}
          className={classes.searchInput}
          onChange={(e) => debouncedFunction(e.target.value)}
          InputProps={{
            disableUnderline: true
          }} />
      </div>
      {showCategoryList && (
        <section ref={refCategoryWrapper}>
          <CategoryWrapper
            checkLastChild={true}
            handelShowCategory={handelShowCategory}
            categories={categories}
            searchCourse={searchCourse}
          />
        </section>
      )}
      {showCourseList && (
        <section ref={coursesRef} className={classes.courseWrapper}>
          <CoursesWrapper
            handleToggleCourse={handleToggleCourse}
            courses={searchValue.length === 0 ? courses : searchedCourse}
          />
        </section>
      )}
    </div>
  );
};

export default SeachTeacher;
