import { Button, Grid, LinearProgress, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import { useFormik } from "formik";
import { withSnackbar } from "notistack";
import React, { useState, memo, useRef, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
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
import CloseIcon from '@material-ui/icons/Close';

const dropZoneIcon = () => (
    <div>
        <FileIcon viewBox="0 0 50 50" />
    </div>
)

function AddSingleQuestion({ initialValues, questions, ...props }) {
    const classes = useStyles()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [correctChoice, setCorrectChoice] = useState(initialValues?.correctChoice || "")
    const {
        uploudChunkFile,
        successUpload,
        arrayID,
        uploadError,
        hashCode,
        objectFile,
        cancelAll,
        endInsert,
    } = useUploadChunk();
    const [questionImages, setQuestionImages] = useState(initialValues?.questionImages || [])
    const [answerImages, setAnswerImages] = useState(initialValues?.answerImages || [])
    const [questionType, setQuestionType] = useState(initialValues?.singleQuestionType || (initialValues.questionType === 'GROUP' ? '""' : initialValues.questionType))
    const [qUploadStart, setQUploadStart] = useState(false)
    const [aUploadStart, setAUploadStart] = useState(false)
    const [selectedFile, setSelectedFile] = useState()

    const StyledDropZoneQuestion = withStyles((theme) => ({
        root: {
            height: 214,
            minHeight: 214,
            marginTop: 19,
            marginBottom: 40,
            backgroundColor: (questionImages.length > 9 || props.sameMode) ? theme.textColor.fivePercent : 'rgba(63,83,217,0.05)',
            border: 'none',
            backgroundImage:
                (questionImages.length > 9 || props.sameMode) ?
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%230C0B31B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                    :
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233F53D9B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            borderRadius: 8,
            padding: '22px 45px',

            outline: 'none !important',
            pointerEvents: (questionImages.length > 9 || props.sameMode) ? 'none' : 'auto',
            [theme.breakpoints.down('sm')]: {
                padding: '22px 35px',

            },
        },
        textContainer: {
            outline: 'none !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: "column-reverse",
            height: 170,
            '&>div': {
                width: 70,
                height: 70,
                backgroundColor: (questionImages.length > 9 || props.sameMode) ? '#0c0b311a' : 'rgba(63,83,217,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                    width: 40,
                    height: 40,
                    color: (questionImages.length > 9 || props.sameMode) ? '#0c0b3199' : 'rgba(63,83,217,1)'
                }
            }
        },
        text: {
            marginTop: 31,
            fontSize: 13,
            marginBottom: 0,
            lineHeight: 2.14,
            color: (questionImages.length > 9 || props.sameMode) ? '#0c0b31b3' : theme.textColor.primary,
            '&>span': {
                color: (questionImages.length > 9 || props.sameMode) ? '#0c0b3199' : '#3f53d9',
                fontSize: 14,
                fontFamily: theme.font.bold
            }
        }
    }))(DropzoneArea);

    const StyledDropZoneAnswer = withStyles((theme) => ({
        root: {
            height: 214,
            minHeight: 214,
            marginTop: 19,
            marginBottom: 40,
            backgroundColor: (answerImages.length > 9 || props.sameMode) ? theme.textColor.fivePercent : 'rgba(63,83,217,0.05)',
            border: 'none',
            backgroundImage:
                (answerImages.length > 9 || props.sameMode) ?
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%230C0B31B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                    :
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233F53D9B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            borderRadius: 8,
            padding: '22px 45px',

            outline: 'none !important',
            pointerEvents: (answerImages.length > 9 || props.sameMode) ? 'none' : 'auto',
            [theme.breakpoints.down('sm')]: {
                padding: '22px 35px',
            },
        },
        textContainer: {
            outline: 'none !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: "column-reverse",
            height: 170,
            '&>div': {
                width: 70,
                height: 70,
                backgroundColor: (answerImages.length > 9 || props.sameMode) ? '#0c0b311a' : 'rgba(63,83,217,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                    width: 40,
                    height: 40,
                    color: (answerImages.length > 9 || props.sameMode) ? '#0c0b3199' : 'rgba(63,83,217,1)'
                }
            }
        },
        text: {
            marginTop: 31,
            fontSize: 13,
            marginBottom: 0,
            lineHeight: 2.14,
            color: (answerImages.length > 9 || props.sameMode) ? '#0c0b31b3' : theme.textColor.primary,
            '&>span': {
                color: (answerImages.length > 9 || props.sameMode) ? '#0c0b3199' : '#3f53d9',
                fontSize: 14,
                fontFamily: theme.font.bold
            }
        }
    }))(DropzoneArea);

    const validationSchema = questionType === 'MULTIPLE_CHOICE' ?
        Yup.object().shape({
            questionTitle: questionImages.length != 0 ?
                Yup.string("متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                    .min(10, "متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                    .max(300, "متن سوال نباید بیشتر از ۳۰۰ کاراکتر باشد")
                :
                Yup.string("متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                    .min(10, "متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                    .max(300, "متن سوال نباید بیشتر از ۳۰۰ کاراکتر باشد")
                    .required("پر کردن این فیلد الزامی می باشد"),
            answerTitle: Yup.string()
                .min(10, "متن پاسخ نباید کمتر از ۱۰ کاراکتر باشد")
                .max(300, "متن پاسخ نباید بیشتر از ۳۰۰ کاراکتر باشد"),
            correctChoice: Yup.string()
                .required("انتخاب پاسخ سوال الزامی می باشد"),
        }) :
        Yup.object().shape({
            questionTitle: questionImages.length != 0 ?
            Yup.string("متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                .min(10, "متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                .max(300, "متن سوال نباید بیشتر از ۳۰۰ کاراکتر باشد")
            :
            Yup.string("متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                .min(10, "متن سوال نباید کمتر از ۱۰ کاراکتر باشد")
                .max(300, "متن سوال نباید بیشتر از ۳۰۰ کاراکتر باشد")
                .required("پر کردن این فیلد الزامی می باشد"),
            answerTitle: Yup.string()
                .min(10, "متن پاسخ نباید کمتر از ۱۰ کاراکتر باشد")
                .max(300, "متن پاسخ نباید بیشتر از ۳۰۰ کاراکتر باشد"),
                singleQuestionType: Yup.string().test(
                    'is-empty',
                    "پر کردن این فیلد الزامی می باشد",
                    (value, context) => value !== '""',
                ),
        })

    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }
    const formik = useFormik({
        initialValues: {
            ...initialValues,
            questionTitle: initialValues?.questionTitle || initialValues?.questionText || "",
            questionImages: initialValues?.questionImages || [],
            answerTitle: initialValues?.answerTitle || initialValues?.answerText || "",
            answerImages: initialValues?.answerImages || [],
            correctChoice: initialValues?.correctChoice || "",
            singleQuestionType: initialValues?.singleQuestionType || (initialValues.questionType === 'GROUP' ? '""' : initialValues.questionType),
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            props.handleSubmit(values, props.edit, initialValues)
        },
    });

    const handleUpload = (files, type) => {
        if (files.length > 0) {
            let flag = true;
            files.map((file, index) => {
                if (
                    file.type.search('image/jpeg') === -1
                    &&
                    file.type.search('image/jpg') === -1
                    &&
                    file.type.search('image/png') === -1
                ) {
                    flag = false
                }
            })

            if (flag) {
                if (type === 'question') {
                    let tmp = [...questionImages]
                    files.map((file, index) => {
                        transform.getBase64(file, function (res) {
                            let rand = Math.floor(Math.random() * 1000) + 1
                            if (tmp.find(x => x?.base === res) === undefined) {
                                setSelectedFile({ ...file, key: `question${rand}` })
                                setQUploadStart(true)
                                tmp.push({
                                    base: res,
                                    key: `question${rand}`,
                                    fileID: 0,
                                    hashCode: null
                                })
                                setQuestionImages([...tmp])
                                uploudChunkFile({ [`question${rand}`]: [file] })
                            }
                        })
                    });
                } else if (type === 'answer') {
                    let tmp = [...answerImages]
                    files.map((file, index) => {
                        transform.getBase64(file, function (res) {
                            let rand = Math.floor(Math.random() * 1000) + 1
                            if (tmp.find(x => x.base === res) === undefined) {
                                setSelectedFile({ ...file, key: `answer${rand}` })
                                setAUploadStart(true)
                                tmp.push({
                                    base: res,
                                    key: `answer${rand}`,
                                    fileID: 0,
                                    hashCode: null
                                })
                                setAnswerImages([...tmp])
                                uploudChunkFile({ [`answer${rand}`]: [file] })
                            }
                        })
                    });
                }
            } else {
                props.enqueueSnackbar('فرمت فایل انتخابی صحیح نمی باشد', {
                    variant: 'error',
                    style: {},
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
            }
        }
    }

    useEffect(() => {
        if (successUpload) {
            let tmp = [...questionImages]
            tmp.map((image, index) => {
                if (image) {
                    if (arrayID[image.key]) {
                        tmp[index].fileID = arrayID[image.key][0].fileId
                        tmp[index].hashCode = arrayID[image.key][0].hashCode
                    }
                }
            })
            setQuestionImages([...tmp])
            formik.setFieldValue('questionImages', [...tmp]);

            // for answers
            tmp = [...answerImages]
            tmp.map((image, index) => {
                if (arrayID[image.key]) {
                    tmp[index].fileID = arrayID[image.key][0].fileId
                    tmp[index].hashCode = arrayID[image.key][0].hashCode
                }
            })
            setAnswerImages([...tmp])
            formik.setFieldValue('answerImages', [...tmp]);
            endInsert();
            setQUploadStart(false)
            setAUploadStart(false)
        }
    }, [successUpload]);

    const handleDeleteImage = (item, type) => {
        let tmp = type === 'question' ? [...questionImages] : [...answerImages]
        let index = tmp.indexOf(item);
        if (index !== -1) {
            tmp.splice(index, 1)
        }
        if (type === 'question') {
            setQuestionImages([...tmp])
            formik.setFieldValue('questionImages', [...tmp]);
        } else {
            setAnswerImages([...tmp])
            formik.setFieldValue('answerImages', [...tmp]);
        }
    }

    const handleDeleteImageByKey = (item, type) => {
        let tmp = type === 'question' ? [...questionImages] : [...answerImages]
        let index = tmp.findIndex(x => x.key === item.key);
        if (index !== -1) {
            tmp.splice(index, 1)
        }
        if (type === 'question') {
            setQuestionImages([...tmp])
            formik.setFieldValue('questionImages', [...tmp]);
        } else {
            setAnswerImages([...tmp])
            formik.setFieldValue('answerImages', [...tmp]);
        }
    }

    return (
        <DialogLayout
            customBack={false}
            withCloseIcon={false}
            open={props.open}
            closeModal={() => {
                props.handleClose()
            }}
            transparent
            className={{
                root: classes.dialogRoot
            }}
            title={props.title}
            style={{ position: 'static', padding: 0 }}
        >
            <div style={{ boxShadow: addListShadow, width: '100%', height: 91, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={(formik.handleSubmit)}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                    <Grid container spacing={0}>
                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Typography className={classes.titleText}>
                                (سوالات) خود را میتوانید در قالب یک متن یا ۱۰ تصویر یا هر دو تعریف نمایید
                            </Typography>
                            {
                                initialValues.questionType === 'GROUP' &&
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <SelectForm
                                        activityStyle
                                        label="نوع سوال"
                                        name={"singleQuestionType"}
                                        formik={formik}
                                        className={classes.formInput}
                                        disabled={props.sameMode}
                                        handleChange={(e) => {
                                            setQuestionType(e.target.value)
                                            formik.setFieldValue('correctChoice', "");
                                            setCorrectChoice("")
                                        }}
                                        svgIcon
                                        icon={<BlackboardSidebar />}
                                        required
                                        options={
                                            [
                                                { title: 'انتخاب کنید', value: '""' },
                                                { title: "تستی", value: 'MULTIPLE_CHOICE' },
                                                { title: "تشریحی", value: 'DESCRIPTIVE' },
                                            ]
                                        }
                                    />
                                </Grid>
                            }
                            <Grid item xs={12}>
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={300}
                                    label=" متن توضیحی"
                                    characterNumber
                                    name={"questionTitle"}
                                    formik={formik}
                                    rows={7}
                                    rowsMax={7}
                                    className={classes.decription}
                                    placeholder="توضیحات مربوط به سوالات را در این قسمت وارد نمایید"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                ‍‍‍‍<div className={classes.dropzoneTitle}>
                                    <Typography>تصویر سوال</Typography>
                                    <Typography>حجم حداکثر ۳۰۰ مگابایت</Typography>
                                </div>
                                <StyledDropZoneQuestion
                                    Icon={dropZoneIcon}
                                    showPreviews={false}
                                    showPreviewsInDropzone={false}
                                    filesLimit={1}
                                    previewText={false}
                                    maxFileSize={300000000}
                                    showAlerts={false}
                                    dropzoneText={
                                        qUploadStart ?
                                            <div className={classes.uploadFileContainer}>
                                                <CloseIcon onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    cancelAll()
                                                    endInsert()
                                                    setQUploadStart(false)
                                                    handleDeleteImageByKey(selectedFile, 'question')
                                                    setSelectedFile(null)
                                                }} />
                                                <div className={classes.progressContainer}>
                                                    <Typography>{selectedFile?.path}</Typography>
                                                    <LinearProgress className={classes.progress} />
                                                </div>
                                            </div>
                                            :
                                            isMobile ?
                                                <> تصویر صورت سوال خود را در اینجا بارگذاری نمایید<br /><span>انتخاب فایل</span> </>
                                                :
                                                <>  تصویر  صورت سوال خود را بکشید و  در اینجا رها کنید<br />یا جهت <span>انتخاب فایل</span> کلیک کنید </>
                                    }
                                    onChange={(files) => {
                                        handleUpload(files, 'question')
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.imagesContainer}>
                                {
                                    questionImages?.map((image) => (
                                        image?.hashCode &&
                                        <div style={{ backgroundImage: `url(${image.base || image.url})` }} className={classes.questionImageContainer}>
                                            <div className={classes.questionImageOverlay} onClick={() => handleDeleteImage(image, 'question')}>
                                                <TrashIcon />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Grid>
                            <Typography className={classes.titleText}>
                                (پاسخ ها) را میتوانید در قالب یک متن یا حداکثر ۱۰ تصویر یا هر دو تعریف نمایید. تعریف پاسخ اجباری نیست
                            </Typography>
                            {
                                questionType === 'MULTIPLE_CHOICE' &&

                                <Grid container className={classes.choicesContainer}>
                                    <Typography>گزینه صحیح</Typography>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <div
                                            onClick={() => {
                                                if (!props.sameMode) {
                                                    setCorrectChoice(1)
                                                    formik.setFieldValue('correctChoice', 1);
                                                }
                                            }}
                                            className={clsx(correctChoice === 1 && classes.selectedChoice)}>الف</div>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <div
                                            onClick={() => {
                                                if (!props.sameMode) {
                                                    setCorrectChoice(2)
                                                    formik.setFieldValue('correctChoice', 2);
                                                }

                                            }}
                                            className={clsx(correctChoice === 2 && classes.selectedChoice)}>ب</div>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <div
                                            onClick={() => {
                                                if (!props.sameMode) {
                                                    setCorrectChoice(3)
                                                    formik.setFieldValue('correctChoice', 3);
                                                }
                                            }}
                                            className={clsx(correctChoice === 3 && classes.selectedChoice)}>ج</div>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <div
                                            onClick={() => {
                                                if (!props.sameMode) {
                                                    setCorrectChoice(4)
                                                    formik.setFieldValue('correctChoice', 4);
                                                }
                                            }}
                                            className={clsx(correctChoice === 4 && classes.selectedChoice)}>د</div>
                                    </Grid>
                                    {formik.errors['correctChoice'] && formik.touched['correctChoice'] && (
                                        <p className={classes.errorMessage}>
                                            <span>{formik.errors['correctChoice']}</span>
                                        </p>
                                    )}
                                </Grid>
                            }
                            <Grid item xs={12}>
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={300}
                                    label=" متن توضیحی"
                                    characterNumber
                                    name={"answerTitle"}
                                    formik={formik}
                                    disabled={props.sameMode}
                                    rows={7}
                                    className={classes.decription}
                                    placeholder="توضیحات مربوط به پاسخ را در این قسمت وارد نمایید"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                ‍‍‍‍<div className={classes.dropzoneTitle}>
                                    <Typography>تصویر پاسخ</Typography>
                                    <Typography>حجم حداکثر ۳۰۰ مگابایت</Typography>
                                </div>
                                <StyledDropZoneAnswer
                                    Icon={dropZoneIcon}
                                    showPreviews={false}
                                    showPreviewsInDropzone={false}
                                    filesLimit={1}
                                    maxFileSize={300000000}
                                    previewText={false}
                                    showAlerts={false}
                                    dropzoneText={
                                        aUploadStart ?
                                            <div className={classes.uploadFileContainer}>
                                                <CloseIcon onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    cancelAll()
                                                    endInsert()
                                                    setAUploadStart(false)
                                                    handleDeleteImageByKey(selectedFile, 'answer')
                                                    setSelectedFile(null)
                                                }} />
                                                <div className={classes.progressContainer}>
                                                    <Typography>{selectedFile?.path}</Typography>
                                                    <LinearProgress className={classes.progress} />
                                                </div>
                                            </div>
                                            :
                                            isMobile ?
                                                <> تصویر پاسخ خود را در اینجا بارگذاری نمایید<br /><span>انتخاب فایل</span> </>
                                                :
                                                <>  تصویر  پاسخ خود را بکشید و  در اینجا رها کنید<br />یا جهت <span>انتخاب فایل</span> کلیک کنید </>
                                    }
                                    onChange={(files) => {
                                        handleUpload(files, 'answer')
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    answerImages?.map((image) => (
                                        image?.hashCode &&
                                        <div className={classes.questionImageContainer}>
                                            <img style={{ width: '100%' }} src={image?.url || image?.base} />
                                            <div className={classes.questionImageOverlay} onClick={() => handleDeleteImage(image, 'answer')}>
                                                <TrashIcon />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Scrollbars>
                <button type="submit" className={classes.stepBTN}>بعدی</button>
            </form>
        </DialogLayout>
    )
}

export default memo(withSnackbar(AddSingleQuestion));

