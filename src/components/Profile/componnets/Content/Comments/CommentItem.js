import React, {useState, useRef, Fragment} from "react";
import axios from "axios";
import {Avatar, MenuItem, Menu, Dialog, Grid} from "@material-ui/core";
import useStyles from "./Styles";
import {dateTime, transform, numberFormat} from "../../../../../utilities";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import CommentReplay from "./CommentReplay";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import Icon from "../../../../Icon/Icon";
import editIcon from "../../../../../assets/images/penEditAlt.svg";
import {errorSnackbar} from "../../../../../../redux/user";
import {useDispatch} from "react-redux";

const CommentItem = ({comment}) => {
    const classes = useStyles();
    const textAreaRef = useRef(null);

    const [editMode, setEditMode] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState(comment.comment);
    const [commentValue, setCommentValue] = useState(comment.comment);
    const [messageError, setMessageError] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const Dispatch = useDispatch();
    const commentDateTime = () => {
        const {day, month, year} = dateTime.dateTimeCustom(comment.createdTime);
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span className={classes.date}>{month}</span> <span>{year}</span>
            </div>
        );
    };

    const fillStar = comment.rate
        ? Array(parseInt(comment.rate))?.fill("star")
        : [];

    const grayStar = comment.rate
        ? Array(parseInt(5 - comment.rate))?.fill("star")
        : [];

    const handelEditMode = (status) => {
        setEditMode(status);
    };

    const handelOnChange = (e) => {
        setMessageError("");
        if (e.target.value.length > 1000) return;
        setTextAreaValue(e.target.value);
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
        setTextAreaValue(commentValue)
        handelEditMode(false);
        setMessageError("");
    };

    const handelEditComment = async () => {
        setMessageError("");
        if (!textAreaValue || textAreaValue <2) {
            setMessageError("حداقل ۲ کاراکتر وارد کنید");
            return;
        }
        try {
            const response = await axios.post(`/comment/update`, {
                id: comment.id,
                comment: textAreaValue,
                unknown: false,
            });
            if (response.status === 200) {
                setEditMode(false);
                setCommentValue(textAreaValue);
            }
        } catch (err) {
            Dispatch(errorSnackbar(err));
            setMessageError(err.response.data.message);
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.itemWrapper}>
            {    console.log('com',comment) }

            <div className={classes.headerWrapper}>
                <div className={classes.commentAvatarWrapper}>
                    {/*<div className={classes.commentAvatarBorder}>*/}
                    {/*<Avatar*/}
                    {/*  src={transform.getImage(comment.userImageProfile)}*/}
                    {/*  className={classes.commentAvatar}*/}
                    {/*/>*/}

                    <ProfileAvatar user={comment} showAdviser variant="circle" avatar={classes.commentAvatar}
                                   status={classes.status + " " + transform.parseStatus(comment.state, classes)}
                                   avatarContainer={classes.commentAvatarContainer}/>
                    {/*</div>*/}
                    <div className={classes.commentNameWrapper}>
                        <p>{comment.advisorFullName}</p>
                        <div className={classes.commentDateTime}>{commentDateTime()}</div>
                    </div>
                </div>
                <div className={classes.actionsTime}>
                    {/*{!editMode &&*/}
                    {/*<div className={classes.commentDateTime}>{commentDateTime()}</div>*/}
                    {/*}*/}
                    {comment.comment &&
                    !comment.replied &&
                    (editMode ? (
                        <div className={classes.actionBtnWrapper}>
                            <p className={classes.messageError}>{messageError}</p>
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
                            <button onClick={handelEditBtn} className={classes.editBtn}>
                                <Icon src={editIcon}/>

                                ویرایش
                            </button>
                            <MoreVertIcon
                                aria-controls="more"
                                aria-haspopup="true"
                                onClick={handleClick}
                                className={classes.editBtnRes}
                            />
                            <Menu
                                id="more"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handelEditBtn}>
                                    ویرایش
                                </MenuItem>
                            </Menu>
                        </Fragment>
                    ))}
                </div>
            </div>
            {editMode ? (
                <textarea
                    ref={textAreaRef}
                    value={textAreaValue}
                    onChange={handelOnChange}
                    className={classes.editText}
                />
            ) : (
                <p className={classes.commentText}>
                    <div>
                        {grayStar.length > 0 &&
                        grayStar.map((val, index) => (
                            <StarRoundedIcon
                                fontSize={"small"}
                                style={{
                                    color: "#c5c9cc",
                                }}
                                key={index}
                            />
                        ))}
                        {fillStar.length > 0 &&
                        fillStar.map((val, index) => (
                            <StarRoundedIcon
                                fontSize={"small"}
                                style={{
                                    color: "#FFD803",
                                }}
                                key={index}
                            />
                        ))}
                    </div>
                    {commentValue}
                </p>
            )}

            {comment.replied &&
            comment.sortedReplies.map((replay, index) => (
                <CommentReplay replay={replay}/>
            ))}
            {messageError && (
                <Dialog
                    onClose={() => setMessageError("")}
                    aria-labelledby="simple-dialog-title"
                    open={true}
                    classes={{root: classes.messageErrorModal}}
                    PaperProps={{className: classes.messageErrorModalContent}}
                >
                    {messageError}
                </Dialog>
            )}
        </div>
    );
};

export default CommentItem;
