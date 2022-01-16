import {Dialog, Divider, Fade, Slide, useTheme, Button} from "@material-ui/core";
import close from "../../../../../../../../assets/images/close.svg";
import React, {useCallback} from "react";
import useStyles from "../../../InsertClass/Dialog/Styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SessionTableCell from "./SessionTableCell";
import TrashIcon from "../../../../../../../../assets/images/TrashIcon";
import axios from "axios";
import Style from "../../../../../../../../assets/stylesheet/index.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import SessionDetailItem from "./SessionDetailItem";
import {Scrollbars} from "react-custom-scrollbars";
import {numberFormat} from "../../../../../../../../utilities";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function SessionDetail(props) {
    const [transition, setTransition] = React.useState(false)
    const [members, setMembers] = React.useState()
    const [sessionInfo, setSessionInfo] = React.useState()
    const [openUser, setOpenUser] = React.useState()
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    console.log('pr', props)
    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })

    const getMembers = useCallback(async (id) => {
        const response = await axios.get(`member/search?groupId=${id}`);
        setMembers(response.data.result);
    }, []);

    React.useEffect(() => {
        console.log('classId', props.classId)
        !members && getMembers(props.classId)
    }, [members])


    const getSessionInfo = useCallback(async (id) => {
        const response = await axios.get(`groupSession/stat?id=${id}`);
        setSessionInfo(response.data);
    }, []);

    React.useEffect(() => {
        !sessionInfo && getSessionInfo(props.data[0].id)
    }, [sessionInfo])


    return (
        <Dialog
            fullScreen
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={Slide}
            keepMounted
            onClose={props.closeModal}
            PaperProps={{className: classes.root}}
            classes={{
                scrollPaper: classes.dialog
            }}
        >
            <>
                <div className={classes.addClassHeaderWrapper}>
                    <div className={classes.selectAddClassTitle}>
                        <div>
                            <SessionTableCell withState noAction index={props.data[1]} row={props.data[0]}/>
                        </div>

                        <img
                            src={close}
                            alt="icon"
                            onClick={props.closeModal}
                        />

                    </div>
                    {!props.noHeaderDivider && <Divider className={classes.divider}/>}
                </div>
                <div className={props.className || classes.stepContainer}
                     style={props.style || {padding: '3px 0 15px 0'}}>
                    <div className={classes.sessionDetailWrapper}>
                        {
                            sessionInfo && sessionInfo.state !== 1 &&
                            <div className={classes.sessionStats}>

                                <div>
                                    <p>تعداد اعضای حاضر</p>
                                    <p>{numberFormat.toPersianDigits(sessionInfo.memberCnt)} نفر</p>
                                </div>
                                <div>
                                    <p>متوسط زمان حضور اعضا</p>
                                    <p>{numberFormat.toPersianDigits(sessionInfo.onlineTimeSum)} دقیقه</p>
                                </div>
                                <div>
                                    <p>متوسط تاخیر اعضا</p>
                                    <p>{numberFormat.toPersianDigits(sessionInfo.delaySum)} دقیقه</p>
                                </div>
                                <div>
                                    <p>متوسط شاخص دقت</p>
                                    <p>{numberFormat.toPersianDigits(sessionInfo.precisionAvg)} ٪</p>
                                </div>

                            </div>
                        }
                        <div className={classes.sessionDetailUsers}
                             style={{height: sessionInfo && sessionInfo.state !== 1 ? 360 : 560}}>
                            <Scrollbars>
                                {
                                    members && members.map((member, index) => (
                                        <>
                                            <SessionDetailItem
                                                key={index}
                                                open={openUser === index}
                                                setOpen={() => {
                                                    openUser === index ?
                                                        setOpenUser(-1)
                                                        :
                                                        setOpenUser(index)

                                                }}
                                                sessionId={sessionInfo ? sessionInfo.id : 0}
                                                data={member}/>
                                        </>
                                    ))
                                }
                            </Scrollbars>
                        </div>
                    </div>
                </div>

            </>
        </Dialog>
    )
}

export default SessionDetail