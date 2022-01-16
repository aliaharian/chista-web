import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import edit from "../../../../../../../../../assets/images/edit-pen.svg";
import assistant from "../../../../../../../../../assets/images/assistant.svg";

import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ShowAssistantModal from "./ShowAssistantModal";
import Edit from "../../../../../../../../../assets/images/PenEdit";
import UserIcon from "../../../../../../../../../assets/images/UserIcon.svg";

import { numberFormat } from "../../../../../../../../../utilities";


const AssistantItem = ({
    handleAddMember,
    assistantList,
    user,
    addContactNumber,
    allData,
    changeMemberCount,
    handleCloseAll,
    ostad
}) => {
    // const classes = useStyles();
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={classes.settingItemContainer}>
            <div className={classes.settingItem} onClick={() => setEditMode((prevState) => !prevState)}>
                <div>
                    <img src={UserIcon} alt={""}/>
                    <div className={classes.settingInput}>
                        <span>ناظر</span>
                        {assistantList.length > 0 ? (
                            assistantList.length < 2 ?
                                <span>{assistantList[0].fullName || assistantList[0].firstName || assistantList[0].username || assistantList[0].phone}</span>
                                :
                                <span>{assistantList[0].fullName || assistantList[0].firstName || assistantList[0].username || assistantList[0].phone} و {numberFormat.toPersianDigits(assistantList.length - 1)} نفر دیگر</span>

                        ) : (
                            <span>موردی انتخاب نشده </span>
                        )}
                    </div>
                </div>
                <div onClick={() => setEditMode((prevState) => !prevState)}>
                    <Edit onClick={() => setEditMode((prevState) => !prevState)} />
                </div>
            </div>
            {editMode && (
                <ShowAssistantModal
                    closeModal={() => setEditMode((prevState) => !prevState)}
                    showModalContact={editMode}
                    handleAddMember={handleAddMember}
                    assistantList={assistantList}
                    ostad={ostad}
                    user={user}
                    changeMemberCount={(value) => changeMemberCount(value)}
                    allData={allData}
                    addContactNumber={addContactNumber}
                    handleCloseAll={handleCloseAll}
                />
            )}
        </div>
    );
};

export default AssistantItem;
