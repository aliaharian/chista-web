import { Button, Grid, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import { useFormik } from "formik";
import { withSnackbar } from "notistack";
import React, { useState, memo, useRef, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import useStyles from "./Styles"
import FileIcon from '../../../../../../../../assets/images/FileIcon'
import * as Yup from "yup";
import InputFormMultiline from "../../../../../form/InputFormMultiline";
import { numberFormat, transform } from "../../../../../../../../utilities";
import { DropzoneArea } from "material-ui-dropzone";
import useUploadChunk from "../../../../../../../../customHook/uploadChunk";
import _ from 'lodash'
import TrashIcon from '../../../../../../../../assets/images/TrashIcon'
import BlackboardSidebar from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import DialogLayout from "../../../../Contacts/dialog/DialogLayout";
import SelectForm from "../../../../../form/SelectForm";
import clsx from "clsx";

function AddQuestionAnswers({ initialValues, ...props }) {
    const classes = useStyles()
    const Dispatch = useDispatch()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [multipleChoiceCount, setMultipleChoiceCount] = useState(initialValues.questionCount)
    const [questionTypeSelectForm, setQuestionTypeSelectForm] = useState(null)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([undefined])
    const [questionType, setQuestionType] = useState(initialValues.questionType)

    useEffect(() => {
        if (questions.length === 0) {
            if (initialValues.questions) {
                if (initialValues.questions.length == initialValues.questionsCount) {
                    setQuestions([...initialValues.questions])
                } else {
                    if (initialValues.questions.length > initialValues.questionsCount) {
                        let tmp = []
                        for (let i = 0; i < initialValues.questionCount; i++) {
                            tmp.push({
                                correctChoice: null,
                                questionType: questionType === 'MULTIPLE_CHOICE' ? 'MULTIPLE_CHOICE' : '""'
                            })
                        }
                        setQuestions([...tmp])
                        formik.setFieldValue('questions', [...tmp]);
                    } else {
                        let tmp = []
                        for (let i = 0; i < initialValues.questionCount - initialValues.questions.length; i++) {
                            tmp.push({
                                correctChoice: null,
                                questionType: questionType === 'MULTIPLE_CHOICE' ? 'MULTIPLE_CHOICE' : '""'
                            })
                        }
                        setQuestions([...initialValues.questions, ...tmp])
                        formik.setFieldValue('questions', [...initialValues.questions, ...tmp]);
                    }
                }
            } else {
                let tmp = []
                for (let i = 0; i < initialValues.questionCount; i++) {
                    tmp.push({
                        correctChoice: null,
                        questionType: questionType === 'MULTIPLE_CHOICE' ? 'MULTIPLE_CHOICE' : '""'
                    })
                }
                setQuestions([...tmp])
                formik.setFieldValue('questions', [...tmp]);
            }
        }
    }, [questions])


    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }

    const formik = useFormik({
        initialValues: {
            questions: initialValues.questions || [],
            ...initialValues,
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values)
        },
    });

    const checkNextActive = () => {
        console.log('questions',questions)
        let flag = false;
        questions.map((q) => {
            if (q.questionType === 'MULTIPLE_CHOICE') {
                if (!q.correctChoice) {
                    flag = true
                }
            }
            if (q.questionType === '""') {
                flag = true
            }
        })
        return flag
    }
    return (
        <DialogLayout
            customBack={initialValues.questionType === 'MULTIPLE_CHOICE' ? false : true}
            open={props.open}
            closeModal={() => {
                props.handleClose()
            }}
            whiteCloseIcon={initialValues.questionType === 'MULTIPLE_CHOICE' ? false : true}
            transparent
            className={{
                root: classes.dialogRoot
            }}
            title={initialValues.questionType === 'MULTIPLE_CHOICE' ? 'پاسخنامه سوالات تستی' : 'مشخصات سوالات'}
            style={{ position: 'static', padding: 0 }}
        >
            <div className={classes.dialogHeaderElement} style={{ boxShadow: addListShadow, width: '100%', top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={(formik.handleSubmit)}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            {
                                questionType === 'MULTIPLE_CHOICE' &&
                                questions.map((q, index) => (
                                    <Grid className={classes.AnswerChoicesContainer}>
                                        <Grid>
                                            <Typography>{numberFormat.toPersianDigits(index + 1)}</Typography>
                                        </Grid>
                                        <Grid>
                                            <Grid>
                                                <div
                                                    onClick={() => {
                                                        if (!props.sameMode) {
                                                            let tmp = [...questions];
                                                            tmp[index].correctChoice = '1'
                                                            tmp[index].sequence = parseInt(index) + 1
                                                            setQuestions([...tmp])
                                                            formik.setFieldValue('questions', [...tmp]);
                                                            console.log(tmp)

                                                            tmp = [...answers]
                                                            tmp[index] = '1'
                                                            setAnswers([...tmp])
                                                        }
                                                    }}
                                                    className={clsx(questions[index].correctChoice == 1 && classes.selectedChoice)}>الف</div>
                                            </Grid>
                                            <Grid>
                                                <div
                                                    onClick={() => {
                                                        if (!props.sameMode) {
                                                            let tmp = [...questions];
                                                            tmp[index].correctChoice = '2'
                                                            tmp[index].sequence = parseInt(index) + 1
                                                            setQuestions([...tmp])
                                                            formik.setFieldValue('questions', [...tmp]);
                                                            tmp = [...answers]
                                                            tmp[index] = '2'
                                                            setAnswers([...tmp])
                                                        }

                                                    }}
                                                    className={clsx(questions[index].correctChoice == 2 && classes.selectedChoice)}>ب</div>
                                            </Grid>
                                            <Grid>
                                                <div
                                                    onClick={() => {
                                                        if (!props.sameMode) {
                                                            let tmp = [...questions];
                                                            tmp[index].correctChoice = '3'
                                                            tmp[index].sequence = parseInt(index) + 1
                                                            setQuestions([...tmp])
                                                            formik.setFieldValue('questions', [...tmp]);
                                                            tmp = [...answers]
                                                            tmp[index] = '3'
                                                            setAnswers([...tmp])
                                                        }
                                                    }}
                                                    className={clsx(questions[index].correctChoice == 3 && classes.selectedChoice)}>ج</div>
                                            </Grid>
                                            <Grid>
                                                <div
                                                    onClick={() => {
                                                        if (!props.sameMode) {
                                                            let tmp = [...questions];
                                                            tmp[index].correctChoice = '4'
                                                            tmp[index].sequence = parseInt(index) + 1
                                                            setQuestions([...tmp])
                                                            formik.setFieldValue('questions', [...tmp]);
                                                            console.log(tmp)
                                                            tmp = [...answers]
                                                            tmp[index] = '4'
                                                            setAnswers([...tmp])
                                                        }
                                                    }}
                                                    className={clsx(questions[index].correctChoice == 4 && classes.selectedChoice)}>د</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                            {
                                questionType === 'GROUP' &&
                                questions.map((q, index) => (
                                    <>
                                        <Grid item xs={12} style={{ marginTop: index === 0 ? 0 : 20 }}>
                                            <SelectForm
                                                activityStyle
                                                className={classes.formInput}
                                                label={`نوع سوال ${numberFormat.toPersianDigits(index + 1)}`}
                                                name={"questionType" + index}
                                                disabled={props.sameMode}
                                                formik={{
                                                    ...formik,
                                                    values: {
                                                        [`questionType${index}`]: q.questionType
                                                    }
                                                }
                                                }
                                                handleChange={(e) => {
                                                    let tmp = [...questions]
                                                    tmp[index].questionType = e.target.value;
                                                    tmp[index].sequence = parseInt(index) + 1
                                                    setQuestions([...tmp])
                                                    e.target.value === 'DESCRIPTIVE' ? setMultipleChoiceCount(multipleChoiceCount - 1) : setMultipleChoiceCount(multipleChoiceCount + 1)
                                                    formik.setFieldValue('questions', [...tmp]);
                                                }}
                                                svgIcon
                                                icon={<BlackboardSidebar />}
                                                required
                                                options={
                                                    [
                                                        { title: "انتخاب کنید", value: '""' },
                                                        { title: "تستی", value: 'MULTIPLE_CHOICE' },
                                                        { title: "تشریحی", value: 'DESCRIPTIVE' },
                                                    ]
                                                }
                                            />
                                        </Grid>
                                        {q.questionType === 'MULTIPLE_CHOICE' &&
                                            <Grid container className={classes.choicesContainer}>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <div
                                                        onClick={() => {
                                                            if (!props.sameMode) {
                                                                let tmp = [...questions];
                                                                tmp[index].correctChoice = '1'
                                                                tmp[index].sequence = parseInt(index) + 1
                                                                setQuestions([...tmp])
                                                                formik.setFieldValue('questions', [...tmp]);
                                                                tmp = [...answers]
                                                                tmp[index] = '1'
                                                                setAnswers([...tmp])
                                                            }
                                                        }}
                                                        className={clsx(questions[index].correctChoice == 1 && classes.selectedChoice)}>الف</div>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <div
                                                        onClick={() => {
                                                            if (!props.sameMode) {
                                                                let tmp = [...questions];
                                                                tmp[index].correctChoice = '2'
                                                                tmp[index].sequence = parseInt(index) + 1
                                                                setQuestions([...tmp])
                                                                formik.setFieldValue('questions', [...tmp]);
                                                                tmp = [...answers]
                                                                tmp[index] = '2'
                                                                setAnswers([...tmp])
                                                            }
                                                        }}
                                                        className={clsx(questions[index].correctChoice == 2 && classes.selectedChoice)}>ب</div>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <div
                                                        onClick={() => {
                                                            if (!props.sameMode) {
                                                                let tmp = [...questions];
                                                                tmp[index].correctChoice = '3'
                                                                tmp[index].sequence = parseInt(index) + 1
                                                                setQuestions([...tmp])
                                                                formik.setFieldValue('questions', [...tmp]);
                                                                tmp = [...answers]
                                                                tmp[index] = '3'
                                                                setAnswers([...tmp])
                                                            }
                                                        }}
                                                        className={clsx(questions[index].correctChoice == 3 && classes.selectedChoice)}>ج</div>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <div
                                                        onClick={() => {
                                                            if (!props.sameMode) {
                                                                let tmp = [...questions];
                                                                tmp[index].correctChoice = '4'
                                                                tmp[index].sequence = parseInt(index) + 1
                                                                setQuestions([...tmp])
                                                                formik.setFieldValue('questions', [...tmp]);
                                                                tmp = [...answers]
                                                                tmp[index] = '4'
                                                                setAnswers([...tmp])
                                                            }
                                                        }}
                                                        className={clsx(questions[index].correctChoice == 4 && classes.selectedChoice)}>د</div>
                                                </Grid>
                                            </Grid>
                                        }
                                    </>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={clsx(classes.stepBTN, checkNextActive() && classes.disableBtn)}>تایید</button>
            </form>
        </DialogLayout>
    )
}

export default memo(withSnackbar(AddQuestionAnswers));

