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
import { errorSnackbar } from "../../../../../../../../../redux/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';
const ClassOstad = ({ data, memberList, validation, ostadProp, guestList, getData = false, ...props }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);

    const [ostad, setOstad] = useState(ostadProp);

    useEffect(() => {
        console.log('e', ostadProp)
        setOstad(ostadProp)
    }, [ostadProp])
    const user = useSelector(
        (state) => state.user.user
    );
    const handleUpdateOstad = useCallback(async (id, user, allData) => {

        let data;
        if (user.id) {
            data = {
                id: id,
                members: [
                    {
                        id: user.id
                    }
                ]
            }
        } else {
            data = {
                id: id,
                members: [
                    {
                        username: user.username || user.phone
                    }
                ]
            }
        }
        try {
            const response = await axios.post(`/member/updateRoles/${process.env.REACT_APP_OSTAD_ROLE_TYPE}`, data);
            // setMemberList(response.data.result);

            setOstad([user])

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
            getData()
            setEditMode((prevState) => !prevState)
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
                        <span>استاد</span>
                        <span>{ostad[0]?.fullName}</span>
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
                <ShowOstadModal
                    ostad={{ ...ostad[0], exist: true }}
                    user={user}
                    hideBackdrop={false}
                    classDetail
                    handleAddMember={(e) => {
                        console.log('e', e)
                        handleUpdateOstad(data.id, e, data)
                    }}
                    handleCloseAll={() => { }}

                    closeModal={() => {
                        setEditMode((prevState) => !prevState)
                        // router.push('/profile/dashboard/myClass/'+data.id)
                    }}
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

export default ClassOstad;
