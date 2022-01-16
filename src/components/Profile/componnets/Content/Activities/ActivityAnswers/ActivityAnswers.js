import { useEffect, useState } from "react"
import useDownloadChunk from "../../../../../../customHook/downloadChunk"
import useStyles from './Styles'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckList from '../../../../../../assets/images/CheckList'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { dateTime, numberFormat } from "../../../../../../utilities";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DownloadIcon from "../../../../../../assets/images/DownloadIcon";
import { useRouter } from "next/router";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import ProfileAvatar from "../../../../../ProfileAvatar/ProfileAvatar";
import AddScoreDialog from './AddScoreDialog/AddScoreDialog';
import { getActivityExaminees } from "../../../../../../../redux/activity";
import { errorSnackbar } from "../../../../../../../redux/user";
import PenEdit from "../../../../../../assets/images/PenEdit";
import clsx from "clsx";
import GalleryModal from "../../UserActivities/ActivityDetail/galleryModal/GalleryModal";

const ActivityAnswers = ({ id, activityProp, questionId, examineesProp, descriptives }) => {
    const [fileDatas, downloadChunkFile] = useDownloadChunk()
    let now = new Date() * 1000 / 1000
    const activityState = useSelector((state) => state.activity.activityDetails)
    const [activity, setActivity] = useState(activityProp)
    const examineesState = useSelector((state) => state.activity.activityExaminees)
    const [examinees, setExaminees] = useState(examineesProp)
    const [answerImages, setAnswerImages] = useState(activity?.answerImages ? [...activity.answerImages] : []);
    const [allowedImages, setAllowedImages] = useState([])

    const [question, setQuestion] = useState(activity.questions.find(x => x.id == questionId))
    const [questionExaminees, setQuestionExaminees] = useState()
    const [openAddScore, setOpenAddScore] = useState(false)
    const [selectedExaminee, setSelectedExaminee] = useState()
    const [loading, setLoading] = useState(false)
    const [examineeImages, setExamineeImages] = useState();

    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryImagesIndex, setGalleryImagesIndex] = useState(0);
    const [openGallery, setOpenGallery] = useState(false);

    const classes = useStyles()
    const Router = useRouter();
    const Dispatch = useDispatch()

    useEffect(() => {
        if (!examineeImages) {
            let index;
            let tmp = []
            examinees?.map((user) => {
                index = user.answers.findIndex(x => x.questionId == question.id)
                if (index != -1) {
                    user.answers[index].answerImages?.map((img) => {
                        tmp.push(img)
                    })
                }
            })
            setExamineeImages([...tmp])
        }
    }, [examineeImages])
    useEffect(() => {
        if (activityState) {
            setActivity(activityState)
        }
    }, [activityState])
    function toFixedIfNecessary(value, dp) {
        return +parseFloat(value).toFixed(dp);
    }
    useEffect(() => {
        if (examineesState) {
            setExaminees(examineesState)
            let tmp = []
            let index;
            examineesState.map((user) => {
                index = user.answers.findIndex(x => x.questionId == question.id)
                if (index !== -1) {

                    tmp.push({
                        ...user.answers[index],
                        examineeId: user.id,
                        startTime: user.startTime,
                        endTime: user.endTime,
                        user: {
                            firstName: user.memberInfo.firstName ? user.memberInfo.firstName : null,
                            lastName: user.memberInfo.lastName ? user.memberInfo.lastName : null,
                            phone: user.memberInfo.phone,
                            image: user.memberInfo.profile ? user.memberInfo.profile : null,
                        }
                    })
                }
            })
            setQuestionExaminees([...tmp])
        }
    }, [examineesState])

    useEffect(() => {
        if (activityState) {
            if (activity.multiFile) {
                question.answerImages?.map((img) => {
                    downloadChunkFile(img)
                })
            } else {
                activity.answerImages?.map((img) => {
                    downloadChunkFile(img)
                })
            }
        }
    }, [activityState])

    useEffect(() => {
        if (examineeImages) {
            examineeImages?.map((img) => {
                typeof img !== 'object' && downloadChunkFile(img)
            })
        }
    }, [examineeImages])

    useEffect(() => {
        if (fileDatas) {
            let tmp = []
            if (activity.multiFile) {
                let index;
                index = question.answerImages?.indexOf(fileDatas.hashCode)
                if (index !== -1) {
                    setAnswerImages([...answerImages, fileDatas])
                }
            }
            else {
                tmp = []
                let index = answerImages.indexOf(fileDatas.hashCode)
                if (index !== -1) {
                    tmp = [...answerImages]
                    tmp[index] = fileDatas
                    setAnswerImages([...tmp])
                }
            }
            tmp = []
            let index = examineeImages.indexOf(fileDatas.hashCode)
            if (index !== -1) {
                tmp = [...examineeImages]
                tmp[index] = fileDatas
                setExamineeImages([...tmp])
            }
        }
    }, [fileDatas])

    const dateRender = (date, hasTime = true) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(Math.floor(date / 1000));
        return (
            hasTime ?
                <div>
                    <span>{day}</span>
                    <span className={classes.dateMonth}>{month}</span>
                    <span>{year}</span>
                    <span> - </span>
                    <span>{time}</span>
                </div>
                :
                <>
                    <span>{day}</span>
                    <span className={classes.dateMonth}> {month} </span>
                    <span>{year}</span>
                </>
        )
    };
    const downloadFile = (file) => {
        if (file.mimeType === "image/jpeg") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.jpg');
            tempLink.click();
        } else if (file.mimeType === "image/png") {
            let tempLink = document.createElement('a');
            tempLink.href = file.url;
            tempLink.setAttribute('download', 'activity.png');
            tempLink.click();
        }
    }
    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityAnswers/correct`, {
                ...values
            });
            Dispatch(getActivityExaminees(false, activity.id));
            setLoading(false)
            setOpenAddScore(false)
        } catch (err) {
            Dispatch(errorSnackbar(err));
            setLoading(false)
            setOpenAddScore(false)
        }
    }

    const editImage = (image) => {
        console.log(':)')
    }

    const renderShowCorrectionAnswer = (examinee) => {
        now = new Date() * 1000 / 1000
        let diff = (activity.endTime - now) / 1000
        if (diff <= 0) {
            return (
                <Typography
                    className={classes.addScoreBtn}
                    onClick={async () => {
                        await setSelectedExaminee(examinee)
                        await setOpenAddScore(true)
                    }}
                >نتیجه</Typography>
            )
        } else {
            return ('')
        }
    }

    const renderName = (user) => {
        let name = ''
        if (user.firstName)
            name += user.firstName
        
        if (user.lastName)
            name += ' ' + user.lastName
        
        if (!user.firstName && !user.lastName)
            name += user.phone

        return name
    }

    const renderUserChoice = (choice) => {
        switch (choice) {
            case 1:
                return 'الف'

            case 2:
                return 'ب'

            case 3:
                return 'ج'

            case 4:
                return 'د'
        }
    }
    return (
        <>
            {openGallery &&
                <GalleryModal
                    allowedImages={allowedImages}
                    open={openGallery}
                    closeModal={() => { setOpenGallery(false) }}
                    imagesProp={galleryImages}
                    imagesIndexProp={galleryImagesIndex}
                />}
            {openAddScore &&
                <AddScoreDialog
                    open={openAddScore}
                    closeModal={() => setOpenAddScore(false)}
                    selectedExaminee={selectedExaminee}
                    question={question}
                    handleSubmitScore={handleSubmit}
                    loading={loading}
                    descriptives={descriptives}
                    activity={activity}
                />}
            <div className={classes.activityDetailContainer} >
                <div className={classes.activityHeader}>
                    <div className={classes.activityHeaderInfo}>
                        <ArrowForwardIcon onClick={() => { Router.push('/profile/dashboard/ostad/activity/' + activity.id) }} />
                        <CheckList />
                        <div>
                            <Typography noWrap style={{ maxWidth: 150 }}>{activity.activityType === 'EXAM' ? `آزمون` : activity.activityType === 'ASSIGNMENT' ? `تکلیف` : activity.activityTypeOther || `سایر`} - {activity.name}</Typography>
                            <Typography noWrap style={{ maxWidth: 150 }}>سوال {numberFormat.toPersianDigits(activity.questions.findIndex(x => x.id == questionId) + 1)}</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.activityBody}>
                    {activity.multiFile ?
                        <div className={classes.questionItem}>
                            <div className={classes.questionTitle} style={question.answerImages && (activity?.answerText || answerImages?.length !== 0) ? { marginBottom: 39 } : { marginBottom: 0 }}>
                                {(question.answerText || answerImages?.length !== 0) ?
                                    <Typography>پاسخ صحیح</Typography> :
                                    <Typography>بدون پاسخ</Typography>
                                }
                            </div>
                            <Typography>{question.answerText}</Typography>
                            {(activity.answerText || answerImages?.length !== 0) &&
                                <div className={classes.activityQuestionImages} style={question?.answerImages?.length > 0 ? { marginBottom: 16 } : { marginBottom: 0 }}>
                                    {
                                        question.answerImages?.map((hashCode) => {
                                            let image;
                                            let index = answerImages.findIndex(x => x?.hashCode === hashCode)
                                            if (index !== -1) image = answerImages[index]
                                            return (
                                                image?.url &&
                                                <div>
                                                    <img src={image.url} />
                                                    <div className={classes.overlay}>
                                                        <FullscreenIcon onClick={() => {
                                                            setGalleryImages([...answerImages])
                                                            setGalleryImagesIndex(index)
                                                            setOpenGallery(true)
                                                            setAllowedImages(question.answerImages)
                                                        }} />
                                                        <DownloadIcon onClick={() => downloadFile(image)} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                        :
                        <>
                            {
                                <div className={classes.questionItem}>
                                    <div className={classes.questionTitle} style={question.answerImages && (activity?.answerText || answerImages?.length !== 0) ? { marginBottom: 39 } : {}}>
                                        {(activity.answerText || answerImages?.length !== 0) ?
                                            <Typography>پاسخ صحیح</Typography> :
                                            <Typography>بدون پاسخ</Typography>
                                        }
                                        <div className={classes.activityHeaderActions}>
                                            {
                                                question.score &&
                                                <Typography className={classes.barom}>بارم : {numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))} نمره</Typography>
                                            }
                                        </div>
                                    </div>
                                    <Typography>{activity.answerText}</Typography>
                                    <div className={classes.activityQuestionImages} style={answerImages?.length > 0 ? { marginBottom: 16 } : { marginBottom: 0 }}>
                                        {
                                            answerImages.map((image, index) => (
                                                image.url &&
                                                <div>
                                                    <img src={image.url} />
                                                    <div className={classes.overlay}>
                                                        <FullscreenIcon onClick={() => {
                                                            setGalleryImages([...answerImages])
                                                            setGalleryImagesIndex(index)
                                                            setOpenGallery(true)
                                                            setAllowedImages(answerImages.map((answerImage) => (answerImage.hashCode)))

                                                        }} />
                                                        <DownloadIcon onClick={() => downloadFile(image)} />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </>
                    }
                    {
                        questionExaminees?.map((examinee, index) => (
                            <div className={classes.answersContainer}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        className={classes.accordionSummaryContainer}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <div className={clsx(classes.answerItem)}>
                                            <div className={classes.answerDetail}>
                                                <ProfileAvatar user={examinee.user} variant="circle"
                                                    avatar={classes.avatar}
                                                    avatarContainer={classes.avatarContainer}
                                                />
                                                <div>
                                                    <Typography>{renderName(examinee.user)}</Typography>
                                                    <Typography>
                                                        {Math.floor(examinee.answerAt / 1000)!==NaN && dateRender(examinee.answerAt)}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className={classes.accordionDetContainer}
                                    >
                                        <div className={clsx((examinee.answerImages || examinee.answer))}>
                                            <div className={classes.answerShow} style={{ padding: '0px' }}>
                                                {
                                                    question.questionType === 'MULTIPLE_CHOICE' &&
                                                    <Typography>گزینه {renderUserChoice(examinee.choice)}</Typography>
                                                }
                                            </div>
                                            {examinee.answer && <Typography className={classes.activityNote}>
                                                {examinee.answer}
                                            </Typography>}
                                            {examinee.answerImages &&
                                                <div className={classes.activityQuestionImages} style={examineeImages?.length > 0 ? { marginBottom: 16 } : { marginBottom: 0 }}>
                                                    {
                                                        examineeImages.map((image, index) => (
                                                            (image.url && examinee.answerImages?.indexOf(image.hashCode) !== -1) &&
                                                            <div>
                                                                <img src={image.url} />
                                                                <div className={classes.overlay}>
                                                                    <FullscreenIcon onClick={() => {
                                                                        setGalleryImages([...examineeImages])
                                                                        setGalleryImagesIndex(index)
                                                                        setOpenGallery(true)
                                                                        setAllowedImages(examinee.answerImages)
                                                                    }} />
                                                                    <PenEdit onClick={() => editImage(image)} />
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>}
                                        </div>
                                        {
                                            (examinee.scoring === undefined && examinee.descriptivePartId === undefined) ?
                                                <div className={classes.answerItemFooter} style={{ borderTop: 'none' }}>

                                                    {renderShowCorrectionAnswer(examinee)}
                                                </div>
                                                :
                                                <div className={classes.answerItemFooter}>
                                                    <div className={classes.userScoreContainer}>
                                                        <div>
                                                            <div className={classes.scoreDateContainer}>
                                                                <Typography>نتیجه : &nbsp;
                                                                    {
                                                                        examinee.scoring !== undefined ?
                                                                            <p style={{ display: 'inline', margin: 0 }}>
                                                                                <span style={{ display: 'inline-block', direction: 'ltr' }}>
                                                                                    {numberFormat.toPersianDigits(toFixedIfNecessary(examinee.scoring,2))}
                                                                                </span> از
                                                                                {numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))} نمره
                                                                            </p>
                                                                            :
                                                                            examinee.descriptivePartName
                                                                    }
                                                                </Typography>
                                                                <Typography>تاریخ : {Math.floor(examinee.correctedAt / 1000)!==NaN && dateRender(examinee.correctedAt, false)}</Typography>
                                                            </div>
                                                            <div className={classes.editScoreContainer}>
                                                                <Typography
                                                                    onClick={async () => {
                                                                        await setSelectedExaminee(examinee)
                                                                        await setOpenAddScore(true)
                                                                    }}
                                                                >ویرایش</Typography>
                                                            </div>
                                                        </div>
                                                        <div className={classes.scoreNote}>
                                                            <Typography>
                                                                {examinee.note}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ActivityAnswers