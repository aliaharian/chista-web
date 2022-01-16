import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { numberFormat } from "../../../../../../../../../utilities";
import Edit from "../../../../../../../../../assets/images/PenEdit";
import Clock from "../../../../../../../../../assets/images/ClockIcon";
import useStyles from "../../Styles";
import EditDuration from "./EditDuration";

const Duration = ({
    duration,
    setDuration,
    handleCloseAll,
    initialValues,
    updateData,
    endTime,
    endHour,
    startTime,
    startHour,
    ...props
}) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [error, setError] = useState();

    const handelChangeCalendar = (data) => {
        let flag = true
        if (startTime && (endTime - startTime) / 60 < numberFormat.toEnglishDigitsOnlyNum(data)) {
            flag = false
        }
        if (flag) {
            setEditMode(false);
            setOpenDatePicker(false)
            setDuration(numberFormat.toEnglishDigitsOnlyNum(data))
            updateData({ duration: numberFormat.toEnglishDigitsOnlyNum(data) })
            setError()
        }
        else {
            setError('حد فاصل میان شروع و پایان باید بیشتر از مدت زمان فعالیت باشد')
        }
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
                    <Clock />
                    <div className={classes.settingInput}>
                        <span>طول مدت فعالیت</span>
                        <span>
                            {duration
                                ? numberFormat.toPersianDigits(duration) + ' دقیقه '
                                : "انتخاب کنید"}
                        </span>
                    </div>
                </div>
                <div onClick={() => setOpenDatePicker(true)}>
                        <Edit />
                </div>
            </div>
            {openDatePicker &&
                <EditDuration
                    handleSubmit={handelChangeCalendar}
                    initialValues={initialValues}
                    duration={duration}
                    error={error}
                    activeError={error ? true : false}
                    open={openDatePicker}
                    handleClose={() => setOpenDatePicker(false)}
                    title={`طول مدت فعالیت`}
                />}
        </Grid>
    );
};

export default Duration;
