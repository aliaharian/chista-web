import React, { useState, memo, useRef, useCallback } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import Scrollbars from "react-custom-scrollbars";
import CheckList from "../../../../../../../assets/images/CheckList";
import { dateTime, numberFormat } from "../../../../../../../utilities";
import { errorSnackbar } from "../../../../../../../../redux/user";
import axios from "axios";
import clsx from "clsx";

const FinalCheck = ({ handelStep, initialValues, ...props }) => {
    const classes = useStyles();

    const Dispatch = useDispatch()
    const infoScroll = useRef();
    const activityDescriptives = useSelector((state) => state.activity.activityDescriptives);

    const [addListShadow, setAddListShadow] = useState('none');
    const user = useSelector((state) => state.user.user);

    const [loading, setLoading] = useState(false);

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
            runSave()
        },
    });

    const runSave = useCallback(async () => {
        setLoading(true)
        let { values } = formik

        let answerImages = []
        {
            !values.multiFile && values.answerImages?.map((image) => {
                answerImages.push(image.hashCode)
            })
        }

        let examinees = []
        values.examinees.map((user) => {
            examinees.push({
                "memberId": user.memberId || user.id
            })
        })

        let questionImages = []
        {
            !values.multiFile && values.questionImages?.map((image) => {
                questionImages.push(image.hashCode)
            })
        }

        let questions = []
        let qType = ""

        values.questions.map((q) => {
            qType = values.multiFile ? (q.singleQuestionType || q.questionType) : q.questionType
            questions.push({
                "answerImages": values.multiFile ? q.answerImages?.map(function (image) {
                    return image.hashCode;
                }) : [],
                "answerText": values.multiFile ? (q.answerTitle || q.answerText): "",
                "correctChoice":
                    qType === 'MULTIPLE_CHOICE' ?
                        !q.correctChoice ?
                            null :
                            q.correctChoice :
                        null,
                "sequence": q.sequence,
                "questionImages": values.multiFile ? q.questionImages?.map(function (image) {
                    if (image) {
                        return image.hashCode
                    }
                }) : [],
                "questionText": values.multiFile ? (q.questionTitle || q.questionText): '',
                "questionType": qType,
                "score": q.score,
            })
        })

        try {
            const response = await axios.put(`${process.env.REACT_APP_ACTIVITY_URL}/activities`,
                {
                    "id": values.id || 0,
                    "activityType": (values.activityType === 'EXAM' || values.activityType === 'ASSIGNMENT') ? values.activityType : 'OTHER',
                    "activityTypeOther": (values.activityType === 'EXAM' || values.activityType === 'ASSIGNMENT') ? null : values.activityType, "answerImages": answerImages,
                    "answerText": values.answerTitle || values.answerText,
                    "classId": values.activityClassId,
                    "descriptiveId": initialValues.resultType === 'DESCRIPTIVE' ? initialValues.describeType : null,
                    "duration": values.duration === '' ? null : values.duration,
                    "endTime": values.endTime === '' ? null : values.endTime,
                    "examinees": examinees,
                    "multiFile": values.multiFile,
                    "name": values.name,
                    "negativeScore": initialValues.negativePoint === `""` ? null : initialValues.negativePoint,
                    "note": values.description,
                    "questionImages": questionImages,
                    "questionText": values.questionTitle || values.questionText,
                    "questionType": values.questionType,
                    "questions": questions,
                    "questionsCount": values.questionCount,
                    "scoring": initialValues.resultType === 'NUMERIC' ? initialValues.maxGrade : null,
                    "startTime": values.startTime === '' ? null : values.startTime,

                    "userPhone": user.username
                }
            );
            setLoading(false)
            props.handleCloseAll()
            handelStep("createActivity", {
                ...formik.values,
                addResult: response.data
            });
        } catch (err) {
            Dispatch(errorSnackbar(err));
            setLoading(false)
        }
    }, [formik.values]);

    const dateRender = (date) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(Math.floor(date / 1000));
        return (
            <div>
                <span>{day}</span>
                <span className={classes.dateMonth}>{month}</span>
                <span>{year}</span>
                <span> - </span>
                <span>{time}</span>
            </div>
        );
    };

    return (
        <div
            className={classes.baseInfoMainContainer}
        >
            <div style={{ width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid className={classes.finalCheckContainer} container spacing={0} style={{ marginTop: 40 }}>
                        {
                            initialValues?.finalCheckResult?.message &&
                            <Typography className={classes.finalCheckError}>
                                {initialValues?.finalCheckResult?.message}
                            </Typography>
                        }
                        <div className={classes.finalCheckTitle}>
                            <div>
                                <CheckList />
                            </div>
                            <div>
                                <Typography>{initialValues.activityType === 'EXAM' ?
                                    `آزمون` :
                                    initialValues.activityType === 'ASSIGNMENT' ?
                                        `تکلیف` :
                                        initialValues.activityType
                                } - {initialValues.name}</Typography>
                                <Typography>{numberFormat.toPersianDigits(initialValues.examinees.length)} نفر</Typography>
                            </div>
                        </div>
                        <div className={classes.finalCheckTable}>
                            <div>
                                <Typography>نوع سوالات</Typography>
                                <Typography>{initialValues.questionType === 'MULTIPLE_CHOICE' ? `تستی` : initialValues.questionType === 'DESCRIPTIVE' ? `تشریحی` : `ترکیبی`}</Typography>
                            </div>
                            <div>
                                <Typography>شیوه محاسبه</Typography>
                                <Typography>{initialValues.resultType === 'NUMERIC' ? `${initialValues.maxGrade} نمره ای` : activityDescriptives.find(x=>x.id ===initialValues.describeType).name}</Typography>
                            </div>
                            <div>
                                <Typography>تعداد سوالات</Typography>
                                <Typography>{numberFormat.toPersianDigits(initialValues.questionCount)} سوال</Typography>
                            </div>
                            <div>
                                <Typography>نحوه تعریف سوالات</Typography>
                                <Typography>{initialValues.multiFile ? 'جداگانه' : 'گروهی'}</Typography>
                            </div>
                            <div>
                                <Typography>نمره منفی</Typography>
                                <Typography>{initialValues.negativePointStr ?
                                    initialValues.negativePointStr :
                                    'ندارد'}</Typography>
                            </div>
                            <div>
                                <Typography>زمان شروع</Typography>
                                <Typography>{initialValues.startTime ? dateRender(initialValues.startTime) : `انتخاب نشده`}</Typography>
                            </div>
                            <div>
                                <Typography>زمان پایان</Typography>
                                <Typography>{initialValues.endTime ? dateRender(initialValues.endTime) : `انتخاب نشده`}</Typography>
                            </div>
                            <div>
                                <Typography>مدت فعالیت</Typography>
                                <Typography>{initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + ' دقیقه ' : `انتخاب نشده`}</Typography>
                            </div>
                        </div>
                    </Grid>
                </Scrollbars>
                <button type="submit" style={loading ? { pointerEvents: 'none' } : {}} className={clsx(
                    classes.stepBTN,
                    (initialValues?.finalCheckResult?.message) && classes.largerBtn
                )}>{loading
                    ?
                    <CircularProgress size={13} />
                    :
                    (initialValues?.finalCheckResult?.message) ?
                        `ذخیره ${initialValues?.finalCheckResult?.type === 'draft' ? ` پیش نویس` : ` غیر فعال`}` :
                        `ذخیره`
                    }</button>
            </form>
        </div>
    );
};

export default memo(withSnackbar(FinalCheck));
