import DialogLayout from "../../SetSetting/SettingItem/DialogLayout";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import JalaliUtils from "@date-io/jalaali";
import Select from "@material-ui/core/Select";
import {dateTime, numberFormat, transform} from "../../../../../../../../../utilities";
import React from "react";
import useStyles from './Style'
import SessionItem from "./SessionItem";
import {Scrollbars} from "react-custom-scrollbars";
import jMoment from "moment-jalaali";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StyledMenu from "../../../../../../../../menu/StyledMenu";
import {MenuItem} from "@material-ui/core";
import Link from "../../../../../../../../Link/Link";
import clsx from "clsx";
import AddIcon from '@material-ui/icons/Add';
import dangerIcon from '../../../../../../../../../assets/images/warning.svg'

function ConfirmSession(props) {
    const classes = useStyles()
    const [lastSession, setLastSession] = React.useState(props.data)
    const [addedSessions, setAddedSessions] = React.useState([props.data])
    const [error, setError] = React.useState('')
    let tmp;
    // console.log('props.data', props.data)

    React.useEffect(() => {
        addedSessions.length === 0 && props.closeModal()
    }, [addedSessions])
    const handleSubmit = () => {
        props.handleSubmit(addedSessions)
    }
    const handleDelete = (data) => {
        let dataIndex = addedSessions.findIndex(item => item === data)
        if (dataIndex !== -1) {
            if (dataIndex === addedSessions.length - 1) {
                setLastSession(addedSessions[dataIndex - 1])
            }
            if (addedSessions.length === 1) {
                props.closeModal()
            }
            tmp = [...addedSessions];
            tmp.splice(dataIndex, 1)
            setAddedSessions(tmp)
        }
    }

    const handleAddNextWeek = () => {
        let flag = true
        let nextWeek = new Date(lastSession.startTime * 1000)
        nextWeek.setDate(nextWeek.getDate() + 7)
        let conflict = false
        props.sessions.map((session) => {
            if (
                dateTime.dateTimeCustom(jMoment(nextWeek).unix()).day === dateTime.dateTimeCustom(session.startTime).day &&
                dateTime.dateTimeCustom(jMoment(nextWeek).unix()).month === dateTime.dateTimeCustom(session.startTime).month &&
                dateTime.dateTimeCustom(jMoment(nextWeek).unix()).year === dateTime.dateTimeCustom(session.startTime).year
            ) {
                conflict = transform.periodConflict(lastSession.startHour, lastSession.endHour, session.startHour, session.endTime)
            }
        })
        if (conflict) {
            flag = false
            setError('شما در هفته بعد همین ساعت جلسه دیگری دارید.')
        } else {
            setError('')
            flag = true
        }

        if (flag) {
            setLastSession(
                {
                    startTime: jMoment(nextWeek).unix(),
                    startHour: lastSession.startHour,
                    endHour: lastSession.endHour,
                    state:1
                }
            )
            tmp = addedSessions;
            tmp.push(
                {
                    startTime: jMoment(nextWeek).unix(),
                    startHour: lastSession.startHour,
                    endHour: lastSession.endHour,
                    state:1
                }
            )
            setAddedSessions(tmp)
        }
    }

    return (
        <DialogLayout className={classes.dialogContainer} open={props.open} closeModal={props.closeModal}
                      title={`تایید جلسات`}>
            {error !== '' && <div className={classes.errorContainer}>
                <img src={dangerIcon} alt=""/>

                <p>
                    {error}
                </p>
            </div>}
            <div className={classes.confirmSessionContainer}>
                <Scrollbars className={classes.scrollBar}>
                    {
                        addedSessions && addedSessions.length > 0 && addedSessions.map((session, index) => (
                            <SessionItem data={session} index={index + 1} key={index} handleDelete={handleDelete}/>
                        ))

                    }

                    <div className={clsx(classes.sessionItemContainer, classes.addSessionNextWeekContainer)}
                         onClick={handleAddNextWeek}>
                        <div className={classes.sessionItemDateWrapper}>
                            <div className={clsx(classes.sessionItemNumber, classes.addSessionNextWeekBtnIcon)}>
                                <AddIcon/></div>
                            <div className={classes.sessionItemDate}>
                                <p>
                                    در هفته بعد تکرار میکنم

                                </p>
                            </div>
                        </div>
                    </div>

                </Scrollbars>
            </div>

            <button className={classes.stepBTN} onClick={handleSubmit}>
                ادامه
            </button>
        </DialogLayout>

    )
}

export default ConfirmSession