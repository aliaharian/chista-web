import React, {useState, useRef, Fragment} from "react";
import axios from "axios";
import {Avatar, MenuItem, Menu, Dialog} from "@material-ui/core";
import useStyles from "./Styles";
import {dateTime, transform, numberFormat} from "../../../../../utilities";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import OpinionReplay from "./OpinionReplay";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import PenEdit from "../../../../../assets/images/profile/PenEdit";
import Reply from "../../../../../assets/images/profile/Reply";
import Like from "../../../../../assets/images/profile/Like";
import Flag from "../../../../../assets/images/profile/Flag";
import ReplyFill from "../../../../../assets/images/profile/ReplyFill";
import FlagFill from "../../../../../assets/images/profile/FlagFill";
import {withSnackbar} from "notistack";
import {errorSnackbar} from "../../../../../../redux/user";

const OpinionItem = ({opinion, index , enqueueSnackbar}) => {
    const classes = useStyles();
    const [messageError, setMessageError] = useState("");
    const [messageErrorRRR, setMessageErrorRRR] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [answerMode, setAnswerMode] = useState(false);
    const Dispatch = useDispatch();
    const fillStar = opinion.rate
        ? Array(parseInt(opinion.rate))?.fill("star")
        : [];

    const grayStar = opinion.rate
        ? Array(parseInt(5 - opinion.rate))?.fill("star")
        : [];

    const handelAnswerMode = () => {
        setAnswerMode(true);
        handleClose();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handelReport = async () => {
        setMessageErrorRRR("");
        handleClose();
        try {
            const response = await axios.get(`/comment/report?id=${opinion.id}`);
            if (response.status === 200) {
                console.log('ok')
                enqueueSnackbar("گزارش شما با موفقیت ارسال شد، منتظر بررسی باشید", {
                    variant: 'info',
                    // persist:true,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
                // setMessageErrorRRR("گزارش شما با موفقیت ارسال شد، منتظر بررسی باشید");
            }
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err =>>", err);
            // setMessageErrorRRR(err.response.data.message);
        }
    };
    const opinionDateTime = () => {
        const {day, month, year} = dateTime.dateTimeCustom(opinion.createdTime);
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span className={classes.date}>{month}</span> <span>{year}</span>
            </div>
        );
    };

    return (
        <div className={classes.itemWrapper}>
            <div className={classes.headerWrapper}>
                <div className={classes.opinionAvatarWrapper}>
                    <ProfileAvatar
                        user={opinion}
                        variant="rounded"
                        avatar={classes.opinionAvatarOpinion}
                        avatarContainer={classes.opinionAvatarBorder}
                    />
                    <div className={classes.opinionNameWrapper}>
                        <p>{numberFormat.toPersianDigits(opinion.userFullName)}</p>
                        <p>
                            {opinionDateTime()}

                            {/*<div style={{height:24}}>*/}
                            {/*    {grayStar.length > 0 &&*/}
                            {/*    grayStar.map((val, index) => (*/}
                            {/*        <StarRoundedIcon*/}
                            {/*            fontSize={"small"}*/}
                            {/*            style={{*/}
                            {/*                color: "#c5c9cc",*/}
                            {/*            }}*/}
                            {/*            key={index}*/}
                            {/*        />*/}
                            {/*    ))}*/}
                            {/*    {fillStar.length > 0 &&*/}
                            {/*    fillStar.map((val, index) => (*/}
                            {/*        <StarRoundedIcon*/}
                            {/*            fontSize={"small"}*/}
                            {/*            style={{*/}
                            {/*                color: "#FFD803",*/}
                            {/*            }}*/}
                            {/*            key={index}*/}
                            {/*        />*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                        </p>

                    </div>
                </div>
                <p className={classes.opinionText}>
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
                    <p>
                        {opinion.comment}
                    </p>
                    <div className={classes.actionsWrapper}>
                        <div>
                            <Like/>
                            {numberFormat.toPersianDigits(opinion.likeCnt)}
                        </div>

                        {opinion.comment &&
                        !opinion.replied &&
                        (
                            <>
                                <div onClick={handelReport} className={ opinion.reported?classes.activeAction:''}>
                                    {
                                        opinion.reported ? <FlagFill/> : <Flag/>
                                    }                                    گزارش
                                </div>
                                <div className={answerMode?classes.activeAction:''} onClick={handelAnswerMode}>
                                    {
                                        answerMode ? <ReplyFill/> : <Reply/>
                                    }

                                    پاسخ
                                </div>
                            </>
                            // <Fragment>
                            //     {/*<p className={classes.messageError}>{messageErrorRRR}</p>*/}
                            //     <button
                            //         onClick={handelAnswerMode}
                            //         className={clsx(classes.actionsBtn, classes.actionsBtnAnswer)}
                            //     >
                            //         <Reply />
                            //         پاسخ دادن
                            //     </button>
                            //     {/*<button*/}
                            //     {/*    onClick={handelReport}*/}
                            //     {/*    className={clsx(classes.actionsBtn, classes.actionBtnReport)}*/}
                            //     {/*>*/}
                            //     {/*    گزارش*/}
                            //     {/*</button>*/}
                            //
                            //
                            //     <MoreVertIcon
                            //         aria-controls="more"
                            //         aria-haspopup="true"
                            //         onClick={handleClick}
                            //         className={classes.editBtnRes}
                            //     />
                            //     <Menu
                            //         id="more"
                            //         anchorEl={anchorEl}
                            //         keepMounted
                            //         open={Boolean(anchorEl)}
                            //         onClose={handleClose}
                            //     >
                            //         <MenuItem onClick={handelAnswerMode} className={classes.hiddenDesktop}>پاسخ</MenuItem>
                            //         <MenuItem onClick={handelReport}>گزارش</MenuItem>
                            //     </Menu>
                            // </Fragment>
                        )}
                        {/*{opinion.comment && opinion.replied && (*/}
                        {/*    <Fragment>*/}
                        {/*        <p className={classes.messageError}>{messageErrorRRR}</p>*/}

                        {/*        <MoreVertIcon*/}
                        {/*            aria-controls="more"*/}
                        {/*            aria-haspopup="true"*/}
                        {/*            onClick={handleClick}*/}
                        {/*            className={classes.editBtnRes}*/}
                        {/*        />*/}
                        {/*        <Menu*/}
                        {/*            id="more"*/}
                        {/*            anchorEl={anchorEl}*/}
                        {/*            keepMounted*/}
                        {/*            open={Boolean(anchorEl)}*/}
                        {/*            onClose={handleClose}*/}
                        {/*        >*/}
                        {/*            <MenuItem onClick={handelReport}>گزارش</MenuItem>*/}
                        {/*        </Menu>*/}
                        {/*    </Fragment>*/}
                        {/*)}*/}
                    </div>


                </p>


            </div>


            {opinion.replied &&
            opinion.sortedReplies.map((replay, index) => (
                <OpinionReplay
                    replay={replay}
                    index={index}
                    replayId={replay.id}
                    opinionId={opinion.id}
                    handelAnswerMode={() => setAnswerMode(false)}
                />
            ))}
            {messageErrorRRR && (
                <Dialog
                    onClose={() => setMessageErrorRRR("")}
                    aria-labelledby="simple-dialog-title"
                    open={true}
                    classes={{root: classes.messageErrorModal}}
                    PaperProps={{className: classes.messageErrorModalContent}}
                >
                    {messageErrorRRR}
                </Dialog>
            )}
            {answerMode && (
                <OpinionReplay
                    index={index}
                    edit
                    handelAnswerMode={() => setAnswerMode(false)}
                    opinionId={opinion.id}
                />
            )}
        </div>
    );
};

export default withSnackbar((OpinionItem));
