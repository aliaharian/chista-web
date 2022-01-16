import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import SelectForm from "../../../../../form/SelectForm";
import NegativePoint from "../../../../../../../../assets/images/NegativePoint";
import BookmarkIcon from "../../../../../../../../assets/images/BookmarkAlt";
import DialogLayout from "../dialog/DialogLayout";
import AddQuestions from "../../../InsertActivity/Steps/AddQuestions";
import EditScoreType from "./EditScoreType";

const EditQuestionType = ({ initialValues, descriptives, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [scoreType, setScoreType] = useState(initialValues.scoreType)
    const [openQuestionsDialog, setOpenQuestionsDialog] = useState(false)
    const [openScoreDialog, setOpenScoreDialog] = useState(false)
    const [questionsData, setQuestionsData] = useState()

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
            setOpenQuestionsDialog(true)
        },
    });
    return (
        <>
            <div className={classes.baseInfoMainContainer}>
                <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: -97, position: 'absolute', zIndex: 0 }}
                ></div>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                        <Grid container spacing={0}>
                            <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                <Grid item xs={12}>
                                    <SelectForm
                                        activityStyle
                                        label="نحوه طراحی سوالات"
                                        name={"questionType"}
                                        formik={formik}
                                        handleChange={(e) => setScoreType(e.target.value)}
                                        svgIcon
                                        className={classes.formInput}
                                        icon={<BookmarkIcon />}
                                        required
                                        options={
                                            [
                                                { title: 'انتخاب کنید', value: '""' },
                                                { title: "تستی", value: 'MULTIPLE_CHOICE' },
                                                { title: "تشریحی", value: 'DESCRIPTIVE' },
                                                { title: "ترکیبی", value: 'GROUP' },
                                            ]
                                        }
                                    />
                                </Grid>
                                {
                                    formik.values.questionType === 'MULTIPLE_CHOICE' &&
                                    <Grid item xs={12} style={{ marginTop: 20 }}>
                                        <SelectForm
                                            activityStyle
                                            label="نمره منفی"
                                            name={"negativeScore"}
                                            formik={formik}
                                            className={classes.formInput}
                                            svgIcon
                                            icon={<NegativePoint />}
                                            required
                                            options={
                                                [
                                                    { title: 'انتخاب کنید', value: '""' },
                                                    { title: 'ندارد', value: '0' },
                                                    { title: '۱/۲ بارم', value: '0.5' },
                                                    { title: '۱/۳ بارم', value: '0.3' },
                                                    { title: '۱/۴ بارم', value: '0.25' },
                                                ]
                                            }
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
                openQuestionsDialog &&
                <DialogLayout
                    open={openQuestionsDialog}
                    headerStyle={{ marginBottom: 0 }}
                    customBack={false}
                    withCloseIcon={false}
                    closeModal={() => setOpenQuestionsDialog(false)}
                    className={{
                        root: classes.root
                    }}
                    style={{ padding: 0, position: 'static' }}
                    title={`ویرایش سوالات`}
                    transparent
                >
                    <AddQuestions
                        initialValues={
                            {
                                ...initialValues,
                                questionType: formik.values.questionType,
                                negativeScore: formik.values.negativeScore,
                                questions: formik.values.questions?.map((question) => (
                                    {
                                        ...question,
                                        questionType: formik.values.questionType == 'GROUP' ? question.questionType : formik.values.questionType
                                    }
                                ))
                            }
                        }
                        handelStep={(step, values) => {
                            let questionsTemp = []
                            values.questions.map((q) => {
                                questionsTemp.push({
                                    "answerImages": values.multiFile ? q.answerImages?.map(function (image) {
                                        return image.hashCode;
                                    }) : [],
                                    "answerText": values.multiFile ? q.answerTitle || q.answerText : "",
                                    "correctChoice": !q.correctChoice ? null : q.correctChoice,
                                    // "note": "string",
                                    "questionImages": values.multiFile ? q.questionImages?.map(function (image) {
                                        return image.hashCode;
                                    }) : [],
                                    "questionText": values.multiFile ? q.questionTitle || q.questionText : '',
                                    "questionType": values.multiFile ? q.singleQuestionType : q.questionType,
                                    "score": q.score,
                                    "sequence": q.sequence || 0
                                })
                            })
                            let answerImages = []
                            {
                                !values.multiFile && values.answerImages?.map((image) => {
                                    answerImages.push(image.hashCode)
                                })
                            }
                            let questionImages = []
                            {
                                !values.multiFile && values.questionImages?.map((image) => {
                                    questionImages.push(image.hashCode)
                                })
                            }
                            if ((initialValues.descriptiveId && formik.values.questionType == "MULTIPLE_CHOICE")) {
                                setQuestionsData({
                                    answerImages: answerImages,
                                    answerText: values.answerTitle,
                                    questionImages: questionImages,
                                    questionText: values.questionTitle,
                                    questions: questionsTemp,
                                    questionType: formik.values.questionType,
                                    negative: formik.values.questionType === 'DESCRIPTIVE' ? null : formik.values.negativeScore === '0' ? false : true,
                                    negativeScore: formik.values.negativeScore === '0' ? 0 : parseFloat(formik.values.negativeScore)
                                })
                                setOpenScoreDialog(true)

                            } else {
                                props.handleSubmit({
                                    answerImages: answerImages,
                                    answerText: values.answerTitle,
                                    questionImages: questionImages,
                                    questionText: values.questionTitle,
                                    questions: questionsTemp,
                                    questionType: formik.values.questionType,
                                    negative: formik.values.questionType === 'DESCRIPTIVE' ? null : formik.values.negativeScore === '0' ? false : true,
                                    negativeScore: formik.values.negativeScore === '0' ? 0 : parseFloat(formik.values.negativeScore)

                                })
                            }
                            setOpenQuestionsDialog(false)
                        }}
                    />
                </DialogLayout>
            }
            {
                openScoreDialog &&
                <DialogLayout
                    open={openScoreDialog}
                    headerStyle={{ marginBottom: 0 }}
                    customBack
                    closeModal={() => setOpenScoreDialog(false)}
                    className={{
                        root: classes.root
                    }}
                    style={{ padding: 0, position: 'static' }}
                    title={`ویرایش شیوه محاسبه نتیجه`}
                    transparent
                >
                    <EditScoreType
                        initialValues={
                            {
                                ...initialValues,
                                scoreType: `scoring`,
                                descriptiveId: initialValues.descriptiveId || null,
                                scoring: initialValues.scoring || "",
                                questions: questionsData.questions,
                                ...questionsData
                            }
                        }
                        descriptives={descriptives}
                        handleSubmit={(data) => {
                            props.handleSubmit({
                                answerImages: questionsData.answerImages,
                                answerText: questionsData.answerTitle,
                                questionImages: questionsData.questionImages,
                                questionText: questionsData.questionTitle,
                                questions: data.questions,
                                scoring: data.scoring || null,
                                questionType: questionsData.questionType,
                                negative: questionsData.questionType === 'DESCRIPTIVE' ? null : questionsData.negativeScore === '0' ? false : true,
                                negativeScore: questionsData.negativeScore === '0' ? 0 : parseFloat(questionsData.negativeScore)

                            })
                            openScoreDialog(false)
                        }}
                        loading={props.loading}
                    />
                </DialogLayout>
            }
        </>
    );
};

export default memo(withSnackbar(EditQuestionType));
