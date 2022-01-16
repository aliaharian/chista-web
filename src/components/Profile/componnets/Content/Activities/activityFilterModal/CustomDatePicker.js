import React, { useState } from "react";
import useStyles from "./DatePickerStyle";
import SelectForm from "../../../form/SelectForm";
import BlackboardSidebar from "../../../../../../assets/images/profile/BlackboardSidebar";
import DialogLayout from "../InsertActivity/Steps/SetSetting/SettingItem/DialogLayout";

export default function CustomDatePicker(props) {
    const classes = useStyles();

    const today = new Date();
    const tomorrow = new Date(today);
    const InitialDate = props.initialValue ? new Date(props.initialValue * 1000) : tomorrow
    const [date, changeDate] = useState(props.initialValue ? InitialDate : tomorrow);
    return (
        <DialogLayout
            fullScreen
            handleCloseAll={props.closeModal}
            noHeaderDivider
            className={classes.root}
            open={props.open}
            closeModal={props.closeModal}
            title={`${props.title}`}
            handleSubmit={() => {
                props.handleSumbit(date)
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
            <div className={classes.timeSection}>
                <SelectForm
                    label="نوع فعالیت"
                    name={"activityType"}
                    activityStyle
                    svgIcon
                    className={classes.width100}
                    disabled={false}
                    errorClass={classes.formError}
                    formik={props.formik}
                    icon={<BlackboardSidebar />}
                    options={
                        [
                            { title: "انتخاب کنید", value: `""` },
                            { title: "همه", value: `all` },
                            { title: "آزمون", value: 'EXAM' },
                            { title: "تکلیف", value: 'ASSIGNMENT' },
                            { title: "سایر", value: 'OTHER' },
                        ]
                    }
                />
            </div>
        </DialogLayout>
    )
}