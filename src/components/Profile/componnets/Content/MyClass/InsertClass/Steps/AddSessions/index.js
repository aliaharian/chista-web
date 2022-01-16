import React, {useState, memo} from "react";
import clsx from "clsx";
import {Checkbox, Grid, Divider} from "@material-ui/core";
import jMoment from "moment-jalaali";
import {SnackbarProvider, useSnackbar} from "notistack";

import {numberFormat} from "../../../../../../../../utilities";

import useStyles from "../Styles";

import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import checkboxEmpty from "../../../../../../../../assets/images/checkbox-empty.svg";
import checkboxChecked from "../../../../../../../../assets/images/checkbox-checked.svg";
import addIcon from "../../../../../../../../assets/images/addRect.svg";
import noData from "../../../../../../../../assets/images/no_result_search.svg";
import SessionItem from "./SessionItem/SessionItem";
import AddSession from "./SessionItem/AddSession";
import ConfirmSession from "./SessionItem/ConfirmSession";
import {Scrollbars} from "react-custom-scrollbars";

const ShowSessions = ({
                          photo,
                          title,
                          handelStep,
                          handleCloseAll,
                          memberCount,
                          allData,
                          initialValues,
                          ...props
                      }) => {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const [sessions, setSessions] = React.useState(initialValues.sessions || [])
    const [addSessionDialog, setAddSessionDialog] = React.useState(false)
    const [confirmSessionDialog, setConfirmSessionDialog] = React.useState(false)
    const [recentlyAddedSession, setRecentlyAddedSession] = React.useState()
    const [editableSession, setEditableSession] = React.useState(null)
    const handleSubmit = () => {
        if (sessions.length === 0) {
            handelStep("createClass", {});
            handleCloseAll();
        } else {
            handelStep("sessionSetting", {
                "groupSessions": [...sessions]
            });
        }

    }
    const handleSubmitAddSession = (data, edit = false) => {
        if (edit) {
            let tmp = [...sessions];
            let editableSessionIndex = tmp.findIndex(item => item === editableSession);
            // tmp[editableSessionIndex].startTime = data.startTime
            // tmp[editableSessionIndex].startHour = data.startHour
            // tmp[editableSessionIndex].endHour = data.endHour
            tmp[editableSessionIndex] = data
            setSessions(tmp)
            setAddSessionDialog(false)
        } else {
            setRecentlyAddedSession(data)
            setConfirmSessionDialog(true)
            setAddSessionDialog(false)
        }

    }
    const handleSubmitConfirmSession = (data) => {

        let tmp = [...sessions]
        data.map((sess) => {
            tmp.push(sess)
        })
        setSessions(tmp)
        setConfirmSessionDialog(false)
    }
    const handleDelete = (data) => {
        let dataIndex = sessions.findIndex(item => item === data)
        if (dataIndex !== -1) {
            let tmp = [...sessions];
            tmp.splice(dataIndex, 1)
            setSessions(tmp)
        }
    }
    const handleEdit = (data) => {
        setEditableSession(data)
        setAddSessionDialog(true)
    }

    return (<>
            {
                addSessionDialog &&
                <AddSession editableSession={editableSession} sessions={sessions}
                            closeModal={() => setAddSessionDialog(false)} open={addSessionDialog}
                            handleSubmit={handleSubmitAddSession}/>
            }
            {
                confirmSessionDialog &&
                <ConfirmSession sessions={sessions} closeModal={() => setConfirmSessionDialog(false)}
                                open={confirmSessionDialog}
                                handleSubmit={handleSubmitConfirmSession}
                                data={recentlyAddedSession}
                />
            }
            <div className={classes.settingWrapper}>
                <Grid container spacing={4}>
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
                                    user={{text: title}}
                                    variant="rounded"
                                    avatar={classes.memebrAvatarOpinion}
                                    avatarContainer={classes.memebrAvatarBorder}
                                />
                            )}
                            <div className={classes.classTitle}>
                                <p>{title}</p>
                                {memberCount ? (
                                    <p>
                                        {numberFormat.toPersianDigits(memberCount)}
                                        نفر
                                    </p>
                                ) : (
                                    <p>بدون عضو</p>
                                )}
                            </div>
                        </div>
                    </Grid>
                    {/*<hr className={classes.divider}/>*/}
                    <Grid container className={classes.addClassSettingContainer}>
                        <div className={classes.addSessionButton} onClick={() => {
                            setEditableSession(null)
                            setAddSessionDialog(true)
                        }}>
                            <img src={addIcon} alt=""/>
                            <p>تعریف جلسه جدید </p>
                        </div>
                        <Divider className={classes.sessionDivider}/>

                        <div className={classes.sessionsContainer}>
                            <Scrollbars className={classes.scrollBar}>
                                {sessions && sessions.length > 0
                                    ?
                                    sessions.map((session, index) =>
                                        (
                                            <SessionItem key={index} handleEdit={handleEdit} editable handleDelete={handleDelete}
                                                         noPadding data={session}
                                                         index={index + 1}/>
                                        )
                                    )
                                    :
                                    <p className={classes.noMember}>
                                        <img src={noData} alt=""/>
                                        جلسه ای تعریف نشده است
                                    </p>
                                }
                            </Scrollbars>

                        </div>


                    </Grid>
                </Grid>
                <button className={classes.stepBTN} onClick={handleSubmit}>
                    بعدی
                </button>
            </div>
        </>
    );
};

export default memo(ShowSessions);
