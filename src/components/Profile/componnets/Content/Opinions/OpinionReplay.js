import React, {Fragment, useState, useRef, useEffect} from "react";
import OpinionItem from "./OpinionItem";
import axios from "axios";
import useStyles from "./Styles";
import {transform, dateTime, numberFormat} from "../../../../../utilities";
import {Avatar, Menu, MenuItem} from "@material-ui/core";
import clsx from "clsx";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import EditIcon from "@material-ui/icons/Edit";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import {useSelector, useDispatch} from "react-redux";
import {ADD_REPLAY_OPINION} from "../../../../../../redux/adviserDashboard";
import PenEdit from "../../../../../assets/images/profile/PenEditAlt";

const OpinionsReplay = ({
                            replay,
                            edit,
                            handelAnswerMode,
                            opinionId,
                            replayId,
                            index,
                        }) => {
    const classes = useStyles();
    const Dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [editMode, setEditMode] = useState(edit ?? false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [textAreaValue, setTextAreaValue] = useState(
        replay ? replay.comment : ""
    );
    const [replayComment, setReplayComment] = useState(replay?.comment ?? "");
    const [messageError, setMessageError] = useState("");
    const textAreaRef = useRef(null);
    const opinionDateTime = () => {
        const {day, month, year} = dateTime.dateTimeCustom(replay.createdTime);
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span className={classes.date}>{month}</span> <span>{year}</span>
            </div>
        );
    };

    useEffect(() => {
        if (edit) {
            setTimeout(() => {
                textAreaRef.current.focus();
                textAreaRef.current.selectionStart = textAreaRef.current.value.length;
                textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
            }, 50);
        }
    }, [edit]);

    const handelEditMode = (status) => {
        setEditMode(status);
    };

    const handelEditBtn = () => {
        setAnchorEl(null);
        handelEditMode(true);
        setTimeout(() => {
            textAreaRef.current.focus();
            textAreaRef.current.selectionStart = textAreaRef.current.value.length;
            textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
        }, 50);
    };

    const handelCloseEditMode = () => {
        if (edit) {
            handelAnswerMode();
            return;
        }
        handelEditMode(false);
        setTextAreaValue(replayComment)
        setMessageError("");
    };

    const handelOnChange = (e) => {
        setMessageError("");
        if (e.target.value.length > 100) return;
        setTextAreaValue(numberFormat.toPersianDigits(e.target.value));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handelEditComment = async () => {
        setMessageError("");
        if (!textAreaValue || textAreaValue.length<2) {
            setMessageError("حداقل ۲ کاراکتر وارد کنید");
            return;
        }
        // handel is edit or add replay mode
        if (replay) {
            try {
                const response = await axios.post(`/comment/update`, {
                    id: replayId,
                    comment: textAreaValue,
                    unknown: false,
                });
                if (response.status === 200) {
                    setReplayComment(textAreaValue);
                    handelEditMode(false);
                }
            } catch (err) {
                setMessageError(err.response.data.message);
            }
        } else {
            try {
                const response = await axios.post(`/comment/reply?id=${opinionId}`, {
                    comment: textAreaValue,
                });
                if (response.status === 200) {
                    Dispatch({
                        type: ADD_REPLAY_OPINION,
                        payload: {
                            id: response.data.sortedReplies[0].id,
                            index,
                            textAreaValue,
                            userFullName: user.fullName,
                            timestamp: new Date().getTime() / 1000,
                        },
                    });
                    handelAnswerMode();
                    // setMessageError(response.data.message);
                }
            } catch (err) {
                setMessageError(err.response.data.message);
            }
        }
    };

    return (
        <div className={classes.replayWrapper}>
            <div className={classes.headerWrapperReply}>
                <div className={classes.opinionAvatarWrapper}>
                    {/*<ProfileAvatar*/}
                    {/*  user={replay?.fullName || user}*/}
                    {/*  variant="rounded"*/}
                    {/*  avatar={classes.opinionAvatarOpinionReplay}*/}
                    {/*  avatarContainer={classes.opinionReplayAvatarBorder}*/}
                    {/*/>*/}
                    <div className={classes.opinionNameWrapper}>
                        <div className={classes.replyNameWrapper}>
                            <p>{replay ? replay.userFullName : user.fullName}
                            </p>
                            {replay?.createdTime && (
                                opinionDateTime()
                            )}
                        </div>
                        <div className={classes.ostad}>
                            {editMode ? (
                                <textarea
                                    ref={textAreaRef}
                                    value={textAreaValue}
                                    onChange={handelOnChange}
                                    className={classes.editText}
                                />
                            ) : (
                                <p className={classes.opinionText}>{replayComment}</p>
                            )}
                        </div>
                        {/*{replay?.createdTime && (*/}
                        {/*  <div className={classes.dateRes}>{opinionDateTime()}</div>*/}
                        {/*)}*/}
                    </div>
                </div>
                <div className={classes.actionsWrapper}>
                    <p className={classes.messageError}>{messageError}</p>
                    {/*{replay?.createdTime && !editMode && (*/}
                    {/*  // <div className={classes.dateDesk}>{opinionDateTime()}</div>*/}
                    {/*)}*/}
                    {editMode ? (
                        <div className={classes.actionBtnWrapper}>
                            <p className={classes.charCount}>
                                ( {numberFormat.toPersianDigits(100)} /
                                {numberFormat.toPersianDigits(textAreaValue.length)} کاراکتر )
                            </p>

                            <CloseRoundedIcon
                                className={classes.actionBtnClose}
                                onClick={handelCloseEditMode}
                            />
                            <CheckRoundedIcon
                                onClick={handelEditComment}
                                className={classes.actionBtnCheck}
                            />
                        </div>
                    ) : (
                        <Fragment>
                            <button
                                onClick={handelEditBtn}
                                className={clsx(classes.actionsBtn, classes.actionsBtnEdit)}
                            >
                                <PenEdit style={{marginLeft: 7, color: '#0c0b31'}}/>
                                ویرایش
                            </button>
                            <EditIcon
                                onClick={handelEditBtn}
                                className={classes.actionEditIcon}
                            />
                        </Fragment>
                    )}
                </div>
            </div>
            {/*{editMode ? (*/}
            {/*    <textarea*/}
            {/*        ref={textAreaRef}*/}
            {/*        value={textAreaValue}*/}
            {/*        onChange={handelOnChange}*/}
            {/*        className={classes.editText}*/}
            {/*    />*/}
            {/*) : (*/}
            {/*    <p className={classes.opinionText}>{replayComment}</p>*/}
            {/*)}*/}
        </div>
    );
};

export default OpinionsReplay;
