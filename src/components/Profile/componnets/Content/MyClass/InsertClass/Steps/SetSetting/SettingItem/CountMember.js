import React, { useRef, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import edit from "../../../../../../../../../assets/images/edit-pen.svg";
import users from "../../../../../../../../../assets/images/users.svg";
import { numberFormat } from "../../../../../../../../../utilities";
import Edit from "../../../../../../../../../assets/images/PenEdit";

import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import CountModal from "../../../../ClassDetails/tabs/SettingTab/CountModal";
import clsx from 'clsx'
const CountMember = ({ maxMemberCnt, submitEditCount, validation }) => {
    // const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [value, setValue] = useState(100);
    const countMemberRef = useRef();
    const handleInputCount = (e) => {
        if (e.target.value.length > 3) return;
        setValue(e.target.value);
    };

    const submitEdit = (value) => {
        setEditMode((prevState) => !prevState);
        submitEditCount(value);
        setValue(value)
    };

    React.useEffect(() => {
        // console.log('countMemberRef.current',countMemberRef.current.children[0].children[0]);

        if (countMemberRef.current) countMemberRef.current.children[0].children[0].focus()
    }, [editMode])
    return (
        <div className={classes.settingItemContainer}>
            <CountModal
                showModal={editMode}
                closeModal={() => setEditMode(false)}
                handelSubmit={(e) => submitEdit(e)}
                data={numberFormat.toPersianDigits(value)}
            />
            <div className={clsx(classes.settingItem, classes.userContWrapper)} onClick={() => setEditMode(true)}>
                <div>
                    <img src={users} alt="users" />
                    <div className={classes.settingInput}>
                        <span>حداکثر تعداد نفرات کلاس</span>
                        <span>
                            {maxMemberCnt
                                ? numberFormat.toPersianDigits(maxMemberCnt) + ' نفر'
                                : " تعداد مشخص نشده است"}
                        </span>

                    </div>
                </div>
                <div>
                    <Edit onClick={() => setEditMode((prevState) => !prevState)} />
                </div>
            </div>


        </div>
    );
};

export default CountMember;
