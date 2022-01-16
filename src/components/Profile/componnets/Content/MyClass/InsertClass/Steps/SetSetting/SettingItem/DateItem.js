import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import clsx from "clsx";
import JalaliUtils from "@date-io/jalaali";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {DatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {dateTime} from "../../../../../../../../../utilities";
import Edit from "../../../../../../../../../assets/images/PenEdit";
import calendar from "../../../../../../../../../assets/images/profile/registerOstad/calendarAlt.svg";

import useStyles from "../../Styles";
import DialogLayout from "./DialogLayout";
import CustomDatePicker from "./CustomDatePicker";

const DateItem = ({handelExpirationTime, expirationTime, validation,handleCloseAll}) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    // const [dateValue, setDateValue] = useState("");
    const datePicker = React.useRef(null);

    const handelChangeCalendar = (date) => {
        setEditMode(false);
        // setDateValue(jMoment(date).unix());
        handelExpirationTime(date);
    };


    const dateRender = (date) => {
        const {day, month, year, time} = dateTime.dateTimeCustom(date);
        return (
            <div>
                <span>{day}</span>
                <span className={classes.dateMonth}>{month}</span>
                <span>{year}</span>
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
                    <img src={calendar} alt="calendar"/>
                    <div className={classes.settingInput}>
                        <span>حداکثر مدت اعتبار</span>
                        {/*{editMode ? (*/}
                        <MuiPickersUtilsProvider utils={JalaliUtils}>

                            <DatePicker
                                okLabel="تأیید"
                                //   label={""}

                                style={{
                                    margin: "2px 0",
                                    padding: "0 8px",
                                    height: 56,
                                    background: "none",
                                    display: 'none'
                                }}
                                ref={datePicker}
                                cancelLabel="لغو"
                                clearLabel="پاک کردن"
                                className={classes.datepicker}
                                InputLabelProps={{shrink: false}}
                                onChange={handelChangeCalendar}
                                minDate={tomorrow}
                                value={null}
                                DialogProps={{
                                    className: classes.datePickerDialog
                                }}
                                format={"jDD jMMMM jYYYY"}
                                fullWidth
                                InputProps={{
                                    endAdornment: <ExpandMoreIcon/>,
                                    className: classes.root,
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        {/*) : (*/}
                        <span>
                {expirationTime
                    ? dateRender(expirationTime)
                    : "موردی انتخاب نشده"}

              </span>
                        {/*)*/}
                        {/* }*/}
                    </div>
                </div>
                {/*<div onClick={() => setEditMode((prevState) => !prevState)}>*/}
                {/*<div onClick={() => datePicker.current.open()}>*/}
                <div onClick={() => setOpenDatePicker(true)}>
                    {/*<img src={edit} alt="edit"/>*/}
                    <Edit/>
                </div>
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    پر کردن این فیلد الزامی می باشد
                </p>
            )}

            {
                openDatePicker && <CustomDatePicker handleCloseAll={handleCloseAll} handleChange={handelChangeCalendar} open={openDatePicker} closeModal={()=>setOpenDatePicker(false)}/>

            }
        </Grid>
    );
};

export default DateItem;
