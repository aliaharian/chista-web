import React, {useState} from "react";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import JalaliUtils from "@date-io/jalaali";
import DialogLayout from "./DialogLayout";
import useStyles from "./DatePickerStyle";
import {dateTime, numberFormat} from "../../../../../../../../../utilities";
import {Button} from "@material-ui/core";
import clsx from "clsx";

export default function CustomDatePicker(props) {
    const classes = useStyles();

    const today = new Date();
    const tomorrow = new Date(today);
    const [date, changeDate] = useState(props.initialValue || tomorrow);

    tomorrow.setDate(tomorrow.getDate() + 1);

    console.log('initialValue',props.initialValue)
    return (
        <DialogLayout handleCloseAll={props.handleCloseAll} noHeaderDivider className={classes.root} open={props.open}
                      closeModal={props.closeModal}
                      title={`حداکثر مدت اعتبار`}
                      handleSubmit={() => {
                          props.handleChange(date)
                          props.closeModal()

                      }}
                      disableBack={props.disableBack || false}
        >
            <MuiPickersUtilsProvider utils={JalaliUtils}>
                <DatePicker
                    // autoOk
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
                    minDate={tomorrow}

                    renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
                        const tomorrow = new Date(today);
                        // tomorrow.setDate(tomorrow.getDate() + 1);
                        // console.log(day._d.getTime()===selectedDate._d.getTime())
                        // console.log(dateTime.dateTimeCustom(day))
                        // console.log(tomorrow)
                        // console.log(dayInCurrentMonth)
                       
                        return (<Button className={clsx(
                            classes.renderDay,
                            day._d.getTime() === selectedDate._d.getTime() && classes.renderDaySelected,
                            day._d.getTime() < tomorrow && classes.renderDayDisabled,
                            !dayInCurrentMonth && classes.renderDayDisNone
                        )}>{numberFormat.toPersianDigits(dayComponent.props.children)}</Button>)
                        // return (dayComponent)
                    }}
                    onChange={(date) => {
                        // props.handleChange(date);
                      
                        changeDate(date)
                        // props.closeModal()
                    }}
                />
            </MuiPickersUtilsProvider>
        </DialogLayout>
    )
}