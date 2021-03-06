import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import JalaliUtils from "@date-io/jalaali";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { dateTime, numberFormat } from "../../../../../../../../../utilities";
import Edit from "../../../../../../../../../assets/images/PenEdit";
import calendar from "../../../../../../../../../assets/images/profile/registerOstad/calendarAlt.svg";
import useStyles from "../../Styles";
import CustomDatePicker from "./CustomDatePicker";
import jMoment from "moment-jalaali";

const EndTime = ({ handelEndTime,
    endTime,
    endHour,
    startTime,
    duration,
    handelEndHour,
    validation,
    handleCloseAll
}) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const datePicker = React.useRef(null);
    const [error, setError] = useState();
    const [justSubmit, setJustSubmit] = useState(true);

    const handelChangeCalendar = (date, hour) => {
        let flag = true;
        setJustSubmit(true)
        setEditMode(false);
        var mm = new Date(date)
        var myToday = new Date(mm.getFullYear(), mm.getMonth(), mm.getDate(), hour[0], hour[1], 0);

        let now = new Date();
        let nowHour = now.getHours();
        let nowMinute = now.getMinutes();
        let conflict = false;
        let durationError = false;

        if (myToday < now) {
            if (parseInt(hour[0]) < nowHour) {
                flag = false
            } else if (parseInt(hour[0]) === nowHour) {
                if (parseInt(hour[1]) < nowMinute) {
                    flag = false
                }
            }
        }
        if (startTime && jMoment(myToday).unix() - startTime < 300) {
            flag = false
            conflict = true
        }
        else if (duration && startTime && (jMoment(myToday).unix() - startTime)/60 <duration) {
            flag = false
            durationError = true
        } 

        if (flag) {
            handelEndTime(myToday);
            handelEndHour(hour);
            setJustSubmit(false)
            setOpenDatePicker(false)
        } else {
            if (conflict) {
                setError('???? ???????? ???????? ???????? ?? ?????????? ???????? ?????????? ???? ?? ?????????? ????????')
            } else if(durationError) {
                setError('???? ???????? ???????? ???????? ?? ?????????? ???????? ?????????? ???? ?????? ???????? ???????????? ????????')
            }else{
                setError('???????? ?????????????? ???????? ?????????? ???? ???????? ???????? ????????')
            }
        }
    };

    const dateRender = (date, hour) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(date);
        return (
            <div>
                <span>{day}</span>
                <span className={classes.dateMonth}>{month}</span>
                <span>{year}</span>
                <span> - </span>
                <span>{hour[0] < 10 ? '??' + numberFormat.toPersianDigits(hour[0]) : numberFormat.toPersianDigits(hour[0])}</span>
                <span>:</span>
                <span>{hour[1] < 10 ? '??' + numberFormat.toPersianDigits(hour[1]) : numberFormat.toPersianDigits(hour[1])}</span>
            </div>
        );
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        <Grid item xs={12} md={12}>
            <div className={classes.settingItem} style={{
                paddingTop: 0
            }}>
                <div>
                    <img src={calendar} alt="calendar" />
                    <div className={classes.settingInput}>
                        <span>???????? ?????????? (????????????)</span>
                        <MuiPickersUtilsProvider utils={JalaliUtils}>
                            <DatePicker
                                okLabel="??????????"
                                style={{
                                    margin: "2px 0",
                                    padding: "0 8px",
                                    height: 56,
                                    background: "none",
                                    display: 'none'
                                }}
                                ref={datePicker}
                                cancelLabel="??????"
                                clearLabel="?????? ????????"
                                className={classes.datepicker}
                                InputLabelProps={{ shrink: false }}
                                onChange={handelChangeCalendar}
                                minDate={tomorrow}
                                value={null}
                                DialogProps={{
                                    className: classes.datePickerDialog
                                }}
                                format={"jDD jMMMM jYYYY"}
                                fullWidth
                                InputProps={{
                                    endAdornment: <ExpandMoreIcon />,
                                    className: classes.root,
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <span>
                            {endTime
                                ? dateRender(endTime, endHour)
                                : "???????????? ????????"}
                        </span>
                    </div>
                </div>
                <div onClick={() => setOpenDatePicker(true)}>
                    <Edit />
                </div>
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    ???? ???????? ?????? ???????? ???????????? ???? ????????
                </p>
            )}
            {
                openDatePicker && <CustomDatePicker
                    title={`???????? ??????????`}
                    disableBack
                    handleCloseAll={handleCloseAll}
                    handleChange={handelChangeCalendar}
                    open={openDatePicker}
                    initialValue={endTime}
                    initialTime={endHour}
                    justSubmit={justSubmit}
                    error={error}
                    disableError={() => setError(null)}
                    activeError={error ? true : false}
                    closeModal={() => setOpenDatePicker(false)} />
            }
        </Grid>
    );
};

export default EndTime;
