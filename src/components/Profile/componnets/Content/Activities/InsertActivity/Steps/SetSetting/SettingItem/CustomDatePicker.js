import React, { useEffect, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import JalaliUtils from "@date-io/jalaali";
import DialogLayout from "./DialogLayout";
import useStyles from "./DatePickerStyle";
import { numberFormat } from "../../../../../../../../../utilities";
import { Button, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import clockIcon from '../../../../../../../../../assets/images/Clock.svg'
import WarningIcon from '../../../../../../../../../assets/images/WarningIcon'

export default function CustomDatePicker({ transparent = true, ...props }) {
    const classes = useStyles();

    const today = new Date();
    const tomorrow = new Date(today);
    const InitialDate = props.initialValue ? new Date(props.initialValue * 1000) : tomorrow

    const [date, changeDate] = useState(props.initialValue ? InitialDate : tomorrow);
    const [time, setTime] = useState(props.initialTime || [0, 0]);

    useEffect(() => {
        time[0] > 23 && setTime([23, time[1]])
        time[1] > 59 && setTime([time[0], 59])
    })
    return (
        <DialogLayout
            fullScreen
            handleCloseAll={props.closeModal}
            noHeaderDivider
            className={classes.root}
            open={props.open}
            closeModal={props.closeModal}
            title={`${props.title}`}
            transparent={transparent}
            handleSubmit={() => {
                props.handleChange(date, time)
            }}
            disableBack={props.disableBack || false}
        >
            {(props.activeError && props.error) &&
                <div className={classes.errorContainer}>
                    <WarningIcon />
                    <Typography>
                        {props.error}
                    </Typography>
                </div>
            }
            <MuiPickersUtilsProvider utils={JalaliUtils}>
                <DatePicker
                    className={
                        clsx(classes.datePickerRoot, classes.pt0)
                    }
                    variant="static"
                    value={date}
                    PopperProps={
                        {
                            className: classes.datePickerRoot
                        }
                    }
                    ToolbarComponent={() => {
                        return (
                            <div>
                            </div>
                        )
                    }}
                    minDate={today}
                    renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
                        const yesterday = new Date(today);
                        yesterday.setDate(yesterday.getDate() - 1);
                        return (<Button className={clsx(
                            classes.renderDay,
                            day._d.getTime() === selectedDate._d.getTime() && classes.renderDaySelected,
                            day._d.getTime() < yesterday && classes.renderDayDisabled,
                            !dayInCurrentMonth && classes.renderDayDisNone
                        )}>{numberFormat.toPersianDigits(dayComponent.props.children)}</Button>)
                    }}
                    onChange={(date) => {
                        props.activeError && props.disableError()
                        changeDate(date)
                    }}
                />
            </MuiPickersUtilsProvider>
            <div className={classes.timeSection}>
                <div className={classes.timeTitle}>
                    <img src={clockIcon} />
                    <Typography>{`ساعت 
                    ${props.selectedItem === 'startTime'
                            ? `شروع `
                            : `پایان`}`
                    }</Typography>
                </div>
                <div className={classes.timeInput}>
                    <TextField
                        className={clsx(classes.timeInputRoot)}
                        value={time[0] < 10 ? '۰' + numberFormat.toPersianDigits(time[0]) : numberFormat.toPersianDigits(time[0])}
                        onFocus={(event) => {
                            event.target.select()
                        }}
                        onContextMenu={(e) => { e.preventDefault(); return false }}
                        onChange={(e) => {
                            props.activeError && props.disableError()
                            let regex = new RegExp("^[0-9]+$");
                            if ((regex.test(parseInt(numberFormat.toEnglishDigits(e.target.value))) && e.target.value.length < 4) || e.target.value == '' || e.target.value == '0') {

                                e.target.value == '' ? setTime([0, time[1]]) : setTime([parseInt(numberFormat.toEnglishDigitsOnlyNum(e.target.value)), time[1]])
                            }
                        }}
                        InputProps={
                            {
                                disableUnderline: true,
                                className: props.ltr ? classes.ltr : ""
                            }
                        }
                    />
                    <Typography> : </Typography>
                    <TextField
                        className={clsx(classes.timeInputRoot)}
                        value={time[1] < 10 ? '۰' + numberFormat.toPersianDigits(time[1]) : numberFormat.toPersianDigits(time[1])}
                        onFocus={(event) => {
                            event.target.select()
                        }}
                        onContextMenu={(e) => { e.preventDefault(); return false }}
                        onChange={(e) => {
                            props.activeError && props.disableError()
                            let regex = new RegExp("^[0-9]+$");
                            if ((regex.test(parseInt(numberFormat.toEnglishDigits(e.target.value))) && e.target.value.length < 4) || e.target.value == '' || e.target.value == '0') {
                                e.target.value == '' ? setTime([time[0], 0]) : setTime([time[0], parseInt(numberFormat.toEnglishDigitsOnlyNum(e.target.value))])
                            }
                        }}
                        InputProps={
                            {
                                disableUnderline: true,
                                className: props.ltr ? classes.ltr : ""
                            }
                        }
                    />
                </div>
            </div>
        </DialogLayout>
    )
}