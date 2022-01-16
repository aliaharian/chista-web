import React from "react";
import {
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListItemAvatar,
    Typography,
    Divider
} from "@material-ui/core";
import {transform} from "../../utilities";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import checkboxEmpty from '../../assets/images/checkbox-empty.svg'
import checkboxChecked from '../../assets/images/checkbox-checked.svg'

import useStyles from "./Styles";

const CourseItem = ({course, handleToggleCourse, checkedCourse}) => {
    const classes = useStyles();

    return (
        <>
            <ListItem
                key={course.id}
                role={undefined}
                dense
                button
                onClick={handleToggleCourse(course)}
                className={classes.courseItem}
            >
                {course.type != 'ADVISOR' && <ListItemIcon>

                    <img src={transform.getImage(course.image)} alt="" className={classes.imageIcon}/>
                </ListItemIcon>}
                {course.type == 'ADVISOR' && <ListItemAvatar>
                    <ProfileAvatar user={course} variant="circle" avatar={classes.avatar}
                                   avatarContainer={classes.avatarContainer}/>
                </ListItemAvatar>}
                <ListItemText
                    id={course.id}
                    primary={<Typography noWrap>{course.name || course.text}</Typography>}
                    secondary={<Typography noWrap>{course.categoryName || course.subText}</Typography>}
                    className={classes.courseTitleContainer}
                />
                {checkedCourse && <ListItemIcon className={classes.courseCheckboxContainer}>
                    <Checkbox
                        edge="start"
                        checked={checkedCourse.some((item) => item.id === course.id)}
                        tabIndex={-1}
                        disableRipple
                        className={classes.courseCheckbox}
                        icon={<img src={checkboxEmpty} alt=""/>}
                        checkedIcon={<img src={checkboxChecked} alt=""/>}
                        inputProps={{"aria-labelledby": course.id}}
                    />
                </ListItemIcon>}
            </ListItem>
            <Divider variant="middle" className={classes.divider}/>
        </>
    );
};

export default CourseItem;
