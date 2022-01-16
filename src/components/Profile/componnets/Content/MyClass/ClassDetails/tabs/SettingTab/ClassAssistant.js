import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import axios from "axios";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import edit from "../../../../../../../../assets/images/edit-pen.svg";
import Blackboard from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import { numberFormat } from "../../../../../../../../utilities";
import { loadClassDetails } from "../../../../../../../../../redux/adviserDashboard";

import useStyles from "./Styles";
import Edit from "../../../../../../../../assets/images/PenEdit";
import UserIcon from "../../../../../../../../assets/images/profile/registerOstad/UserIcon";
import ShowOstadModal from "../../../InsertClass/Steps/SetSetting/SettingItem/ShowOstadModal";
import ShowAssistantModal from "../../../InsertClass/Steps/SetSetting/SettingItem/ShowAssistantModal";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import { useEffect } from "react";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';

const ClassAssistant = ({ data, memberList, validation, guestList, getData = false, ...props }) => {
    const Dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    const [assistant, setAssistant] = useState(memberList.filter((member) => {
        return member.memberRoleType === process.env.REACT_APP_ASSISTANT_ROLE_TYPE
    }));
    useEffect(() => {
        setAssistant(memberList.filter((member) => {
            return member.memberRoleType === process.env.REACT_APP_ASSISTANT_ROLE_TYPE
        }))
    }, [memberList])

    const user = useSelector(
        (state) => state.user.user
    );
    const handleUpdateAssistant = useCallback(async (users, id) => {
        let data;
        let tmp = [];
        users.map((user) => {
            if (user.key) {
                tmp.push({
                    id: user.id
                })
            } else if (user.phone || user.username) {
                tmp.push({
                    username: user.username || user.phone
                })
            }
        })
        data = {
            id: id,
            members: tmp
        }
        try {
            const response = await axios.post(`/member/updateRoles/${process.env.REACT_APP_ASSISTANT_ROLE_TYPE}`, data);
            console.log('response.data', response.data)
            setAssistant(users)

            let memberTmp = [...memberList, ...guestList]
            response.data.members.map((member) => {
                let index = memberTmp.findIndex(x => x.id == member.id)
                if (index !== -1) {
                    memberTmp[index].memberRoleType = member.memberRoleType
                    memberTmp[index].memberRoleStr = member.memberRoleStr
                } else {
                    memberTmp.push(member)
                }
            })
            props.setMemberList([...memberTmp])

            let newAssist = memberTmp.filter((member) => {
                return member.memberRoleType === process.env.REACT_APP_ASSISTANT_ROLE_TYPE
            })
            setAssistant(newAssist)

            // setMemberList(response.data.result);
            getData()
        } catch (e) {
            Dispatch(errorSnackbar(e));

            console.log(e)
        }

    }, []);

    return (
        <div className={classes.myClassSettingContainer}>
            <div className={classes.settingItem}>
                <div>
                    <UserIcon />

                    <div className={classes.settingInput}>
                        <span>ناظر</span>
                        <span>
                            {assistant.length === 0 ?
                                `ناظر تعریف نشده` :
                                assistant.length === 1 ?
                                    assistant[0].fullName :
                                    `${assistant[0].fullName} و  ${assistant.length - 1} نفر دیگر`}

                        </span>
                    </div>
                </div>
                <>
                    {
                        data.myRights.includes("CRR_GROUP_EDIT") && data.active && (
                            <Edit
                                onClick={() => setEditMode((prevState) => !prevState)}
                            // onClick={props.handleComingSoon}
                            />
                        )
                    }
                </>
            </div>
            {
                editMode &&
                <ShowAssistantModal
                    assistantList={assistant}
                    user={user}
                    classDetail
                    hideBackdrop={false}
                    handleEditAssistant={(e) => {
                        console.log('e', e)
                        handleUpdateAssistant(e, data.id)
                    }}
                    handleCloseAll={() => { setEditMode((prevState) => !prevState) }}
                    closeModal={() => setEditMode((prevState) => !prevState)}
                    allData={
                        {
                            addContactList: memberList.map((item) => {
                                return {
                                    ...item
                                    ,
                                    exist: true,
                                };
                            }),
                            addContactNumber: []

                        }
                    }
                />
            }
        </div>
    );
};

export default ClassAssistant;
