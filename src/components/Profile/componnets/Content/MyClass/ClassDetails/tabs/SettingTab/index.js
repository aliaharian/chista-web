import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import ClassName from "./ClassName";
import ClassLink from "./ClassLink";
import ClassDate from "./ClassDate";
import ClassAbout from "./ClassAbout";
import ClassCount from "./ClassCount";
import ClassDeactive from "./ClassDeactive";
import useStyles from "./Styles";
import ClassOstad from "./ClassOstad";
import ClassAssistant from "./ClassAssistant";
import ClassChat from "./ClassChat";
import { withSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { infoSnackbar } from "../../../../../../../../../redux/user";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';
const SettingTab = ({ index, data, permission, memberList, getData, ...props }) => {
    // const classes = useStyles();
    const [editable, seteditable] = useState(true);



    const Dispatch = useDispatch();

    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }
    return (
        <div
            role="tabpanel"
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            className={classes.classSettingsGridContainer}
        >
            <ClassName data={data} permission={permission} editable={editable} />
            {/* <ClassDate data={data} permission={permission} editable={editable}/> */}
            <ClassOstad
                getData={getData}
                handleComingSoon={handleComingSoon}
                memberList={memberList.filter((member) => {
                    return member.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE
                })}
                guestList={memberList.filter((member) => {
                    return member.memberRoleType == process.env.REACT_APP_GUEST_ROLE_TYPE
                })}
                data={data}
                permission={permission}
                editable={editable}
                ostadProp={memberList.filter((member) => {
                    return member.memberRoleType === process.env.REACT_APP_OSTAD_ROLE_TYPE
                })}
                setMemberList={props.setMemberList}
            />
            <ClassAssistant
                getData={getData}
                handleComingSoon={handleComingSoon}
                memberList={memberList.filter((member) => {
                    return member.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE
                })}
                guestList={memberList.filter((member) => {
                    return member.memberRoleType == process.env.REACT_APP_GUEST_ROLE_TYPE
                })}
                data={data}
                permission={permission}
                editable={editable}
                setMemberList={props.setMemberList}
            />
            <ClassLink data={data} permission={permission} editable={editable} />
            <ClassChat handleComingSoon={handleComingSoon} data={data} permission={permission} editable={editable} />
            <ClassCount data={data} permission={permission} editable={editable} />


            {/*<ClassAbout data={data} permission={permission} editable={editable} />*/}
            {/* {data.myRights.includes("CRR_GROUP_INACTIVE") && data.active && (
                <ClassDeactive
                    data={data}
                    permission={permission}
                    editable={editable}
                    onChangeEditable={() => seteditable((prevState) => !prevState)}
                />
            )} */}

        </div>
    );
};

export default withSnackbar(SettingTab);
