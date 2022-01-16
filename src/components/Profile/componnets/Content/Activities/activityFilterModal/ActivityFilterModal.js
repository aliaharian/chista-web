import React, { useRef } from "react";
import { useTheme } from "@material-ui/core/styles";
import jMoment from "moment-jalaali";
import useStyles from "./Styles";
import { useFormik } from "formik";
import CustomDatePicker from "./CustomDatePicker";

const ActivityFilterModal = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const formRef = useRef()
    const formik = useFormik({
        initialValues: {
            activityType: "all",
            activityTime: null
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values)
            props.handleClose()
        },
    });
    return (
        <form ref={formRef} className={classes.form} onSubmit={formik.handleSubmit}>
            <CustomDatePicker
                closeModal={() => props.handleClose()}
                title={'فیلتر فعالیت'}
                open={props.open}
                formik={formik}
                disableBack
                handleSumbit={async (e) => {
                    await formik.setFieldValue('activityTime', jMoment(e).unix() * 1000);
                    formik.submitForm();
                }}
            />
        </form>
    );
};

export default ActivityFilterModal;
