import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import InputFormMultiline from "../../../../../form/InputFormMultiline";

const EditNote = ({ initialValues, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');

    const validationSchema = Yup.object().shape({
        note: Yup.string()
            .min(10, "توضیحات نباید کمتر از ۱۰ کاراکتر باشد")
            .max(100, "توضیحات نباید بیشتر از ۱۰۰ کاراکتر باشد"),
    });

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
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            props.handleSubmit(values)
        },
    });
    return (
        <div className={classes.baseInfoMainContainer}>
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: -97, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Grid item xs={12}>
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={100}
                                    label=" توضیحات مختصر"
                                    characterNumber
                                    name={"note"}
                                    formik={formik}
                                    rows={7}
                                    className={classes.decription}
                                    placeholder="این توضیحات مربوط به کل فعالیت می باشد"
                                    required
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>{props.loading ? <CircularProgress size={13} /> : `تایید`}</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(EditNote));
