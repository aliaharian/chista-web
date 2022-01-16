import { CircularProgress, Grid, LinearProgress, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import { useFormik } from "formik";
import { withSnackbar } from "notistack";
import React, { useState, memo, useRef, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import useStyles from "./Styles"
import FileIcon from '../../../../../../../assets/images/FileIcon'
import * as Yup from "yup";
import InputFormMultiline from "../../../../form/InputFormMultiline";
import { numberFormat, transform } from "../../../../../../../utilities";
import { DropzoneArea } from "material-ui-dropzone";
import useUploadChunk from "../../../../../../../customHook/uploadChunk";
import _ from 'lodash'
import TrashIcon from '../../../../../../../assets/images/TrashIcon'
import useDownloadChunk from "../../../../../../../customHook/downloadChunk";
import DialogLayout from "../../../Contacts/dialog/DialogLayout";
import clsx from "clsx";
import CloseIcon from '@material-ui/icons/Close';

const dropZoneIcon = () => (
    <div>
        <FileIcon viewBox="0 0 50 50" />
    </div>
)

function AnswerModal({ initialValues, open, closeModal, handelStep, loading, question, ...props }) {
    const classes = useStyles()
    const Dispatch = useDispatch()
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [fileDatas, downloadChunkFile] = useDownloadChunk()
    const [aUploadStart, setAUploadStart] = useState(false)
    const [selectedFile, setSelectedFile] = useState()

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const {
        uploudChunkFile,
        successUpload,
        arrayID,
        uploadError,
        hashCode,
        objectFile,
        endInsert,
        cancelAll,
    } = useUploadChunk();
    let [answerImages, setAnswerImages] = useState(initialValues().answerImages || [])
    const StyledDropZone = withStyles((theme) => ({
        root: {
            height: 214,
            minHeight: 214,
            // marginTop: 19,
            // marginBottom: 40,
            // backgroundColor: excelFile ? theme.textColor.fivePercent : 'rgba(63,83,217,0.05)',
            backgroundColor: answerImages.length > 4 ? theme.textColor.fivePercent : 'rgba(63,83,217,0.05)',
            // borderColor: excelFile ? '#0c0b31b3' : '#3f53d9b3',
            // borderWidth: 2,
            border: 'none',
            backgroundImage:
                answerImages.length > 4 ?
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%230C0B31B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
                    :
                    `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233F53D9B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            borderRadius: 8,
            padding: '22px 45px',

            outline: 'none !important',
            pointerEvents: (answerImages.length > 4 || aUploadStart) ? 'none' : 'auto',
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
                backgroundColor: answerImages.length > 4 ? '#0c0b311a' : 'rgba(63,83,217,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                    width: 40,
                    height: 40,
                    color: answerImages.length > 4 ? '#0c0b3199' : 'rgba(63,83,217,1)'
                }

            }
        },
        text: {
            marginTop: 31,
            fontSize: 13,
            marginBottom: 0,
            lineHeight: 2.14,
            color: answerImages.length > 4 ? '#0c0b31b3' : theme.textColor.primary,
            '&>span': {
                color: answerImages.length > 4 ? '#0c0b3199' : '#3f53d9',
                fontSize: 14,
                fontFamily: theme.font.bold
            }
        }
    }))(DropzoneArea);

    const validationSchema = Yup.object().shape({


        answer: answerImages.length === 0 ? Yup.string()
            .min(10, "متن پاسخ نباید کمتر از ۱۰ کاراکتر باشد")
            .max(1000, "متن پاسخ نباید بیشتر از ۱۰۰۰ کاراکتر باشد")
            .required("پر کردن این فیلد الزامی می باشد")
            :
            Yup.string()
                .min(10, "متن پاسخ نباید کمتر از ۱۰ کاراکتر باشد")
                .max(1000, "متن پاسخ نباید بیشتر از ۱۰۰۰ کاراکتر باشد")


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
            ...initialValues(),
            answer: initialValues().answer || "",
            answerImages: initialValues().answerImages || [],
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            handelStep(values, question);
        },
    });



    useEffect(() => {
        answerImages?.map((img) => {
            downloadChunkFile(img)
        })
    }, [])


    useEffect(() => {
        if (fileDatas) {

            let tmp = []
            let index = answerImages.indexOf(fileDatas.hashCode)
            if (index !== -1) {
                tmp = [...answerImages]
                tmp[index] = fileDatas
                setAnswerImages([...tmp])
            }
        }
    }, [fileDatas])


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
                if (type === 'answer') {
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
                    // persist:true,
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
            // for answers
            let tmp = [...answerImages]
            tmp.map((image, index) => {
                if (arrayID[image.key]) {
                    tmp[index].fileID = arrayID[image.key][0].fileId
                    tmp[index].hashCode = arrayID[image.key][0].hashCode
                }
            })
            setAnswerImages([...tmp])
            formik.setFieldValue('answerImages', [...tmp]);
            endInsert();
            setAUploadStart(false)

        }
    }, [successUpload]);

    const handleDeleteImage = (item) => {
        let tmp = [...answerImages]
        let index = tmp.indexOf(item);
        if (index !== -1) {
            tmp.splice(index, 1)
        }

        setAnswerImages([...tmp])
        formik.setFieldValue('answerImages', [...tmp]);


    }

    const handleDeleteImageByKey = (item, type) => {
        let tmp = type === 'question' ? [...questionImages] : [...answerImages]
        let index = tmp.findIndex(x => x.key === item.key);
        console.log('index', index)
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
            open={open}
            headerStyle={{ marginBottom: 0 }}
            withCloseIcon={true}
            closeModal={closeModal}
            className={{
                root: classes.root
            }}
            style={{ padding: 0, position: 'static' }}
            title={`پاسخ به سوال`}
        >
            <div style={{ boxShadow: addListShadow, width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
            ></div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Scrollbars ref={infoScroll} onScroll={handleScroll}>

                    <Grid container>

                        <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                            <Grid item xs={12}>
                                {
                                    answerImages?.map((image) => (
                                        image.hashCode &&
                                        <div className={classes.questionImageContainer}>
                                            <img style={{ width: '100%' }} src={image.base || image.url} />
                                            <div className={classes.questionImageOverlay} onClick={() => handleDeleteImage(image)}>
                                                <TrashIcon />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Grid>

                            <Grid item xs={12}>
                                {/* ‍‍‍‍<div className={classes.dropzoneTitle}>
                                    <Typography>تصویر سوال</Typography>
                                    <Typography>حجم حداکثر ۳۰۰ مگابایت</Typography>
                                </div> */}
                                <StyledDropZone
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
                                <InputFormMultiline
                                    errorClass={classes.formError}
                                    maxCharacter={1000}
                                    label=" توضیحات"
                                    characterNumber
                                    name={"answer"}
                                    formik={formik}
                                    // icon={Note}
                                    rows={7}
                                    className={classes.decription}
                                    placeholder="برای استاد خود توضیح بنویسید"
                                    required
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                </Scrollbars>

                <button type="submit" disabled={loading} className={clsx(classes.stepBTN, loading && classes.disableBtn)}>{loading ? <CircularProgress size={13} /> : `تایید`}</button>
            </form>
        </DialogLayout>
    )

}

export default memo(withSnackbar(AnswerModal));

