import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import SelectForm from "../../../../../form/SelectForm";
import BookmarkIcon from "../../../../../../../../assets/images/BookmarkAlt";
import DialogLayout from "../dialog/DialogLayout";
import AddQuestions from "../../../InsertActivity/Steps/AddQuestions";

const EditMultiFile = ({ initialValues, descriptives, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [scoreType, setScoreType] = useState(initialValues.scoreType)
    const [openQuestionsDialog, setOpenQuestionsDialog] = useState(false)

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
            console.log('values', values)
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
                                        className={classes.formInput}

                                        label="نحوه تعربف سوالات"
                                        name={"multiFile"}
                                        renderValue={(value) => {
                                            if (value == false) {
                                                return "گروهی"
                                            } else if (value == true) {
                                                return "جداگانه"
                                            } else {
                                                return "انتخاب کنید"
                                            }
                                        }}
                                        formik={formik}
                                        handleChange={(e) => setScoreType(e.target.value)}
                                        svgIcon
                                        icon={<BookmarkIcon />}
                                        required
                                        options={
                                            [
                                                { title: 'انتخاب کنید', value: '""' },
                                                { title: "گروهی (برای کل فعالیت یک یا چند فایل تعریف میکنم)", value: false },
                                                { title: "جداگانه (برای هر سوال یک یا چند فایل تعریف میکنم)", value: true },

                                            ]
                                        }
                                    />
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
                                questions: formik.values.multiFile === initialValues.multiFile ? initialValues.questions : [],
                                questionText: formik.values.multiFile === initialValues.multiFile ? initialValues.questionText : "",
                                answerText: formik.values.multiFile === initialValues.multiFile ? initialValues.answerText : "",
                                questionImages: formik.values.multiFile === initialValues.multiFile ? initialValues.questionImages : [],
                                multiFile: formik.values.multiFile
                            }
                        }
                        handelStep={(step, values) => {
                            let questionsTemp = []
                            values.questions.map((q, index) => {
                                questionsTemp.push({
                                    "answerImages": values.multiFile ? q.answerImages.map(function (image) {
                                        return image.hashCode || image;
                                    }) : [],
                                    "answerText": values.multiFile ? q.answerTitle || q.answerText : "",
                                    "correctChoice": !q.correctChoice ? null : q.correctChoice,
                                    // "note": "string",
                                    "questionImages": values.multiFile ? q.questionImages.map(function (image) {
                                        return image.hashCode || image;
                                    }) : [],
                                    "questionText": values.multiFile ? q.questionTitle || q.questionText : '',
                                    "questionType": values.multiFile ? q.singleQuestionType : q.questionType,
                                    "score": values.tmpQuestions[index].score,
                                    "sequence": values.tmpQuestions[index].sequence || 0
                                })
                            })
                            let answerImages = []
                            {
                                !values.multiFile && values.answerImages.map((image) => {
                                    answerImages.push(image.hashCode || image)
                                })
                            }
                            let questionImages = []
                            {
                                !values.multiFile && values.questionImages.map((image) => {
                                    questionImages.push(image.hashCode || image)
                                })
                            }
                            props.handleSubmit({
                                answerImages: answerImages,
                                answerText: values.answerTitle || null,
                                questionImages: questionImages,
                                questionText: values.questionTitle || null,
                                questions: questionsTemp,
                                multiFile: formik.values.multiFile
                            })
                            setOpenQuestionsDialog(false)
                        }}
                    />
                </DialogLayout>
            }
        </>
    );
};

export default memo(withSnackbar(EditMultiFile));
