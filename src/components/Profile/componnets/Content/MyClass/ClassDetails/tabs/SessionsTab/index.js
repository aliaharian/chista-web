import React, {useCallback, useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import axios from "axios";
import {Paper, Divider, Grid, Table, TableBody, TableContainer} from "@material-ui/core";
import addUser from "../../../../../../../../assets/images/add-user.svg";

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SessionTableCell from "./SessionTableCell";
import noData from '../../../../../../../../assets/images/no_result_search.svg'
import useStyles from "../../Styles";
import LoginClass from "../../../../../../../../assets/images/loginClass";
import historyIcon from '../../../../../../../../assets/images/userHistory.svg'
import {withSnackbar} from "notistack";
import AddSession from "../../../InsertClass/Steps/AddSessions/SessionItem/AddSession";
import ConfirmSession from "../../../InsertClass/Steps/AddSessions/SessionItem/ConfirmSession";
import {joinToClass} from "../../../../../../../../../redux/groups";
import DeleteSession from "./DeleteSession";
import AddNextWeekError from "./AddNextWeekError";
import SessionDetail from "./SessionDetail";
import {errorSnackbar, infoSnackbar} from "../../../../../../../../../redux/user";
const SessionsTab = ({index, id, enqueueSnackbar}) => {
    const classes = useStyles();
    const Dispatch = useDispatch();
    const [sessionList, setSessionList] = useState([]);
    const [filteredList, setFilteredList] = useState();
    const [addSessionDialog, setAddSessionDialog] = useState(false);
    const [confirmSessionDialog, setConfirmSessionDialog] = useState(false);
    const [deleteSessionDialog, setDeleteSessionDialog] = useState(false);
    const [recentlyAddedSession, setRecentlyAddedSession] = useState();
    const [selectedSession, setSelectedSession] = useState();
    const [editableSession, setEditableSession] = useState(false);
    const [addNextWeekError, setAddNextWeekError] = useState(false);
    const [sessionDetail, setSessionDetail] = useState(false);

    const [classId, setClassId] = useState(id || 0);

    const getData = useCallback(async (id) => {
        const response = await axios.get(`groupSession/search?groupId=${id}`);
        setSessionList(response.data.result);
    }, []);

    useEffect(() => {
        id && getData(classId);
    }, [id]);

    const filterList = (value) => {
        const filteredData = sessionList.filter((item) => {
            console.log('include calls in addFromContactModal')
            item.fullName.includes(value)
        });

        setFilteredList(filteredData);
    };


    const handleComingSoon = () =>{
        Dispatch(infoSnackbar(0))
    }
    const editSession = useCallback(async (data, id) => {
        const response = await axios.post(`groupSession/update`, {
            id: id,
            "startTime": data.startTime,
            "startHour": data.startHour,
            "endHour": data.endHour
        });
        getData(classId)
        setAddSessionDialog(false)

    }, []);

    const handleSubmitAddSession = (data, edit) => {
        if (edit) {
            console.log(edit)
            editSession(data, edit.id)
        } else {
            setRecentlyAddedSession(data)
            setConfirmSessionDialog(true)
            setAddSessionDialog(false)
        }
    }

    const addSession = useCallback(async (id, data) => {
        const response = await axios.post(`group/addSessions`, {
            id: id,
            groupSessions: [...data]
        });
        setSessionList(response.data.groupSessions);
        setConfirmSessionDialog(false)
    }, [])

    const handleSubmitConfirmSession = (data) => {
        // let tmp = [...sessionList]
        // data.map((sess) => {
        //     tmp.push(sess)
        // })
        // setSessionList(tmp)
        addSession(classId, data)
    }

    const deleteSession = useCallback(async (id) => {
        const response = await axios.delete(`groupSession/delete?id=${id}`);
        getData(classId)
        setDeleteSessionDialog(false)
        // setSessionList(response.data.groupSessions);
    }, [])

    const handleDelete = (data) => {
        deleteSession(data.id)
    }

    const doAddNextWeek = useCallback(async (id) => {
        try {
            const response = await axios.post(`groupSession/addNextWeek?id=${id}`);
            getData(classId)
        } catch (e) {
            Dispatch(errorSnackbar(e));

            console.log(e.response.data.message)
            setAddNextWeekError(true)

        }
        // setSessionList(response.data.groupSessions);
    }, [])

    const handleAddNextWeek = (data) => {
        doAddNextWeek(data[0].id)
    }


    return (
        <div
            role="tabpanel"
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {sessionList && sessionList.length > 0 && (
                <div className={classes.userHeader}>

                    <div
                        className={clsx(
                            classes.searchDesktop,
                            classes.search,
                            classes.searchExpand
                        )}
                    >
                        <input name="title" placeholder={`جستجو `} onChange={(e) => filterList(e.target.value)}/>
                        <SearchRoundedIcon className={classes.searchIcon}/>
                    </div>

                    <button
                        type="button"
                        className={classes.addUserBTN}
                        onClick={() => {
                            setEditableSession(false)
                            setAddSessionDialog(true)
                        }}
                    >
                        <div className={classes.iconWrapper}>
                            <AddBoxOutlinedIcon/>
                        </div>
                        <span>تعریف جلسه جدید</span>
                    </button>
                </div>

            )}

            <Grid className={classes.myClassDesktop}>
                <Grid container className={classes.table}>
                    {sessionList.length > 0 ? (
                            <Grid container className={classes.sessionsContainer}>
                                {(filteredList || sessionList).map((row, index) => (
                                    <SessionTableCell
                                        handleDelete={(item) => {
                                            setSelectedSession(item)
                                            setDeleteSessionDialog(true)
                                        }}
                                        handleAddNextWeek={(item) => {
                                            setSelectedSession(item)
                                            handleAddNextWeek(item)
                                        }}
                                        handleEdit={(item) => {
                                            setSelectedSession(item)
                                            setEditableSession(item)
                                            setAddSessionDialog(true)
                                        }}
                                        handleSessionDetail={(item) => {
                                            setSelectedSession(item)
                                            setSessionDetail(true)
                                        }}
                                        row={row} index={index + 1}
                                        key={row.id}/>
                                ))}
                            </Grid>
                        ) :
                        <Grid className={classes.nodata}>
                            <img src={noData} alt=""/>
                            <p>جلسه ای برای این کلاس تنظیم نشده است</p>
                            <p>جلسات خود را در این قسمت ایجاد نمایید</p>
                            <button className={clsx(classes.join, classes.addSessionBtn)}
                                    onClick={() => {
                                        setEditableSession(false)
                                        setAddSessionDialog(true)
                                    }}
                            >
                                <AddBoxOutlinedIcon className={classes.loginClassIcon}/>
                                <span>جلسه جدید</span>
                            </button>
                        </Grid>


                    }
                </Grid>
            </Grid>
            {addSessionDialog &&
            <AddSession editableSession={editableSession} sessions={sessionList}
                        closeModal={() => setAddSessionDialog(false)} open={addSessionDialog}
                        handleSubmit={handleSubmitAddSession}/>}
            {
                confirmSessionDialog &&
                <ConfirmSession sessions={sessionList} closeModal={() => setConfirmSessionDialog(false)}
                                open={confirmSessionDialog}
                                handleSubmit={handleSubmitConfirmSession}
                                data={recentlyAddedSession}
                />
            }
            {
                deleteSessionDialog &&
                <DeleteSession closeModal={() => setDeleteSessionDialog(false)}
                               open={deleteSessionDialog}
                               handleSubmit={handleDelete}
                               data={selectedSession}
                />
            }
            {
                addNextWeekError &&
                <AddNextWeekError closeModal={() => setAddNextWeekError(false)}
                                  open={addNextWeekError}
                                  data={selectedSession}
                />
            }
            {
                sessionDetail &&
                <SessionDetail closeModal={() => setSessionDetail(false)}
                               open={sessionDetail}
                               data={selectedSession}
                               classId={classId}
                />
            }


        </div>
    );
};

export default withSnackbar(SessionsTab);
