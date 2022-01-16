import React, { useState, memo, useRef } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import useStyles from "../../AddScore/Styles"
import { numberFormat } from "../../../../../../../../../utilities";
import _ from 'lodash'
import DialogLayout from "../../../../../Contacts/dialog/DialogLayout";
import WarningIcon from '../../../../../../../../../assets/images/WarningIcon'

function EditDuration({ initialValues, ...props }) {
    const classes = useStyles()
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
            duration: props.duration
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values.duration)
        },
    });

    return (
        <DialogLayout
            customBack
            open={props.open}
            closeModal={() => {
                props.handleClose()
            }}
            transparent
            className={{
                root: classes.dialogRoot
            }}
            title={props.title}
            style={{ position: 'static', padding: 0 }}
        >
            {(props.activeError && props.error) &&
                <div className={classes.errorContainer} style={{marginTop:-5}}>
                    <WarningIcon />
                    <Typography>
                        {props.error}
                    </Typography>
                </div>
            }
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={(formik.handleSubmit)}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Typography className={classes.titleText}>
                                شما میتوانید طول مدت فعالیت خود را با توجه به نیاز خود از دقیقه به ساعت تغییر دهید                               </Typography>
                            <div className={classes.countModalBody}>
                                <div style={{ width: '100%', padding: '0 20px' }}>
                                    <div/>
                                    <TextField
                                        type={'text'}
                                        className={classes.durationTextField}
                                        disableUnderline
                                        value={formik.values.duration && numberFormat.toPersianDigits(formik.values.duration)}
                                        placeholder={'--'}
                                        onChange={(e) => {
                                            const regex = /[۱۲۳۴۵۶۷۸۹۰1234567890]$/;
                                            if ((regex.test(e.target.value.toString()) || e.target.value === '') && (e.target.value.length < 4)) {
                                                formik.setFieldValue('duration', `${numberFormat.toEnglishDigits(e.target.value)}`);
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
                <button type="submit" className={classes.stepBTN}>تایید</button>
            </form>
        </DialogLayout>
    )
}

export default memo(withSnackbar(EditDuration));

