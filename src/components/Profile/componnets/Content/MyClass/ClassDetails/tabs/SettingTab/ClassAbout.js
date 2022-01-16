import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Grid, TextField} from "@material-ui/core";
import axios from "axios";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import edit from "../../../../../../../../assets/images/edit-pen.svg";
import news from "../../../../../../../../assets/images/news.svg";
import {numberFormat} from "../../../../../../../../utilities";
import {loadClassDetails} from "../../../../../../../../../redux/adviserDashboard";

import useStyles from "./Styles";
import {errorSnackbar} from "../../../../../../../../../redux/user";

const ClassAbout = ({data, validation}) => {
    const classes = useStyles();
    const Dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    const [about, setTitle] = useState(data.about);

    const handleInputCount = (e) => {
        setTitle(e.target.value);
    };

    const submitEdit = async () => {
        if (about < 3) return;
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                about,
            });
            console.log("response:", response.data);
            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
        setEditMode(false);
    };

    return (
        <Grid item xs={12} md={6}>
            <div className={classes.settingItem}>
                <div>
                    <img src={news} alt="users"/>
                    <div className={classes.settingInput}>
                        <span>شرح کلاس</span>
                        {editMode ? (
                            <div className={classes.countInputWrapper}>
                                <TextField
                                    className={classes.countInput}
                                    onChange={handleInputCount}
                                    value={numberFormat.toPersianDigits(about)}
                                    // inputProps={{
                                    //   maxLength: 10,
                                    // }}
                                />
                            </div>
                        ) : (
                            <span>{about ? numberFormat.toPersianDigits(about) : " شرح کلاس مشخص نشده است"}</span>
                        )}
                    </div>
                </div>
                <div>
                    {editMode ? (
                        <div className={classes.countAction}>
                            <div
                                className={classes.countActionClose}
                                onClick={() => setEditMode((prevState) => !prevState)}
                            >
                                <CloseRoundedIcon/>
                            </div>
                            <div className={classes.countActionCheck} onClick={submitEdit}>
                                <CheckRoundedIcon/>
                            </div>
                        </div>
                    ) : (
                        data.myRights.includes("CRR_GROUP_EDIT") && data.active && (
                            <img
                                src={edit}
                                alt="edit"
                                onClick={() => setEditMode((prevState) => !prevState)}
                            />
                        )
                    )}
                </div>
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    پر کردن این فیلد الزامی می باشد
                </p>
            )}
        </Grid>
    );
};

export default ClassAbout;
