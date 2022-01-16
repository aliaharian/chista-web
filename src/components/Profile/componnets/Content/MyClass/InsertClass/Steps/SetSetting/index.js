import React, { useState, memo, useCallback } from "react";
import clsx from "clsx";
import { Checkbox, Grid } from "@material-ui/core";
import jMoment from "moment-jalaali";
import { SnackbarProvider, useSnackbar } from "notistack";

import { numberFormat } from "../../../../../../../../utilities";
import DateItem from "./SettingItem/DateItem";
import OstadItem from "./SettingItem/OstadItem";
import AssistantItem from "./SettingItem/AssistantItem";
import CountMember from "./SettingItem/CountMember";
import lodash from "lodash";

// import useStyles from "../Styles";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import linkIcon from "../../../../../../../../assets/images/broken-link2.svg";
import Switch2 from "../../../../../../../form/Switch";
import BlackBoard from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import { useDispatch } from "react-redux";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import axios from 'axios'
import ChistaButton from "../../../../../../../Kit/Buttons/ChistaButton";
import ChistaSwitch from "../../../../../../../Kit/Switch/Switch";
const SetSetting = ({
    photo,
    title,
    handelStep,
    handleCloseAll,
    addContactNumber,
    memberCount,
    initialValues,
    user,
    allData,
    ...props
}) => {
    // const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [joinByLink, setJoinByLink] = useState(false);
    const [expirationTime, setExpirationTime] = useState("");
    const [ostad, setOstad] = useState(initialValues.ostad);
    const [loading, setLoading] = useState(false)
    const [assistantList, setAssistantList] = useState([]);
    const [maxMemberCnt, setMaxMemberCnt] = useState(100);
    const [validation, setValidation] = useState("");
    const [usersCount, setUsersCount] = useState(memberCount);
    const Dispatch = useDispatch();
    const toggleJoinByLink = (status) => {
        setJoinByLink(!joinByLink);
    };

    const handelExpirationTime = (date) => {
        setExpirationTime(jMoment(date).unix());
    };

    const getData = useCallback(async () => {
        let {
            addContactNumber,
            addContactList,
            photo,
            photoBase64,
            ...rest
        } = allData;
        setLoading(true)
        let tempMembers = [
            ...addContactNumber.map((item) => {
                return {

                    memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                    username: item.username || item.phone || item.number,
                };
            }),
            ...addContactList.map((item) => {
                return {
                    memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
                    username: item.username || item.phone,
                };
            }),
        ]

        let tempOstad = [
            {
                memberRoleType: process.env.REACT_APP_OSTAD_ROLE_TYPE,
                username: ostad.username || ostad.phone,
            }
        ]

        let tempAssistant = [
            ...assistantList.map((item) => {
                return {
                    memberRoleType: process.env.REACT_APP_ASSISTANT_ROLE_TYPE,
                    username: item.username || item.phone,
                };
            }),
        ]
        tempMembers = lodash.remove(tempMembers, function (n) {
            return lodash.find(tempOstad, ['username', n.username]) === undefined;
        });
        tempMembers = lodash.remove(tempMembers, function (n) {
            return lodash.find(tempAssistant, ['username', n.username]) === undefined;
        });
        const normalData = {
            members: [
                ...tempOstad,
                ...tempAssistant,
                ...tempMembers
            ],
            photo: photoBase64,
            joinByLink,
            expirationTime,
            maxMemberCnt: maxMemberCnt
                ? typeof maxMemberCnt === "number" ? maxMemberCnt : parseInt(numberFormat.toEnglishDigits(maxMemberCnt))
                : 0,
            about: rest.about,
            title: rest.title
        };

        console.log('normaldata', normalData)
        try {
            const response = await axios.post("group/insert", normalData);
            // setClassData(response.data);
            setLoading(false);
            handelStep("createClass", {
                joinByLink,
                expirationTime: parseInt(expirationTime, 10),
                ostad,
                assistantList,
                classData: response.data,
                maxMemberCnt: maxMemberCnt
                    ? typeof maxMemberCnt === "number" ? maxMemberCnt : parseInt(numberFormat.toEnglishDigits(maxMemberCnt))
                    : 0,
            });
            handleCloseAll()

        } catch (err) {
            setLoading(false)
            Dispatch(errorSnackbar(err));
        }
    });


    const handleAddMemberOstad = (list) => {
        let tempList = list
        tempList.memberRoleType = process.env.REACT_APP_OSTAD_ROLE_TYPE
        setOstad(tempList);
        setValidation({ ...validation, ostad: false });



        let allTmp = lodash.uniqWith([user, list, ...assistantList, ...allData.addContactList, ...allData.addContactNumber], (a, b) => {
            if (a.phone) {
                if (b.phone) {
                    return a.phone === b.phone
                } else {
                    return a.phone === b.username
                }
            } else {
                if (b.phone) {
                    return a.username === b.phone
                } else {
                    return a.username === b.username
                }
            }
        }
        )
        console.log('allTmp', allTmp)

        setUsersCount(allTmp.length)
    };

    const handleAddMemberAssistant = (list) => {
        setAssistantList(list);

        let allTmp = lodash.uniqWith([user, ostad, ...list, ...allData.addContactList, ...allData.addContactNumber], (a, b) => {
            if (a.phone) {
                if (b.phone) {
                    return a.phone === b.phone
                } else {
                    return a.phone === b.username
                }
            } else {
                if (b.phone) {
                    return a.username === b.phone
                } else {
                    return a.username === b.username
                }
            }
        }
        )

        console.log('allTmp', allTmp)

        setUsersCount(allTmp.length)
    };

    const submitEditCount = (value) => {
        setMaxMemberCnt(value);
        setValidation({ ...validation, maxMemberCnt: false });
    };


    const handleSubmit = () => {
        console.log('assistantList', assistantList)
        console.log('ostad', ostad)
        let ostadTmp = ostad;
        let assistantTmp = assistantList;
        if (!ostadTmp.phone) {
            ostadTmp.phone = ostadTmp.username;
        }
        assistantTmp.map((tmp, index) => {
            let sTemp = tmp;
            if (!sTemp.phone) {
                sTemp.phone = sTemp.username;
                assistantTmp[index] = sTemp;
            }
        })
        console.log('assistantTmp', assistantTmp)
        console.log('ostadTmp', ostadTmp)
        const isDuplicate = assistantTmp.some(
            (item) => item.phone === ostadTmp.phone
        );

        if (isDuplicate) {
            enqueueSnackbar("استاد و ناظر نمیتوانند یک نفر باشند", {
                variant: "warning",
            });
            return;
        }
        if (ostad) {

            let classinfo = {
                joinByLink,
                expirationTime,
                ostadTmp,
                assistantTmp,
                maxMemberCnt: maxMemberCnt
                    ? typeof maxMemberCnt === "number" ? maxMemberCnt : parseInt(numberFormat.toEnglishDigits(maxMemberCnt))
                    : 0,
            };

            if (!joinByLink) {
                getData();

            } else if (joinByLink && maxMemberCnt) {
                getData();

            } else {
                setValidation({ ...validation, maxMemberCnt: true });
            }
            return;
        }
        setValidation({ ostad: !ostad });
    };

    return (
        <div className={classes.settingWrapper}>
            <Grid>
                <Grid item md={12} className={classes.addClassHeaderSetting}>
                    <div
                        className={clsx(classes.imageWrapper, classes.classImageWrapper)}
                    >
                        {photo ? (
                            <div
                                className={clsx(
                                    classes.borderWrapper,
                                    classes.classBorderWrapper
                                )}
                            >
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt=""
                                    className={clsx(classes.image, classes.classImage)}
                                />
                            </div>
                        ) : (
                            <ProfileAvatar
                                user={{ text: title }}
                                variant="rounded"
                                content={<BlackBoard />}
                                avatar={classes.memebrAvatarClassSetting}
                                avatarContainer={classes.memebrAvatarBorder}
                                classTile={false}
                            />
                        )}
                        <div className={classes.classTitle}>
                            <p>{title}</p>
                            {memberCount ? (
                                <p>
                                    {numberFormat.toPersianDigits(usersCount)} نفر
                                </p>
                            ) : (
                                <p>بدون عضو</p>
                            )}
                        </div>
                    </div>
                </Grid>
                <Grid container className={classes.addClassSettingContainer}>

                    <OstadItem
                        addContactNumber={addContactNumber}
                        ostad={ostad}
                        allData={allData}
                        handleAddMember={handleAddMemberOstad}
                        validation={validation.ostad}
                        handleCloseAll={handleCloseAll}
                        changeMemberCount={(value) => setUsersCount(value)}
                        user={user}
                        assistantList={assistantList}

                    />
                    <AssistantItem
                        addContactNumber={addContactNumber}
                        allData={allData}
                        handleAddMember={handleAddMemberAssistant}
                        assistantList={assistantList}
                        handleCloseAll={handleCloseAll}
                        changeMemberCount={(value) => setUsersCount(value)}
                        user={user}
                        ostad={ostad}

                    />

                    <Grid item xs={12} md={12}>
                        <div className={clsx(classes.settingItem, classes.inviteWrapper)} onClick={toggleJoinByLink}>
                            <div className={clsx(classes.flex, classes.switchContainer)}>
                                <div className={classes.inviteLinkContainer}>
                                    <img src={linkIcon} alt="linkIcon" />
                                    <p>امکان ورود اعضا از طریق لینک دعوت</p>
                                </div>
                                <ChistaSwitch checked={joinByLink} onChange={toggleJoinByLink} />
                            </div>
                        </div>
                    </Grid>
                    {joinByLink && (
                        <CountMember
                            submitEditCount={submitEditCount}
                            maxMemberCnt={maxMemberCnt}
                            validation={validation.maxMemberCnt}
                        />
                    )}

                </Grid>
            </Grid>
            <div className={classes.stepBtnContainer}>
                <ChistaButton loading={loading} onClick={handleSubmit}>بعدی</ChistaButton>
            </div>
        </div>
    );
};
export default memo(SetSetting);