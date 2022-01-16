import React, {useState, useRef, useEffect} from "react";
import useStyles from "./Styles";
import axios from "axios";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Button, Input} from "@material-ui/core";
import CategoryWrapper from "./CategoryWrapper";
import CoursesWrapper from "./CoursesWrapper";
import clsx from "clsx";
import {useDebouncedCallback} from "use-debounce";
import {useSelector, useDispatch} from "react-redux";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
    getCategoryList,
    getCourseList,
} from "../../../redux/adviserDashboard";
import MobileCategoriesDialog from "../MobileFilters/MobileCategoriesDialog";
import {createMuiTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});
const SeachCategory = ({
                           handleToggleCourse,
                           checkedCourse,
                           className,
                           courseWrapperHeight = 400,
                       }) => {
    const Dispatch = useDispatch();

    const textInput = useRef(null);
    const coursesRef = useRef(null);
    const classes = useStyles();
    const [showCategoryList, setShowCategoryList] = useState(false);
    const [showCourseList, setShowCourseList] = useState(true);
    const [categorySelected, setCategorySelected] = useState("همه دسته بندی ها");
    const [categorySelectedID, setCategorySelectedID] = useState("");
    const [searchedCourse, setSearchedCourse] = useState();
    const [selectedItem, setSelectedItem] = React.useState(null);

    const categories = useSelector((state) => state.adviserDashboard.categories);
    const courses = useSelector((state) => state.adviserDashboard.courses);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [searchValue, setSearchValue] = useState("");
    const [debouncedFunction] = useDebouncedCallback(async (value) => {
        const response = await axios.get(
            `/course/suggest?key=${value}${
                categorySelectedID ? `&parentId=${categorySelectedID}` : ""
            }`
        );
        setSearchedCourse(response.data);
    }, 1000);

    const handelChange = (e) => {
        setSearchValue(e.target.value);
        debouncedFunction(e.target.value);
    };

    const handelShowCategory = (category) => {
        setShowCategoryList(!showCategoryList);
        setCategorySelected(category.name);
        setCategorySelectedID(category.id);
    };

    const handelAllCategory = () => {
        setShowCategoryList(!showCategoryList);
        setSearchValue("");
        setCategorySelected("همه دسته بندی ها");
        Dispatch(getCourseList());
    };

    useEffect(() => {
        Dispatch(getCategoryList());
        Dispatch(getCourseList());
    }, []);


    function _renderMobileCategories() {
        return <MobileCategoriesDialog open={showCategoryList} hasAll handleClose={() => handleShowCategoryList(false)}
                                       setSelectAll={() => {
                                           handelAllCategory();
                                           handleShowCategoryList(false);
                                       }}
                                       setSelected={(item) => {
                                           handelShowCategory(item);
                                           Dispatch(getCourseList(item.id));
                                           handleShowCategoryList(false);
                                       }}/>
    }

    const handleShowCategoryList = (open) => {
        setShowCategoryList(open)
    }

    return (
        <div className={clsx(classes.searchBoxStep, className ? classNme : "")}>
            {isMobile && _renderMobileCategories()}
            <div className={classes.searchBoxWrapper}>
                <Button
                    onClick={() => handleShowCategoryList(!showCategoryList)}
                    className={classes.categoryBtn}
                >
                    {categorySelected}
                    <ExpandMoreIcon
                        className={clsx(showCategoryList ? classes.openCategoryArrow : "")}
                        style={{color: "#0c0b31cc", fontSize: 24}}
                    />
                </Button>
                <Input
                    placeholder="جستجو"
                    className={classes.searchInput}
                    onChange={handelChange}
                    // onFocusCapture={focusHandel}
                    ref={textInput}
                    value={searchValue}
                />
                <CloseRoundedIcon
                    className={clsx(classes.resetInput,
                        searchValue.length === 0 ? classes.displayNone : ""
                    )}
                    onClick={() => setSearchValue("")}
                />
            </div>

            {showCategoryList && !isMobile && (
                <CategoryWrapper
                    handelShowCategory={handelShowCategory}
                    categories={categories}
                    handelAllCategory={handelAllCategory}
                />
            )}


            {showCourseList && (
                <section
                    ref={coursesRef}
                    className={classes.courseWrapper}
                    style={{height: 'max-content'}}
                >
                    <CoursesWrapper
                        showSelectedCourse={searchValue.length === 0}
                        handleToggleCourse={handleToggleCourse}
                        checkedCourse={checkedCourse}
                        // handelShowCategory={handelShowCategory}
                        courses={searchValue.length === 0 ? courses : searchedCourse}
                    />
                </section>
            )}
        </div>
    );
};

export default SeachCategory;
