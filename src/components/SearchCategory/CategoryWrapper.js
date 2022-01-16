import React, {useState} from "react";
import useStyles from "./Styles";
import {Button, List} from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import {transform} from "../../utilities";
import CategoryItem from "./CategoryItem";
import {Scrollbars} from "react-custom-scrollbars";
import allCategories from "../../assets/images/allCategories.svg";
import clsx from "clsx";

const SeachCategory = ({
                           categories,
                           handelShowCategory,
                           handelAllCategory,
                           searchCourse,
                           checkLastChild
                       }) => {
    const classes = useStyles();

    const [subCat_1, setSubCat_1] = useState();
    const [subCat_2, setSubCat_2] = useState();
    const [subCat_3, setSubCat_3] = useState();

    const handelSubCategory = (level, index) => {
        if (level === 0) return setSubCat_1(index);
        if (level === 1) return setSubCat_2(index);
        setSubCat_3(index);
    };

    return (

        <div className={classes.categoryWrapepr}>
            <ul className={classes.mainCategory}>
                <Scrollbars style={{height: 400}} className={classes.scrollBarContainer}>

                    <li
                        onClick={handelAllCategory}
                        className={clsx(
                            classes.categoryItem,
                            classes.allcats
                        )}
                    >
                        <p>

          <img src={allCategories} alt="" />


                            <span>همه دسته بندی ها</span>
                        </p>
                    </li>

                    {(categories || []).map((category, index) => (
                        <CategoryItem
                            level={0}
                            checkLastChild={checkLastChild}
                            category={category}
                            index={index}
                            handelSubCategory={handelSubCategory}
                            subCat={subCat_1}
                            handelShowCategory={handelShowCategory}
                            searchCourse={searchCourse}
                        />
                    ))}
                </Scrollbars>
            </ul>
            {subCat_1 !== undefined ? (
                <ul>
                    <Scrollbars style={{height: 400}} className={classes.scrollBarContainer}>

                        {categories[subCat_1]?.sortedChildren.map((category, index) => (
                            <CategoryItem
                                level={1}
                                checkLastChild={checkLastChild}
                                category={category}
                                index={index}
                                handelSubCategory={handelSubCategory}
                                subCat={subCat_2}
                                handelShowCategory={handelShowCategory}
                                searchCourse={searchCourse}
                            />
                        ))}
                    </Scrollbars>
                </ul>
            ) : (
                ""
            )}
            {subCat_1 !== undefined && subCat_2 !== undefined ? (
                <ul className={classes.subCat_2Wrapper}>
                    <Scrollbars style={{height: 400}} className={classes.scrollBarContainer}>

                        {categories[subCat_1]?.sortedChildren[subCat_2]?.sortedChildren.map(
                            (category, index) => (
                                <CategoryItem
                                    level={2}
                                    category={category}
                                    index={index}
                                    handelSubCategory={handelSubCategory}
                                    handelShowCategory={handelShowCategory}
                                    searchCourse={searchCourse}
                                />
                            )
                        )}
                    </Scrollbars>
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default SeachCategory;
