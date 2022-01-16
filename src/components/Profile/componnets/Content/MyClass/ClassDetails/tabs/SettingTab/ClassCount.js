import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, TextField, Checkbox } from "@material-ui/core";
import axios from "axios";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import edit from "../../../../../../../../assets/images/edit-pen.svg";
import users from "../../../../../../../../assets/images/users.svg";
import { numberFormat, transform } from "../../../../../../../../utilities";
import { loadClassDetails } from "../../../../../../../../../redux/adviserDashboard";

import useStyles from "./Styles";
import checkboxEmpty from "../../../../../../../../assets/images/checkbox-empty.svg";
import checkboxChecked from "../../../../../../../../assets/images/checkbox-checked.svg";
import CheckboxForm from "../../../../../form/CheckboxForm";
import brokenLink from "../../../../../../../../assets/images/broken-link.svg";
import Switch2 from "../../../../../../../form/Switch";
import Edit from "../../../../../../../../assets/images/PenEdit";
import CountModal from "./CountModal";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';
import ChistaSwitch from "../../../../../../../Kit/Switch/Switch";
const ClassLink = ({ data }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [maxMemberCnt, setValue] = useState(
        data.maxMemberCnt === 0 ? 100 : data.maxMemberCnt
    );
    const [joinByLink, setJoinByLink] = useState(data.joinByLink);
    const [validation, setValidation] = useState("");

    const toggleJoinByLink = async (status) => {
        if (data.myRights.includes("CRR_GROUP_EDIT") && data.active) {
            setJoinByLink(status.target.checked);
            try {
                const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                    joinByLink: status.target.checked,
                    maxMemberCnt: status.target.checked ? maxMemberCnt : 0,
                });
                Dispatch(loadClassDetails(response.data));
            } catch (err) {
                Dispatch(errorSnackbar(err));

                console.log("err", err);
            }
        } else {
            console.log('unauthorized')
        }
    };

    const handleInputCount = (e) => {
        if (e.target.value.length > 3) return;
        setValue(numberFormat.toEnglishDigits(e.target.value));
    };

    const submitEdit = async (e) => {
        console.log(e)
        let tmp = e
        if (tmp === 0) tmp = 100
        if (tmp === '') tmp = 100
        setValue(tmp)
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                joinByLink: joinByLink,
                maxMemberCnt: joinByLink ? parseInt(tmp) : 0,
            });
            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
        setEditMode(false);
        setShowModal(false)
    };


    return (
        <>
            <div className={classes.myClassSettingContainer}>
                <div className={classes.settingItem}>
                    <img src={brokenLink} alt="broken link" />
                    <div className={classes.settingInput}>
                        <span>امکان ورود اعضا از طریق لینک دعوت</span>
                    </div>
                    {data.active &&
                        // <Switch2 className={classes.switch}
                        //     value={joinByLink}
                        //     disabled={!data.active}
                        //     onChange={toggleJoinByLink}
                        // />
                        <ChistaSwitch checked={joinByLink} onChange={toggleJoinByLink} disabled={!data.active} />
                    }
                </div>
            </div>
            <div className={classes.myClassSettingContainer}>
                {
                    joinByLink &&
                    (
                        <>
                            <div className={classes.settingItem}>
                                <div>
                                    <img src={users} alt="users" />
                                    <div className={classes.settingInput}>
                                        <span>حداکثر تعداد نفرات کلاس</span>
                                        {editMode ? (
                                            <div className={classes.countInputWrapper}>
                                                <TextField
                                                    className={classes.countInput}
                                                    onChange={handleInputCount}
                                                    value={numberFormat.toPersianDigits(maxMemberCnt)}
                                                // type="number"
                                                // inputProps={{
                                                //   maxLength: 10,
                                                // }}
                                                />
                                                <span>نفر</span>
                                            </div>
                                        ) : (
                                            <span>
                                                {maxMemberCnt
                                                    ? numberFormat.toPersianDigits(maxMemberCnt) + ' نفر '
                                                    : " تعداد مشخص نشده است"}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <>
                                    {
                                        data.myRights.includes("CRR_GROUP_EDIT") && data.active &&
                                        <Edit
                                            // onClick={() => setEditMode((prevState) => !prevState)}
                                            onClick={() => setShowModal(true)}
                                        />
                                    }
                                </>
                            </div>
                            {validation && (
                                <p className={classes.validationMessage}>
                                    پر کردن این فیلد الزامی می باشد
                                </p>
                            )}
                        </>
                    )}
                <CountModal
                    showModal={showModal}
                    closeModal={() => setShowModal(false)}
                    handelSubmit={(e) => submitEdit(e)}
                    data={data}
                    hideBackdrop={false}
                />
            </div>
        </>
    );
}
    ;

export default ClassLink;
