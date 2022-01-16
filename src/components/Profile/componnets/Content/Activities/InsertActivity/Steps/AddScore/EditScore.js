import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { withSnackbar } from "notistack";
import React, { useState, memo, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import useStyles from "./Styles"
import * as Yup from "yup";
import { numberFormat } from "../../../../../../../../utilities";
import _ from 'lodash'
import DialogLayout from "../../../../Contacts/dialog/DialogLayout";
import PlusIcon from "../../../../../../../../assets/images/PlusIcon";
import MinusIcon from "../../../../../../../../assets/images/MinusIcon";

function EditScore({ initialValues, ...props }) {
    const classes = useStyles()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');

    const validationSchema =
        Yup.object().shape({
            score: Yup.string()
                .required("پر کردن این فیلد الزامی می باشد"),
        })
    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    const formik = useFormik({
        initialValues: {
            ...initialValues,
            score: toFixedIfNecessary(props.selectedScore.score,2)
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values, props.selectedScore)
        },
    });

    function toFixedIfNecessary( value, dp ) {
        return +parseFloat(value).toFixed( dp );
    }

    return (
        <DialogLayout
            customBack={false}
            withCloseIcon={false}
            open={props.open}
            closeModal={() => {
                props.handleClose()
            }}
            className={{
                root: classes.dialogRoot
            }}
            title={props.title}
            style={{ position: 'static', padding: 0 }}
            transparent
        >
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={(formik.handleSubmit)}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Typography className={classes.titleText}>
                                در صورت تمایل میتوانید نمره مورد نظر خود را به صورت دستی در کادر زیر وارد  و یا از  کلیدهای  +   -   استفاده نمایید
                            </Typography>
                            <div className={classes.countModalBody}>
                                <Button onClick={() => {
                                    formik.setFieldValue('score', parseFloat(formik.values.score) + 1);
                                }}>
                                    <PlusIcon />
                                </Button>
                                <div>
                                    <div/>
                                    <TextField
                                        type={'text'}
                                        value={
                                            numberFormat.toPersianDigits(formik.values.score) 
                                        }
                                        onChange={(e) => {
                                            let value = e.target.value
                                            const regex = /^[۱۲۳۴۵۶۷۸۹۰1234567890]{1,2}([,.][۱۲۳۴۵۶۷۸۹۰1234567890]{1,2})?$/;
                                            if (!isNaN(parseFloat(numberFormat.toEnglishDigits(value))) || value === '') {
                                                if (regex.test(value.substr(value.length - 1)) || value === '' || (value.substr(value.length - 1) === '.' && value.match(/\./g).length === 1)) {
                                                    formik.setFieldValue('score', `${numberFormat.toEnglishDigits(value)}`);
                                                }
                                            }
                                        }}
                                    />
                                    <span> نمره</span>
                                </div>
                                <Button onClick={() => {
                                    if (parseFloat(formik.values.score) - 1 > 0) {
                                        formik.setFieldValue('score', parseFloat(parseFloat(formik.values.score) - parseFloat(1)));
                                    }
                                }}>
                                    <MinusIcon />
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>تایید</button>
            </form>
        </DialogLayout>
    )
}

export default memo(withSnackbar(EditScore));

