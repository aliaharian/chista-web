import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
    Typography,
    Grid,
} from "@material-ui/core";
import {
    getCategoryList,
    getCourseList,
} from "../../../redux/adviserDashboard";
import useStyles from "./styles";
import clsx from "clsx";
import { numberFormat } from "../../utilities";
import SeachTeacher from "./SearchTeacher";
import { filterList, filtersUpdateField } from "../../../redux/filters";
import advIcon from "../../assets/images/another-advisers-icon.svg";

const Search = () => {
    const classes = useStyles();
    const Dispatch = useDispatch();

    const [showSuggetsList, setShowSuggetsList] = useState(false);

    const categories = useSelector((state) => state.adviserDashboard.categories);
    const courses = useSelector((state) => state.adviserDashboard.courses);
    const filters = useSelector((state) => state.filters.filters);
    const closeSuggest = useSelector((state) => state.filters.closeSuggest);
    const teacherCount = useSelector((state) => state.advisers.total);

    const handleToggleCourse = (item) => () => {
        setShowSuggetsList(false);

        if (item.type === 'ADVISOR') {
            Dispatch(filtersUpdateField({ prop: "closeSuggest", value: true }));
            window.open('/adviser/' + item.id, '_self');

        }
        if (!item.type) {
            item.type = `cat${item.level}`
        } else {
            Dispatch(getCourseList(item.id));
        }
        item.type = item.type.toLowerCase();
        switch (item.type) {
            case 'cat1':
                Dispatch(filterList({ [`${item.type}Ids`]: item.id, 'cat2Ids': null, 'cat3Ids': null, 'courseIds': null }));
                break;
            case 'cat2':
                Dispatch(filterList({ [`${item.type}Ids`]: item.id, 'cat1Ids': null, 'cat3Ids': null, 'courseIds': null }));
                break;
            case 'cat3':
                Dispatch(filterList({ [`${item.type}Ids`]: item.id, 'cat1Ids': null, 'cat2Ids': null, 'courseIds': null }));
                break;
            case 'course':
                Dispatch(filterList({ [`${item.type}Ids`]: item.id, 'cat1Ids': null, 'cat2Ids': null, 'cat3Ids': null }));
                break;
        }
    };

    useEffect(() => {
        Dispatch(getCategoryList());
    }, []);

    return (
        <>
            <Grid container justify="space-between">
                <Grid
                    container
                    item
                    justify="space-between"
                    md={8}
                    className={classes.root}
                >
                    <SeachTeacher
                        filters={filters}
                        closeSuggest={closeSuggest}
                        courses={courses}
                        showSuggets={showSuggetsList}
                        categories={categories}
                        handleToggleCourse={handleToggleCourse}
                        searchCourse={handleToggleCourse}
                    />
                </Grid>
                {teacherCount > 0 && (
                    <Grid
                        item
                        md={4}
                        justify="flex-end"
                        className={classes.advRootContainer}
                    >
                        <Typography>
                            <img src={advIcon} alt="تعداد اساتید" />
                            {numberFormat.toPersianDigits(
                                numberFormat.putCommas(teacherCount)
                            )}{" "}
            استاد
          </Typography>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default Search;