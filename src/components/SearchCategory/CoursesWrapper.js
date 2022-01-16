import React, {useEffect, useState} from "react";
import {List} from "@material-ui/core";
import {transform} from "../../utilities";
import noData from "../../assets/images/no_result_search.svg";

import CourseItem from "./CourseItem";

import useStyles from "./Styles";
import {Scrollbars} from 'react-custom-scrollbars';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {createMuiTheme} from "@material-ui/core/styles";

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
const CoursesWrapper = ({
                            courses = [],
                            handleToggleCourse,
                            checkedCourse,
                            changeParentHeight,
                            showSelectedCourse,
                        }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [scrollHeight , setScrollHeight] = React.useState(isMobile?346:400)

    // const [checked, setChecked] = useState([0]);

    // const handleToggle = (value) => () => {
    //   const currentIndex = checked.indexOf(value);
    //   const newChecked = [...checked];

    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }

    //   setChecked(newChecked);
    // };

    useEffect(()=>{
        if (courses.length>0){
            isMobile?
            setScrollHeight(346)
                :
            setScrollHeight(400)

        }else{
            setScrollHeight(300)

        }
    },[courses])
    return (
        <List style={{height:scrollHeight,overflow:'hidden'}}>
            <Scrollbars
                style={{height: scrollHeight}}
                className={classes.scrollBarContainer}>

                {/* {showSelectedCourse &&
        checkedCourse.length > 0 &&
        checkedCourse.map((course) => (
          <CourseItem
            checkedCourse={checkedCourse}
            course={course}
            key={course.id}
            handleToggleCourse={handleToggleCourse}
          />
        ))} */}
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseItem
                            checkedCourse={checkedCourse}
                            course={course}
                            key={course.id}
                            handleToggleCourse={handleToggleCourse}
                        />
                    ))
                ) : (
                    <div className={classes.noData}>
                        <img src={noData} alt="no data"/>
                        <p>نتیجه ای یافت نشد</p>
                    </div>
                )}
            </Scrollbars>

        </List>
    );
};

export default CoursesWrapper;
