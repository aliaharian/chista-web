import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { transform } from "../../utilities";
import useStyles from "./Styles";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { getCourseList } from "../../../redux/adviserDashboard";

const CategoryItem = ({
  checkLastChild,
  category,
  index,
  subCat,
  handelSubCategory,
  level,
  handelShowCategory,
  searchCourse,
}) => {
  const classes = useStyles();
  const Dispatch = useDispatch();

  const getCourse = () => {
    if (searchCourse) {
      Dispatch(searchCourse(category));
    }
    handelShowCategory(category);
    if (!checkLastChild) {
      Dispatch(getCourseList(category.id));
    } else if (category.sortedChildren.length === 0) {
      Dispatch(getCourseList(category.id));
    }
  };
  return (
    <li
      onClick={getCourse}
      className={clsx(
        classes.categoryItem,
        subCat === index ? classes.hoverActive : ""
      )}
      onMouseOver={() => handelSubCategory(level, index, category)}
    >
      <p>
        {category.icon && (
          <img src={transform.getImage(category.icon)} alt="" />
        )}

        <span>{category.name}</span>
      </p>
      <p>
        {category.sortedChildren.length > 0 && (
          <ArrowBackIosRoundedIcon style={{ fontSize: 15 }} />
        )}
      </p>
    </li>
  );
};

export default CategoryItem;
