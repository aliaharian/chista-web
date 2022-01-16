import DialogLayout from "../../SetSetting/SettingItem/DialogLayout";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import JalaliUtils from "@date-io/jalaali";
import React, {useState} from "react";
import useStyles from "./../../SetSetting/SettingItem/DatePickerStyle";
import Select from '@material-ui/core/Select';
import {dateTime, numberFormat, transform} from "../../../../../../../../../utilities";
import clsx from "clsx";
import jMoment from "moment-jalaali";

let hours = []
for (let i = 0; i < 24; i++) {
    hours.push(i)
}
let minutes = []
for (let i = 0; i < 60; i++) {
    minutes.push(i)
}

function AddSession(props) {
    const classes = useStyles();
    const [date, changeDate] = useState(props.editableSession ? new Date(props.editableSession.startTime * 1000) : new Date());
    const [timeFromH, setTimeFromH] = useState(props.editableSession ? parseInt(dateTime.secondToTime(props.editableSession.startHour, true)[0]) : 0);
    const [timeFromM, setTimeFromM] = useState(props.editableSession ? parseInt(dateTime.secondToTime(props.editableSession.startHour, true)[1]) : 0);
    const [timeToH, setTimeToH] = useState(props.editableSession ? parseInt(dateTime.secondToTime(props.editableSession.endHour, true)[0]) : 0);
    const [timeToM, setTimeToM] = useState(props.editableSession ? parseInt(dateTime.secondToTime(props.editableSession.endHour, true)[1]) : 0);
    const [editableSession, setEditableSession] = useState(props.editableSession);

    const [error, setError] = useState('')

    const handleSubmit = () => {
        let flag = true
        let timeFrom = dateTime.timeToSecond(timeFromH, timeFromM)
        let timeTo = dateTime.timeToSecond(timeToH, timeToM)
        flag = timeFrom < timeTo
        timeFrom >= timeTo ? setError('زمان شروع جلسه باید قبل از زمان پایان آن باشد') : setError('')


        if (flag) {
            let conflict = false
            let sessionsTemp = [...props.sessions]
            if (editableSession) {
                sessionsTemp.splice(sessionsTemp.findIndex(item => item === editableSession), 1)
            }
            sessionsTemp.map((session) => {
                if (
                    dateTime.dateTimeCustom(jMoment(date).unix()).day === dateTime.dateTimeCustom(session.startTime).day &&
                    dateTime.dateTimeCustom(jMoment(date).unix()).month === dateTime.dateTimeCustom(session.startTime).month &&
                    dateTime.dateTimeCustom(jMoment(date).unix()).year === dateTime.dateTimeCustom(session.startTime).year
                ) {
                    conflict = transform.periodConflict(timeFrom, timeTo, session.startHour, session.endHour)
                }
            })
            flag = !conflict
            conflict ? setError('زمان انتخابی با سایر جلسات شما تداخل دارد') : setError('')
        }

        if (flag) {
            props.handleSubmit({
                startTime: jMoment(date).unix(),
                startHour: timeFrom,
                endHour: timeTo,
                state:1
            }, editableSession)

        }
    }
    return (
        <DialogLayout noHeaderDivider className={classes.root} open={props.open} closeModal={props.closeModal}
                      title={editableSession ? `ویرایش جلسه` : `ایجاد جلسه`}>
            <MuiPickersUtilsProvider utils={JalaliUtils}>
                <DatePicker
                    className={
                        classes.root
                    }
                    variant="static"
                    value={date}
                    minDate={new Date()}
                    PopperProps={
                        {
                            className: classes.root
                        }
                    }
                    ToolbarComponent={() => {
                        return (
                            <div>

                            </div>
                        )
                    }}
                    // renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
                    //     return (dayComponent)
                    // }}
                    onChange={(date) => {
                        changeDate(date)
                    }}
                />
            </MuiPickersUtilsProvider>

            <div className={classes.selectTime}>
                <p className={classes.timeTitle}>زمان جلسه</p>
                <div className={classes.timeFromToContainer}>
                    <div className={error !== '' && classes.errorBorder}>
                        از
                        <Select
                            value={timeFromM}
                            onChange={(e) => setTimeFromM(e.target.value)}
                            name="timeFromH"
                            className={classes.selectTimeInput}
                            inputProps={{'aria-label': 'TimeFromH'}}

                        >
                            {
                                minutes.map((minute) => (
                                    <option
                                        value={minute}>{numberFormat.toPersianDigits(minute < 10 ? `0${minute}` : minute)}</option>

                                ))
                            }
                        </Select>

                        :
                        <Select
                            value={timeFromH}
                            onChange={(e) => setTimeFromH(e.target.value)}
                            name="timeFromH"
                            className={classes.selectTimeInput}
                            inputProps={{'aria-label': 'TimeFromH'}}
                        >
                            {
                                hours.map((hour) => (
                                    <option
                                        value={hour}>{numberFormat.toPersianDigits(hour < 10 ? `0${hour}` : hour)}</option>
                                ))
                            }
                        </Select>

                    </div>
                    <div className={error !== '' && classes.errorBorder}>

                        تا

                        <Select
                            value={timeToM}
                            onChange={(e) => setTimeToM(e.target.value)}
                            name="TimeToH"
                            className={classes.selectTimeInput}
                            inputProps={{'aria-label': 'TimeToH'}}

                        >
                            {
                                minutes.map((minute) => (
                                    <option
                                        value={minute}>{numberFormat.toPersianDigits(minute < 10 ? `0${minute}` : minute)}</option>

                                ))
                            }
                        </Select>

                        :

                        <Select
                            value={timeToH}
                            onChange={(e) => setTimeToH(e.target.value)}
                            name="TimeToH"
                            className={classes.selectTimeInput}
                            inputProps={{'aria-label': 'TimeToH'}}
                        >
                            {
                                hours.map((hour) => (
                                    <option
                                        value={hour}>{numberFormat.toPersianDigits(hour < 10 ? `0${hour}` : hour)}</option>
                                ))
                            }
                        </Select>
                    </div>
                </div>
                {error !== '' && <p className={classes.errorTxt}>{error}</p>}
            </div>
            <button className={classes.stepBTN} onClick={handleSubmit}>
                ادامه
            </button>
        </DialogLayout>
    )
}

export default AddSession