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
import chatAltIcon from "../../../../../../../../assets/images/chatAltIcon.svg";
import Switch2 from "../../../../../../../form/Switch";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';
import ChistaSwitch from "../../../../../../../Kit/Switch/Switch";
const ClassChat = ({ data, ...props }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

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

    const submitEdit = async () => {
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                joinByLink: joinByLink,
                maxMemberCnt: joinByLink ? maxMemberCnt : 0,
            });
            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
        setEditMode(false);
    };

    console.log("maxMemberCnt:", maxMemberCnt);

    return (
        <div className={classes.myClassSettingContainer}>
            <div className={classes.settingItem}>
                <img src={chatAltIcon} />

                <div className={classes.settingInput}>
                    <span>امکان گفتگو خارج از کلاس</span>
                </div>

                {data.active && 
                // <Switch2 value={false} className={classes.switch} onChange={props.handleComingSoon}
                //     disabled={!data.active}
                // />
                <ChistaSwitch checked={false} onChange={props.handleComingSoon} disabled={!data.active}/>
                }
            </div>
        </div>

    );
}
    ;

export default ClassChat;
