import { withSnackbar } from "notistack";
import React, { useState, memo, useRef, useEffect } from "react";
import { Grid, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import useStyles from "./Styles"
import { useFormik } from "formik";
import Scrollbars from "react-custom-scrollbars";
import { numberFormat } from "../../../../../../../../utilities";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import clsx from "clsx";
import AddSingleQuestion from "./AddSingleQuestion";
import EditPen from "../../../../../../../../assets/images/EditPen";
import TrashIcon from "../../../../../../../../assets/images/TrashIcon";
import useDownloadChunk from "../../../../../../../../customHook/downloadChunk";
import WarningIcon from "../../../../../../../../assets/images/WarningIcon";

function AddQuestionsMultiFile({ initialValues, handelStep, updateData, error, ...props }) {
    const classes = useStyles()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [questions, setQuestions] = useState(initialValues.questions || [])
    const [edit, setEdit] = useState(false)
    const [editValues, setEditValues] = useState({})
    const [fileDatas, downloadChunkFile] = useDownloadChunk()
    const [addQuestionDialog, setAddQuestionDialog] = useState(false)

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
            questions: initialValues.questions || [],
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            let questionsTmp = []
            if (initialValues.resultType === 'NUMERIC') {
                formik.values.questions.map((item) => {
                    questionsTmp.push({
                        ...item,
                        score: (initialValues.maxGrade / initialValues.questionCount)
                    })
                })

                formik.setFieldValue('questions', questionsTmp);
                handelStep("addScore", {
                    ...formik.values,
                    questions: questionsTmp
                });
            } else {
                formik.values.questions.map((item) => {
                    questionsTmp.push({
                        ...item
                    })
                })

                formik.setFieldValue('questions', questionsTmp);
                handelStep("setSetting", {
                    ...formik.values,
                    questions: questionsTmp
                });
            }
        },
    });

    useEffect(() => {
        questions.map((q) => {
            q.questionImages?.map((img) => {
                downloadChunkFile(img)
            })
            q.answerImages?.map((img) => {
                downloadChunkFile(img)
            })
        })
    }, [])

    useEffect(() => {
        if (fileDatas) {
            let qTemp = [...questions]
            questions.map((q, qIndex) => {
                if (q.questionImages) {
                    let tmp = []
                    qTemp = [...questions]
                    let index = q.questionImages?.indexOf(fileDatas.hashCode)
                    if (index !== -1) {

                        tmp = [...q.questionImages]
                        tmp[index] = fileDatas
                        qTemp[qIndex].questionImages = [...tmp]
                    }
                }
                if (q.answerImages) {
                    let tmp = []
                    let index = q.answerImages.indexOf(fileDatas.hashCode)
                    if (index !== -1) {
                        tmp = [...q.answerImages]
                        tmp[index] = fileDatas
                        qTemp[qIndex].answerImages = [...tmp]
                    }
                }
            });
            setQuestions([...qTemp])
        }
    }, [fileDatas])

    const handleAddQuestion = () => {
        setEditValues({})
        setEdit(false)
        setAddQuestionDialog(true)
    }
    const handleSubmitQuestion = (values, edit, editValues = {}) => {
        if (!edit) {
            let tmp = [...questions]
            tmp.push({
                sequence: tmp.length + 1,
                questionTitle: values.questionTitle,
                questionImages: values.questionImages,
                answerTitle: values.answerTitle,
                answerImages: values.answerImages,
                correctChoice: values.correctChoice,
                singleQuestionType: values.singleQuestionType,
            })
            formik.setFieldValue('questions', [...tmp]);
            setQuestions([...tmp])
            updateData && updateData({ questions: [...tmp] })
        } else {
            let tmp = [...questions]
            tmp[editValues.index] = {
                sequence: editValues.index + 1,
                questionTitle: values.questionTitle,
                questionImages: values.questionImages,
                answerTitle: values.answerTitle,
                answerImages: values.answerImages,
                correctChoice: values.correctChoice,
                singleQuestionType: values.singleQuestionType,
            }
            formik.setFieldValue('questions', [...tmp]);
            setQuestions([...tmp])
            updateData && updateData({ questions: [...tmp] })
        }
        setAddQuestionDialog(false)
    }

    const handleDeleteQuestion = (q) => {
        let tmp = [...questions]
        let index = tmp.indexOf(q);
        if (index !== -1) {
            tmp.splice(index, 1)
        }
        formik.setFieldValue('questions', [...tmp]);
        setQuestions([...tmp])
    }
    const handleEditQuestion = (q, index) => {
        setEditValues({ ...q, index: index })
        setEdit(true)
        setAddQuestionDialog(true)
    }
    return (
        <>
            {addQuestionDialog &&
                <AddSingleQuestion
                    handleSubmit={handleSubmitQuestion}
                    editValues={editValues}
                    ini={initialValues}
                    sameMode={props.sameMode}
                    initialValues={{ ...initialValues, ...editValues }}
                    open={addQuestionDialog}
                    edit={edit}
                    handleClose={() => setAddQuestionDialog(false)}
                    title={`${edit ? "ویرایش" : "تعریف"} سوال ${edit ? numberFormat.toPersianDigits(editValues.index + 1) : numberFormat.toPersianDigits(questions.length + 1)}`}
                />}
            {error &&
                <div className={classes.errorContainer} style={{ marginTop: 0 }}>
                    <WarningIcon />
                    <Typography>
                        {error}
                    </Typography>
                </div>
            }
            <div style={{ width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        {(questions.length < initialValues.questionCount && !props.sameMode) &&
                            <>
                                <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                    <Typography className={classes.titleText}>
                                        تعداد {numberFormat.toPersianDigits(initialValues.questionCount)} سوال را به ترتیب وارد کنید
                                    </Typography>
                                </Grid>
                                <Grid onClick={handleAddQuestion} item md={12} xs={12} container className={classes.addQuestionBtnContainer}>
                                    <AddCircleOutlineIcon />
                                    <Typography> تعریف سوال {numberFormat.toPersianDigits(questions.length + 1)}</Typography>
                                </Grid>
                            </>
                        }
                        <div className={clsx(classes.questionsContainer, questions.length >= initialValues.questionCount && classes.removeBorder)}>
                            {
                                questions.map((question, index) => (
                                    <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                        <div className={classes.questionControls}>
                                            <div>{numberFormat.toPersianDigits(index + 1)}</div>
                                            {!props.sameMode &&
                                                <div>
                                                    <EditPen onClick={() => handleEditQuestion(question, index)} />
                                                    <TrashIcon onClick={() => handleDeleteQuestion(question)} />
                                                </div>}
                                        </div>
                                        <div className={classes.questionTitle}>
                                            <Typography>
                                                {question.questionText || question.questionTitle}
                                            </Typography>
                                        </div>
                                        <Grid container className={classes.questionImages}>
                                            {question.questionImages?.map((image) => (
                                                <div  style={{backgroundImage:`url(${image.base || image.url})`}} className={classes.questionImageContainer}>
                                                </div>
                                            ))}
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </div>

                    </Grid>
                </Scrollbars>
                <button type="submit" disabled={questions.length < initialValues.questionCount} className={clsx(classes.stepBTN, questions.length < initialValues.questionCount && classes.disableBtn)}>بعدی</button>
            </form>
        </>
    )
}

export default memo(withSnackbar(AddQuestionsMultiFile));

