import {withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Style from "../../../../../../../../assets/stylesheet/index.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, {useCallback} from "react";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import useStyles from './Styles'
import dateTime from "../../../../../../../../utilities/dateTime";
import axios from "axios";
import {numberFormat} from "../../../../../../../../utilities";

const Accordion = withStyles(theme => ({
    root: {
        // width:'calc(100% - 15px)',
        borderBottom: '1px solid ' + theme.textColor.border,
        paddingRight: 35,
        marginLeft: 35,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 25,
            paddingTop:15,
            paddingBottom:15
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            paddingRight: 35,
            marginLeft: 35,
            [theme.breakpoints.down("sm")]: {
                marginLeft: 25,
                paddingTop:15,
                paddingBottom:15,
                marginTop:0
            },
        },
    },
    expanded: {},
}))(MuiAccordion);
const AccordionSummary = withStyles(theme => ({

    root: {
        padding: '0',
        backgroundColor: 'transparent',
        // border: '1px solid #0c0b3126',
        borderBottom: '1px solid transparent',
        '&:not(:last-child)': {
            // borderRight: '1px solid #0c0b3126',
            // borderLeft: '1px solid #0c0b3126',
            transition: 'all 0.4s ease-in-out'
        },


        '&$expanded': {
            // padding: '35px 35px 20px 35px',

            minHeight: 'unset',
            borderBottom: '1px solid transparent',
            transition: 'all 0.1s ease-in-out'
        },
    },
    content: {
        margin: ' 0',
        '& h4': {
            margin: ' 0',
            padding: '0'
        },


        '&$expanded': {
            margin: '0 0 0 0',

        },
    },
    expanded: {},
}))(MuiAccordionSummary);
const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid transparent',
        paddingLeft: 16,
        paddingRight: 9,
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
        // borderRight: '1px solid #0c0b3126',
        // borderLeft: '1px solid #0c0b3126',
        [theme.breakpoints.down("sm")]: {
            marginTop:5,

        },
        '& p': {
            marginTop: 0,
            marginBottom: 0,
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: 16,
        },
    },
}))(MuiAccordionDetails);


function SessionDetailItem({data, ...props}) {
    const classes = useStyles()
    const [memberStats, setMemberStats] = React.useState()
    const getMemberSessionInfo = useCallback(async (sessionId, memberId) => {
        const response = await axios.get(`groupSession/stat?id=${sessionId}&memberId=${memberId}`);
        setMemberStats(response.data);
        props.setOpen()
    }, []);

    const handleChange = () => {
        if(!memberStats){
            getMemberSessionInfo(props.sessionId, data.id)
        }else{
            props.setOpen()
        }

    }

    return (
        <Accordion expanded={props.open} item
                   onChange={() => {
                       handleChange()
                   }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <ProfileAvatar
                    user={data}
                    variant="rounded"
                    avatar={classes.memebrAvatarOpinion}
                    avatarContainer={classes.memebrAvatarBorder}
                />
                <div className={classes.memebrNameWrapper}>
                    <p>
                        {
                            data.fullName && data.fullName
                        }
                        {
                            !data.fullName && data.firstName && data.firstName
                        }
                        {/*{*/}
                        {/*    !data.fullName && data.lastName && ' ' + data.lastName*/}
                        {/*}*/}
                        {
                            !data.fullName && !data.firstName && !data.lastName && data.phone
                        }
                        {
                            !data.fullName && !data.firstName && !data.lastName && !data.phone && number
                        }
                    </p>

                    <p>
                        {
                            data.memberRoleStr
                        }
                    </p>
                </div>
            </AccordionSummary>

            <AccordionDetails className={Style.singleEtcBody}>
                {
                    memberStats &&
                    <div className={classes.sessionStats}>
                        <div>
                            <p>زمان حضور</p>
                            <p>{numberFormat.toPersianDigits(Math.floor(memberStats.myOnlineTime/60))} دقیقه</p>
                        </div>
                        <div>
                            <p>تاخیر </p>
                            <p>{numberFormat.toPersianDigits(Math.floor(memberStats.myDelay/60))} دقیقه</p>
                        </div>
                        <div>
                            <p> شاخص دقت</p>
                            <p>{numberFormat.toPersianDigits(memberStats.myPrecisionAvg)} ٪</p>
                        </div>
                    </div>
                }
            </AccordionDetails>

        </Accordion>

    )
}

export default SessionDetailItem