import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid, TextField, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import { numberFormat } from "../../../../../../../../utilities";

const EditDuration = ({ initialValues, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');

    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }
    const formik = useFormik({
        initialValues: {
            ...initialValues,
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            props.handleSubmit({
                duration: values.duration==""?-1:numberFormat.toEnglishDigitsOnlyNum(values.duration)
            })
        },
    });
    return (
        <div
            className={classes.baseInfoMainContainer}
        >
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: -97, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Typography className={classes.titleText}>
                                شما میتوانید طول مدت فعالیت خود را با توجه به نیاز خود از دقیقه به ساعت تغییر دهید                               </Typography>
                            <div className={classes.countModalBody}>
                                <div style={{ width: '100%' }}>
                                    <TextField
                                        type={'text'}
                                        className={classes.durationTextField}
                                        disableUnderline
                                        value={formik.values.duration && numberFormat.toPersianDigits(formik.values.duration)}
                                        onChange={(e) => {
                                            const regex = /[0-9]$/;
                                            if (regex.test(e.target.value.toString()) || e.target.value === '') {
                                                formik.setFieldValue('duration', `${e.target.value}`);
                                            } else {
                                                formik.setFieldValue('duration', `${e.target.value.substring(0, e.target.value.length - 1)}`);
                                                return;
                                            }
                                        }}
                                    />
                                    <span> دقیقه</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>{props.loading ? <CircularProgress size={13} /> : `تایید`}</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(EditDuration));
