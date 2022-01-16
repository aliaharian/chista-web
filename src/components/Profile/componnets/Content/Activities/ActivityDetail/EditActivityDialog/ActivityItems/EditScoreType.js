import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress, Grid } from "@material-ui/core";
import InputForm from "../../../../../form/InputForm";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import SelectForm from "../../../../../form/SelectForm";
import BlackboardSidebar from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import NegativePoint from "../../../../../../../../assets/images/NegativePoint";
import DialogLayout from "../dialog/DialogLayout";
import AddScore from '../../../InsertActivity/Steps/AddScore/AddAcore'

const EditScoreType = ({ initialValues, descriptives, ...props }) => {
    console.log('initialValuesforScore',initialValues)
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [scoreType, setScoreType] = useState(initialValues.scoreType)
    const [openBaromDialog, setOpenBaromDialog] = useState(false)
    const validationSchema = Yup.object().shape({
        scoring: scoreType === 'scoring' && Yup.string()
            .required("نمره را وارد نمایید")
            .max(100, "نمره نباید بیشتر از ۱۰۰  باشد"),
        descriptiveId: scoreType !== 'scoring' && Yup.string().test(
            'is-empty',
            "پر کردن این فیلد الزامی می باشد",
            (value, context) => value !== `""`,
        ),
    });
    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }
    const formik = useFormik({
        initialValues: {
            ...initialValues,
            descriptiveId: initialValues.descriptiveId || '""'
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            if (values.scoreType === 'scoring') {
                setOpenBaromDialog(true)
            }
            else {
                props.handleSubmit({
                    descriptiveId: values.descriptiveId
                })
            }
        },
    });
    return (
        <>
            <div className={classes.baseInfoMainContainer}>
                <div style={{ width: '100%', height: 92, top: -97, position: 'absolute', zIndex: 0 }}
                ></div>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                        <Grid container spacing={0}>
                            <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                <Grid item xs={12}>
                                    <SelectForm
                                        activityStyle
                                        label="شیوه محاسبه نتیجه"
                                        name={"scoreType"}
                                        formik={formik}
                                        handleChange={(e) => setScoreType(e.target.value)}
                                        svgIcon
                                        disabled={initialValues.questionType === 'MULTIPLE_CHOICE'}
                                        icon={<NegativePoint />}
                                        required
                                        className={classes.formInput}
                                        options={
                                            [
                                                { title: "انتخاب کنید", value: '""' },
                                                { title: "نمره ای", value: 'scoring' },
                                                { title: "توصیفی", value: 'descriptive' },
                                            ]
                                        }
                                    />
                                </Grid>
                                {
                                    formik.values.scoreType === 'descriptive' &&
                                    <Grid item xs={12} style={{ marginTop: 20 }}>
                                        <SelectForm
                                            activityStyle
                                            label="نحوه توصیف"
                                            name={"descriptiveId"}
                                            formik={formik}
                                            className={classes.formInput}
                                            svgIcon
                                            icon={<BlackboardSidebar />}
                                            required
                                            options={
                                                [
                                                    { title: "انتخاب کنید", value: '""' },
                                                    ...descriptives.map((desc) => (
                                                        { title: desc.name, value: desc.id }
                                                    ))
                                                ]
                                            }
                                        />
                                    </Grid>
                                }
                                {
                                    formik.values.scoreType === 'scoring' &&
                                    <Grid item xs={12} style={{ marginTop: 20 }}>
                                        <InputForm
                                            errorClass={classes.formError}
                                            label=" نمره"
                                            className={classes.formInput}
                                            errorWrapperClass={classes.errorWrapper}
                                            name={"scoring"}
                                            formik={formik}
                                            numberOnly
                                            svgIcon
                                            placeholder={`حداکثر نمره ۱۰۰`}
                                            icon={<BlackboardSidebar />}
                                            required
                                        />
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Scrollbars>
                    <button type="submit" className={classes.stepBTN}>{props.loading ? <CircularProgress size={13} /> : `تایید`}</button>
                </form>
            </div>
            {
                openBaromDialog &&
                <DialogLayout
                    open={openBaromDialog}
                    headerStyle={{ marginBottom: 0 }}
                    withCloseIcon={false}
                    customBack={false}
                    closeModal={() => setOpenBaromDialog(false)}
                    className={{
                        root: classes.root
                    }}
                    style={{ padding: 0 }}
                    title={`ویرایش بارم`}
                    transparent
                >
                    <AddScore
                        btnStyle={{ top: -60 }}
                        initialValues={
                            {
                                maxGrade: formik.values.scoring,
                                questions: initialValues.questions.map((q) => {
                                    return {
                                        ...q,
                                        score: q.score || parseInt(formik.values.scoring) / initialValues.questions.length
                                    }
                                })
                            }
                        }
                        handelStep={(step, values) => {
                            props.handleSubmit({
                                scoring: formik.values.scoring,
                                questions: [...values.questions]
                            })
                            setOpenBaromDialog(false)
                        }}
                    />
                </DialogLayout>
            }
        </>
    );
};

export default memo(withSnackbar(EditScoreType));
