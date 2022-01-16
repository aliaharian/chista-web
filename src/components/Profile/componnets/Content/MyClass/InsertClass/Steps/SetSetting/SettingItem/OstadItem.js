import React, { useState, memo } from "react";
import { Grid } from "@material-ui/core";
import Edit from "../../../../../../../../../assets/images/PenEdit";
import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ShowOstadModal from "./ShowOstadModal";
import UserIcon from "../../../../../../../../../assets/images/UserIcon.svg";

const OstadItem = ({
    addContactNumber,
    handleAddMember,
    ostad,
    validation,
    user,
    allData,
    changeMemberCount,
    assistantList,
    handleCloseAll
}) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div className={classes.settingItemContainer}>
            <div className={classes.settingItem} onClick={() => setEditMode((prevState) => !prevState)}>
                <div>
                    <img src={UserIcon} alt={""} />

                    <div className={classes.settingInput}>
                        <span>استاد</span>
                        {ostad ? (
                            <span key={ostad.id}>
                                {ostad.chatUserId
                                    ? ostad.fullName || ostad.firstName || ostad.username
                                    : ostad.fullName || ostad.firstName || ostad.phone || ostad.number || ostad.fullName || ostad.username}
                            </span>
                        ) : (
                            <span>موردی انتخاب نشده </span>
                        )}
                    </div>
                </div>
                <div onClick={() => setEditMode((prevState) => !prevState)}>
                    <Edit onClick={() => setEditMode((prevState) => !prevState)} />
                </div>
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    پر کردن این فیلد الزامی می باشد
                </p>
            )}
            {editMode && (
                <ShowOstadModal
                    closeModal={() => {
                        setEditMode((prevState) => !prevState)
                    }}
                    handleCloseAll={handleCloseAll}
                    showModalContact={editMode}
                    handleAddMember={handleAddMember}
                    addContactNumber={addContactNumber}
                    user={user}
                    allData={allData}
                    changeMemberCount={(value) => changeMemberCount(value)}
                    ostad={ostad}
                    assistantList={assistantList}
                    forceClose={() => {
                        setEditMode((prevState) => !prevState)
                    }}
                />
            )}
        </div>
    );
};

export default memo(OstadItem);
