import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import axios from "axios";
import { Typography, Grid, IconButton } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import BorderColorIcon from "../../../../../../assets/images/pen-edit.svg";
import specialty from "../../../../../../assets/images/specialty.svg";
import { useSelector } from "react-redux";
import EditGroupDialog from "./EditGroupDialog";
import Icon from "../../../../../Icon/Icon";

function EditGroup() {
  const classes = useStyles();
  const adviser = useSelector((state) => state.user.adviser);
  const [showEdit, setShowEdit] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(adviser.courses);
  }, [adviser]);

  function editToggle() {
    setShowEdit(!showEdit);
  }

  function closeEdit() {
    setShowEdit(false);
  }

  const deleteCourses = async (courseId) => {
    try {
      const response = await axios.delete(
        `/advisor/deleteCourse?courseId=${courseId}`
      );
      if (response.data.responseCode === 200) {
        const filteredCourses = courses.filter((item) => item.id !== courseId);
        setCourses(filteredCourses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showEdit && (
        <EditGroupDialog
          show={showEdit}
          handleClose={closeEdit}
          courses={adviser.courses}
        />
      )}

      <Grid container spacing={1}>
        <Grid item container xs={11}>
          <Grid container className={classes.profileFieldWrapper}>
            <Grid item>
              <img src={specialty} style={{ width: 24 }} />
            </Grid>
            <Grid item>
              <div className={classes.profileField}>
                <Typography className={classes.profileFieldLabel}>
                  اطلاعات تخصصی
                </Typography>
                <Typography className={classes.profileFieldValue}>
                  {adviser?.categoryName}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            aria-label="edit"
            style={{ borderRadius: "25%", width: "37px", height: "37px" }}
            onClick={editToggle}
          >
            <Icon src={BorderColorIcon} style={{ width: 20, height: 20 }} />
          </IconButton>
        </Grid>
        <Grid xs={12}>
          {courses.map((item) => (
            <div className={classes.courseItem} key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>{item.categoryName}</p>
              </div>
              <div
                className={classes.deleteCourse}
                onClick={() => deleteCourses(item.id)}
              >
                <CloseRoundedIcon />
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

EditGroup.propTypes = {};

export default EditGroup;
