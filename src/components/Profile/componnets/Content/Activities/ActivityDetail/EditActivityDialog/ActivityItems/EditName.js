import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress, Grid } from "@material-ui/core";
import InputForm from "../../../../../form/InputForm";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import CheckList from "../../../../../../../../assets/images/CheckList";
import Scrollbars from "react-custom-scrollbars";

const EditName = ({ initialValues, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');

    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, "نام نباید کمتر از ۲ کاراکتر باشد")
        .max(30, "نام نباید بیشتر از ۳۰ کاراکتر باشد")
        .required("نام فعالیت را وارد نمایید"),
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
                                <InputForm
                                    errorClass={classes.formError}
                                    label="نام فعالیت"
                                    className={classes.formInput}
                                    errorWrapperClass={classes.errorWrapper}
                                    name={"name"}
                                    formik={formik}
                                    svgIcon
                                    icon={<CheckList />}
                                    required
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>{props.loading?<CircularProgress size={13}/>:`تایید`}</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(EditName));
