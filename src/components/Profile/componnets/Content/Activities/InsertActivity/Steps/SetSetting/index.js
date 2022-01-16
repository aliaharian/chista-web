import React, { useState, memo, useCallback, useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import jMoment from "moment-jalaali";
import useStyles from "../Styles";
import { useSelector } from "react-redux";
import StartTime from "./SettingItem/StartTime";
import EndTime from "./SettingItem/EndTime";
import { useFormik } from "formik";
import Duration from "./SettingItem/Duration";
import axios from "axios";

const SetSetting = ({
    photo,
    title,
    handelStep,
    handleCloseAll,
    addContactNumber,
    memberCount,
    initialValues,
    allData,
    updateData,
    ...props
}) => {
    const classes = useStyles();
    const [startTime, setStartTime] = useState(Math.floor(initialValues.startTime / 1000) || "");
    const [endTime, setEndTime] = useState(Math.floor(initialValues.endTime / 1000) || "");
    const [loading, setLoading] = useState(false);

    const [startHour, setStartHour] = useState(initialValues.startHour || [0, 0]);
    const [endHour, setEndHour] = useState(initialValues.endHour || [0, 0]);
    const [duration, setDuration] = useState(initialValues.duration || null);

    const user = useSelector((state) => state.user.user);

    const formik = useFormik({
        initialValues: {
            ...initialValues,
            duration: initialValues.duration || "",
            startTime: initialValues.startTime || "",
            endTime: initialValues.endTime || "",
            startHour: initialValues.startHour || [0, 0],
            endHour: initialValues.endHour || [0, 0]
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            runCheck()
        },
    });

    const runCheck = useCallback(async () => {
        setLoading(true)
        let { values } = formik

        let answerImages = []
        {
            !values.multiFile && values.answerImages.map((image) => {
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
            !values.multiFile && values.questionImages.map((image) => {
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
                "answerText": values.multiFile ? (q.answerTitle|| q.answerText) : "",
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
                "questionText": values.multiFile ? (q.questionTitle|| q.questionText) : '',
                "questionType": qType,
                "score": q.score,
            })
        })

        let datas = {
            "activityType": (values.activityType === 'EXAM' || values.activityType === 'ASSIGNMENT') ? values.activityType : 'OTHER',
            "activityTypeOther": (values.activityType === 'EXAM' || values.activityType === 'ASSIGNMENT') ? null : values.activityType,
            "answerImages": answerImages,
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
        try {
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/checkDraft?checkPacket=true`, datas
            );
            setLoading(false)
            try {
                handelStep("finalCheck", {
                    ...formik.values,
                    finalCheckResult: response.data
                });
            }
            catch (err) {
                setLoading(false)
                handelStep("finalCheck", {
                    ...formik.values,
                    finalCheckResult: {
                        message: err.response?.data.message,
                        type: err.response?.data.info || 'active'
                    }
                });
            }
        } catch (err) {
            setLoading(false)
            handelStep("finalCheck", {
                ...formik.values,
                finalCheckResult: {
                    message: err.response?.data.message,
                    type: err.response?.data.info
                }
            });
        }
    }, [formik.values]);

    useEffect(() => {
        updateData({
            startTime: formik.values.startTime.toString().length < 13 ? formik.values.startTime * 1000 : formik.values.startTime,
            endTime: formik.values.endTime.toString().length < 13 ? formik.values.endTime * 1000 : formik.values.endTime,
            startHour: formik.values.startHour,
            endHour: formik.values.endHour
        })

    }, [formik.values])

    const handelStartTime = (date) => {
        formik.setFieldValue('startTime', jMoment(date).unix() * 1000);
        setStartTime(jMoment(date).unix());
    };
    const handelEndTime = (date) => {
        formik.setFieldValue('endTime', jMoment(date).unix() * 1000);
        setEndTime(jMoment(date).unix());
    };

    const handelStartHour = (hour) => {
        formik.setFieldValue('startHour', hour);
        setStartHour(hour);
    };
    const handelEndHour = (hour) => {
        formik.setFieldValue('endHour', hour);
        setEndHour(hour);
    };

    return (
        <div
            className={classes.baseInfoMainContainer}
        >
            <div style={{ width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid container spacing={0}>
                    <Grid item md={12} className={classes.addClassHeaderSetting}>
                        <Typography className={classes.settingTitle}>
                            در صورتی که زمان شروع و پایان را تعیین نکنید فعالیت به صورت پیش فرض در بخش فعالیت ها ذخیره میشود
                        </Typography>
                    </Grid>
                    <Grid container className={classes.addClassSettingContainer}>
                        <StartTime
                            handelStartTime={handelStartTime}
                            startTime={startTime}
                            startHour={startHour}
                            endTime={endTime}
                            endHour={endHour}
                            duration={duration}
                            handleCloseAll={handleCloseAll}
                            handelStartHour={handelStartHour}
                        />
                    </Grid>
                    <Grid container className={classes.addClassSettingContainer}>
                        <EndTime
                            handelEndTime={handelEndTime}
                            startTime={startTime}
                            startHour={startHour}
                            endTime={endTime}
                            endHour={endHour}
                            duration={duration}
                            handleCloseAll={handleCloseAll}
                            handelEndHour={handelEndHour}
                        />
                    </Grid>
                    <Grid container className={classes.addClassSettingContainer}>
                        <Duration
                            duration={duration}
                            setDuration={(e) => {
                                formik.setFieldValue('duration', e);
                                setDuration(e)
                            }}
                            handleCloseAll={handleCloseAll}
                            initialValues={initialValues}
                            updateData={updateData}
                            startTime={startTime}
                            startHour={startHour}
                            endTime={endTime}
                            endHour={endHour}
                        />
                    </Grid>
                </Grid>
                <button type="submit" style={loading ? { pointerEvents: 'none' } : {}} className={classes.stepBTN}>{loading
                    ?
                    <CircularProgress size={13} />
                    :
                    `بعدی`
                }</button>
            </form>
        </div>
    );
};

export default memo(SetSetting);