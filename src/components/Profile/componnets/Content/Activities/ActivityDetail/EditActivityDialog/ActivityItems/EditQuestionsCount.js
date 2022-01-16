import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid, TextField } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import DialogLayout from "../dialog/DialogLayout";
import AddQuestions from "../../../InsertActivity/Steps/AddQuestions";
import { numberFormat } from "../../../../../../../../utilities";
import EditScoreType from "./EditScoreType";

const EditQuestionsCount = ({ initialValues, descriptives, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [error, setError] = useState()
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
                                    <div className={classes.countModalBody}>
                                        <div style={{ width: '100%' }}>
                                            <TextField
                                                type={'text'}
                                                className={classes.durationTextField}
                                                disableUnderline
                                                value={numberFormat.toPersianDigits(formik.values.questionsCount)}
                                                onChange={(e) => {
                                                    const regex = /[0-9]$/;
                                                    if (regex.test(e.target.value.toString()) || e.target.value === '') {
                                                        formik.setFieldValue('questionsCount', `${numberFormat.toEnglishDigits(e.target.value)}`);
                                                    } else {
                                                        formik.setFieldValue('questionsCount', `${e.target.value.substring(0, e.target.value.length - 1)}`);
                                                        return;
                                                    }
                                                }}
                                            />
                                            <span> سوال</span>
                                        </div>
                                    </div>
                                </Grid>
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
                                questionsCount: formik.values.questionsCount,
                                questionCount: formik.values.questionsCount,
                            }
                        }
                        error={error}
                        handelStep={(step, values) => {
                            let questionsTemp = []
                            if (values.questions.length > values.questionCount) {
                                setError(`تعداد سوالات باید برابر ${numberFormat.toPersianDigits(values.questionCount)} باشد`)
                            } else {
                                setError(null)
                                values.questions.map((q) => {
                                    questionsTemp.push({
                                        "answerImages": values.multiFile ? q.answerImages?.map(function (image) {
                                            return image.hashCode;
                                        }) : [],
                                        "answerText": values.multiFile ? q.answerText || q.answerTitle : "",
                                        "correctChoice": !q.correctChoice ? null : q.correctChoice,
                                        // "note": "string",
                                        "questionImages": values.multiFile ? q.questionImages?.map(function (image) {
                                            return image.hashCode;
                                        }) : [],
                                        "questionText": values.multiFile ? q.questionText || q.questionTitle : '',
                                        "questionType": values.multiFile ? q.singleQuestionType : q.questionType,
                                        "score": q.score,
                                        "sequence": q.sequence || 0
                                    })
                                })
                                let answerImages = []
                                {
                                    !values.multiFile && values.answerImages?.map((image) => {
                                        answerImages.push(image.hashCode || image)
                                    })
                                }
                                let questionImages = []
                                {
                                    !values.multiFile && values.questionImages?.map((image) => {
                                        questionImages.push(image.hashCode || image)
                                    })
                                }
                                console.log('values.questionImages',values.questionImages)
                                if (initialValues.scoring) {
                                    setQuestionsData({
                                        answerImages: answerImages,
                                        answerText: values.answerTitle || null,
                                        questionImages: questionImages,
                                        questionText: values.questionTitle || null,
                                        questions: questionsTemp,
                                        questionsCount: parseInt(formik.values.questionsCount)
                                    })
                                    setOpenScoreDialog(true)
                                } else {
                                    props.handleSubmit({
                                        answerImages: answerImages,
                                        answerText: values.answerTitle || null,
                                        questionImages: questionImages,
                                        questionText: values.questionTitle || null,
                                        questions: questionsTemp,
                                        questionsCount: parseInt(formik.values.questionsCount)
                                    })
                                }
                                setOpenQuestionsDialog(false)
                            }
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
                                questionsCount: questionsData.questionsCount,
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

export default memo(withSnackbar(EditQuestionsCount));
