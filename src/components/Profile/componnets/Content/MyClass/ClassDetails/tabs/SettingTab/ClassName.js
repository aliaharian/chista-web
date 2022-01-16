import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";


import edit from "../../../../../../../../assets/images/edit-pen.svg";
import Blackboard from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import { numberFormat } from "../../../../../../../../utilities";
import { loadClassDetails } from "../../../../../../../../../redux/adviserDashboard";
// import useStyles from "./Styles";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';

import Edit from "../../../../../../../../assets/images/PenEdit";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import EditClassNameModal from "../../../InsertClass/Steps/SetSetting/SettingItem/EditClassNameModal";

const ClassName = ({ data, validation }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(false)
    const [title, setTitle] = useState(data.title);

    const handleInputCount = (e) => {
        setTitle(e.target.value);
    };


    const submitEdit = async () => {
        if (title.length > process.env.REACT_APP_MAX_CLASS_NAME) {
            console.log('max')
            setError(`نام کلاس باید حداکثر ${numberFormat.toPersianDigits(process.env.REACT_APP_MAX_CLASS_NAME)} کاراکتر باشد`)
            return;
        }
        else if (title.length < process.env.REACT_APP_MIN_CLASS_NAME) {
            console.log('min')
            setError(`نام کلاس باید حداقل ${numberFormat.toPersianDigits(process.env.REACT_APP_MIN_CLASS_NAME)} کاراکتر باشد`)
            return;
        }
        else {
            try {
                const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                    title,
                });
                console.log("response:", response.data);
                setError(false)
                Dispatch(loadClassDetails(response.data));
            } catch (err) {
                Dispatch(errorSnackbar(err));

                console.log("err", err);
            }
            setEditMode(false);
        }
    };

    return (
        <div className={classes.myClassSettingContainer}>
            {editMode &&
                <EditClassNameModal
                    closeModal={() => { setEditMode(false), setTitle(data.title) }}
                    submit={submitEdit}
                    value={title}
                    onChangeInput={(data) => setTitle(data)}
                    error={error}
                />
            }
            <div className={classes.settingItem}>
                <div>
                    <Blackboard />
                    <div className={classes.settingInput}>
                        <span>نام کلاس</span>

                        <Typography variant="span" style={{ maxWidth: 170 }} noWrap>{data ? numberFormat.toPersianDigits(data.title) : " نام کلاس مشخص نشده است"}</Typography>
                    </div>
                </div>
                <>
                    {data.myRights.includes("CRR_GROUP_EDIT") && data.active && (
                        <Edit
                            onClick={() => setEditMode((prevState) => !prevState)}
                        />
                    )}
                </>
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    پر کردن این فیلد الزامی می باشد
                </p>
            )}
        </div>
    );
};

export default ClassName;
