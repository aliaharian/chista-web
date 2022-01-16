import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import JalaliUtils from "@date-io/jalaali";
import jMoment from "moment-jalaali";
import axios from "axios";

import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { loadClassDetails } from "../../../../../../../../../redux/adviserDashboard";
import { dateTime } from "../../../../../../../../utilities";
import edit from "../../../../../../../../assets/images/edit-pen.svg";
import calendar from "../../../../../../../../assets/images/profile/registerOstad/calendarAlt.svg";

import useStyles from "./Styles";
import Edit from "../../../../../../../../assets/images/PenEdit";
import CustomDatePicker from "../../../InsertClass/Steps/SetSetting/SettingItem/CustomDatePicker";
import { errorSnackbar } from "../../../../../../../../../redux/user";
import { useDispatch } from "react-redux";

const ClassDate = ({ validation, data }) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const Dispatch = useDispatch()
    const [dateValue, setDateValue] = useState(
        data.expirationTime > 0 ? data.expirationTime : ""
    );

    const handelChangeCalendar = async (date) => {
        try {
            const response = await axios.post(`group/updateInfo?id=${data.id}`, {
                expirationTime: jMoment(date).unix(),
            });
            console.log("response:", response.data);
            setDateValue(jMoment(date).unix());

            Dispatch(loadClassDetails(response.data));
        } catch (err) {
            Dispatch(errorSnackbar(err));

            console.log("err", err);
        }
        setEditMode(false);
    };

    const dateRender = (date) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(date);
        return (
            <div>
                <span>{day}</span>
                <span className={classes.dateMonth}> {month} </span>
                <span>{year}</span>
            </div>
        );
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log('exp',data.expirationTime)

    return (
        <Grid item xs={12} md={6}>
            <div className={classes.settingItem}>
                <div>
                    <img src={calendar} alt="calendar" />
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
                                cancelLabel="لغو"
                                clearLabel="پاک کردن"
                                className={classes.datepicker}
                                InputLabelProps={{ shrink: false }}
                                onChange={handelChangeCalendar}
                                minDate={tomorrow}
                                value={null}
                                format={"jDD jMMMM jYYYY"}
                                fullWidth
                                InputProps={{
                                    endAdornment: <ExpandMoreIcon />,
                                    className: classes.root,
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        {/*) : (*/}
                        <span>
                            {dateValue ? dateRender(dateValue) : "موردی انتخاب نشده"}
                        </span>
                        {/*)}*/}
                    </div>
                </div>
                {
                    data.myRights.includes("CRR_GROUP_EDIT") && data.active && (
                        <Edit
                            onClick={() => setOpenDatePicker(true)}
                        />

                    )
                }
            </div>
            {validation && (
                <p className={classes.validationMessage}>
                    پر کردن این فیلد الزامی می باشد
                </p>
            )}

            {
                openDatePicker && <CustomDatePicker initialValue={new Date(data.expirationTime*1000)} disableBack handleCloseAll={() => setOpenDatePicker(false)} handleChange={handelChangeCalendar} open={openDatePicker} closeModal={() => setOpenDatePicker(false)} />

            }
        </Grid>
    );
};

export default ClassDate;
