import { useEffect, useState } from "react"
import useDownloadChunk from "../../../../../../customHook/downloadChunk"
import useStyles from './Styles'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckList from '../../../../../../assets/images/CheckList'
import { Divider, Grid, Link, MenuItem, Tooltip, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import clockIcon from '../../../../../../assets/images/Clock.svg'
import share from '../../../../../../assets/images/share.svg'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StyledMenu from "../../../../../menu/StyledMenu";
import { dateTime, numberFormat } from "../../../../../../utilities";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DownloadIcon from "../../../../../../assets/images/DownloadIcon";
import { useRouter } from "next/router";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import jMoment from "moment-jalaali";
import DetailModal from "./detailModal/DetailModal";
import clsx from "clsx";
import { getActivityAnswersByExaminee } from "../../../../../../../redux/activity";
import { errorSnackbar } from "../../../../../../../redux/user";
import PenEdit from '../../../../../../assets/images/PenEdit'
import GalleryModal from "./galleryModal/GalleryModal";
import AnswerModal from "./answerModal/AnswerModal";
import TimeCounter from "./TimeCounter";
import ResultModal from "./resultModal/ResultModal";
import { convertNumberToLetter } from "../../../../../../utilities/convertToArabicNum";
const ActivityDetail = ({ id, activityProp, examineeProp, descriptives, activityAnswersProp, startTimeProp }) => {
    const [fileDatas, downloadChunkFile] = useDownloadChunk()
    let now = new Date() * 1000 / 1000
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const activityState = useSelector((state) => state.activity.activityDetails)
    const [examinee, setExaminee] = useState(examineeProp)
    const [startTime, setStartTime] = useState(startTimeProp)
    const [activityAnswers, setActivityAnswers] = useState(activityAnswersProp)
    const activityAnswersState = useSelector((state) => state.activity.activityAnswers)

    const [activity, setActivity] = useState(activityProp)
    const [anchorEl, setAnchorEl] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryImagesIndex, setGalleryImagesIndex] = useState(0);
    const [allowedImages, setAllowedImages] = useState([])
    const [openGallery, setOpenGallery] = useState(false);
    const [openAnswer, setOpenAnswer] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState();

    const [questionImages, setQuestionImages] = useState(activity?.questionImages ? [...activity.questionImages] : []);
    const [answerImages, setAnswerImages] = useState([]);
    const [openDetail, setOpenDetail] = useState(false)
    const [submitAnswerLoading, setSubmitAnswerLoading] = useState(false)
    const [openResult, setOpenResult] = useState(false)
    const [done, setDone] = useState(examineeProp.endTime ? true : false)
    const classes = useStyles()
    const Router = useRouter();
    const Dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const [tooltipIsOpen , setTooltipIsOpen] = useState(false)

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.textColor.secondary,
            color: '#fff',
            maxWidth: 174,
            width: 174,
            height: 75,
            fontSize: 12,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    }))(Tooltip);
    useEffect(() => {
        console.log('activityAnswers', activityAnswers)
        console.log('questions', activity.questions)
        console.log('anim', answerImages)
        console.log('examineeProp', examineeProp)
    }, [])

    useEffect(() => {
        if (activityState) {
            // console.log('updated')
            setActivity(activityState)
        }
    }, [activityState])
    useEffect(() => {
        if (activityAnswersState) {
            // console.log('updated')
            setActivityAnswers(activityAnswersState)
        }
    }, [activityAnswersState])

    useEffect(() => {
        if (activityState) {
            if (activity.multiFile) {
                activity.questions?.map((question) => {
                    question.questionImages?.map((img) => {
                        downloadChunkFile(img)
                    })
                })
            } else {
                activity.questionImages?.map((img) => {
                    downloadChunkFile(img)
                })
            }
            activityAnswers.map((act) => {
                act.answerImages?.map((img) => {
                    downloadChunkFile(img)
                })
            })
            // activity.answerImages?.map((img) => {
            //     downloadChunkFile(img)
            // })
            // setLoadImages(true)
        }
    }, [activityState])


    useEffect(() => {
        // console.log('now1')
        // console.log('hay', fileDatas)
        if (fileDatas) {
            let index;
            let tmp = []

            if (activity.multiFile) {
                // let tmp = [];
                activity.questions?.map((question) => {
                    index = question.questionImages?.indexOf(fileDatas.hashCode)
                    // console.log('index', index)
                    // console.log('index', question.questionImages)
                    if (index !== -1) {
                        // tmp = [...questionImages]
                        // tmp[index] = fileDatas
                        setQuestionImages([...questionImages, fileDatas])
                        // console.log('filled', fileDatas)
                    }
                })
            }
            else {
                tmp = []
                let index = questionImages.indexOf(fileDatas.hashCode)
                if (index !== -1) {
                    tmp = [...questionImages]
                    tmp[index] = fileDatas
                    setQuestionImages([...tmp])
                }
            }

            activityAnswers?.map((act) => {
                index = act.answerImages?.indexOf(fileDatas.hashCode)
                if (index != -1 && index != undefined) {
                    // console.log(index,fileDatas )
                    setAnswerImages([...answerImages, fileDatas])
                }
            })


        }

    }, [fileDatas])

    // console.log('images', answerImages)
    // console.log('immagee', fileDatas)


    const dateRender = (date, naked = false) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(Math.floor(date / 1000));
        if (naked) {
            return (
                <>
                    <span> {day} </span>
                    <span className={classes.dateMonth}> {month} </span>
                    <span> {year} </span>
                    <span> - </span>
                    <span> {time} </span>

                </>
            );
        } else {
            return (
                <div>
                    <span> {day} </span>
                    <span className={classes.dateMonth}> {month} </span>
                    <span> {year} </span>
                    <span> - </span>
                    <span> {time} </span>
                    {/* <span>:</span>
                <span>{numberFormat.toPersianDigits(hour[1])}</span> */}
                </div>
            );
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function toFixedIfNecessary(value, dp) {
        return +parseFloat(value).toFixed(dp);
    }
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

    const handleChangeDone = async () => {
        if (done) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/end/${examinee.id}?done=false`, {});
                console.log("response:", response.data);
                setExaminee({
                    ...examinee,
                    startTime: response.data.startTime
                })
                setStartTime(response.data.startTime)
            } catch (err) {
                Dispatch(errorSnackbar(err));
                console.log("err", err);
            }
        } else {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/end/${examinee.id}?done=true`, {});
                console.log("response:", response.data);
                setExaminee({
                    ...examinee,
                    endTime: response.data.endTime
                })
            } catch (err) {
                Dispatch(errorSnackbar(err));
                console.log("err", err);
            }
        }
        setDone(!done)
    }

    const handleSubmitMultipleChoiceAnswer = async (question, choice) => {
        if (activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
            !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId &&
            !isEnded 
            // &&
            // !done
        ) {
            let ans = await activityAnswers.find(x => x.questionId == question.id)
            let body = await ans ? {
                "choice": choice,
                "examineeId": examinee.id,
                "id": ans.id,
                "questionId": question.id,
            } : {
                "choice": choice,
                "examineeId": examinee.id,
                "questionId": question.id,
            }
            try {
                const response = await axios.put(`${process.env.REACT_APP_ACTIVITY_URL}/activityAnswers`, body);
                console.log("response:", response.data);
                Dispatch(getActivityAnswersByExaminee(false, examinee.id));
            } catch (err) {
                Dispatch(errorSnackbar(err));
                console.log("err", err);
            }
        } else {
            console.log('permission denied')
        }
    }

    const handleSubmitAnswer = async (data, question) => {
        console.log('da',data)
        console.log('q',question)
        setSubmitAnswerLoading(true)
        let ans = await activityAnswers.find(x => x.questionId == question.id)
        let tmpImg = []
        data.answerImages.map((img) => {
            tmpImg.push(img.hashCode || img)
        })

        let body = await ans ? {
            "answer": data.answer,
            "examineeId": examinee.id,
            "id": ans.id,
            "questionId": question.id,
            "answerImages": tmpImg

        } : {
            "answer": data.answer,

            "examineeId": examinee.id,
            "questionId": question.id,
            "answerImages": tmpImg

        }
        try {

            const response = await axios.put(`${process.env.REACT_APP_ACTIVITY_URL}/activityAnswers`, body);
            console.log("response:", response.data);
            Dispatch(getActivityAnswersByExaminee(false, examinee.id));
            setSubmitAnswerLoading(false)
            setOpenAnswer(false)
            response.data.answerImages?.map((img) => {
                downloadChunkFile(img)
            })

        } catch (err) {
            Dispatch(errorSnackbar(err));
            console.log("err", err);
            setSubmitAnswerLoading(false)
            setOpenAnswer(false)
        }
    }
    return (
        <>

            <DetailModal
                showModal={openDetail}
                closeModal={() => setOpenDetail(false)}
                initialValues={{ ...activity }}
            />
            <ResultModal
                showModal={openResult}
                closeModal={() => setOpenResult(false)}
                initialValues={{ ...activity, answers: activityAnswers }}
                descriptives={descriptives}
            />


            <div className={classes.activityDetailContainer}>
                <div className={classes.activityHeader}>
                    <div className={classes.activityHeaderInfo}>
                        <ArrowForwardIcon onClick={() => { Router.push('/profile/dashboard/activity') }} />
                        {!isMobile && <CheckList />}
                        <div>
                            <Typography noWrap={isMobile}>{activity.activityType === 'EXAM' ? `آزمون` : activity.activityType === 'ASSIGNMENT' ? `تکلیف` : activity.activityTypeOther || `سایر`} - {activity.name}</Typography>
                            <Typography noWrap={isMobile}>{activity.user.name} - {activity.classInfo.title}</Typography>
                        </div>
                    </div>

                    {
                        (activity.startTime <= now && activity.endTime >= now && activity.active && !activity.draft && !isMobile) &&

                        <div className={classes.activityDone}>
                            <Typography onClick={handleChangeDone} style={done ? { color: theme.textColor.primary } : {}}>انجام دادم</Typography>
                            <Typography onClick={handleChangeDone} style={!done ? { color: theme.textColor.primary } : {}}>انجام ندادم</Typography>
                            <div className={classes.doneSelector} style={done ? { left: '101px' } : { left: '4px' }}></div>
                        </div>
                    }

                    <div className={classes.activityHeaderActions}>
                        {/* { */}
                        {/* (activity.startTime <= now && activity.endTime >= now && activity.active && !activity.draft) && */}
                        <HtmlTooltip
                            title={
                                <>
                                    <Typography style={{ fontSize: 12, marginBottom: 10 }} color="inherit">شروع از: {activity.startTime ? dateRender(activity.startTime, true) : `انتخاب نشده`}</Typography>
                                    <Typography style={{ fontSize: 12 }} color="inherit">تا تاریخ: {activity.endTime ? dateRender(activity.endTime, true) : `انتخاب نشده`}</Typography>

                                </>
                            }

                            aria-label={`hello`}
                            placement="bottom-end"
                            classes={{ tooltip: classes.toolTip }}
                            open={tooltipIsOpen}
                                onOpen={() => setTooltipIsOpen(true)}
                                onClose={() => setTooltipIsOpen(false)}
                        >
                            <img src={clockIcon} onClick={()=>{
                                    setTooltipIsOpen(!tooltipIsOpen)
                                    }} />
                        </HtmlTooltip>
                        {/* } */}
                        <Typography >
                            <TimeCounter
                                examinee={examinee}
                                activity={activity}
                                startTime={startTime}
                                callEnd={() => {
                                    setIsEnded(true)
                                }}
                            />
                        </Typography>


                        <MoreVertIcon
                            aria-controls="more"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.editBtnRes}
                        />
                        <StyledMenu
                            id="more"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            style={{
                                marginTop: 40,
                            }}
                        >
                            <MenuItem
                                className={classes.classDetailLink}
                                onClick={() => {
                                    setOpenDetail(true)
                                    handleClose()

                                }}
                            >
                                <Link href={`#`}>جزئیات</Link>
                            </MenuItem>
                            {isEnded && <MenuItem
                                className={classes.classDetailLink}
                                onClick={() => {
                                    setOpenResult(true)
                                    handleClose()
                                }}
                            >
                                <Link href={`#`}>نتایج</Link>
                            </MenuItem>}
                        </StyledMenu>

                    </div>
                </div>

                {(activity.startTime <= now && activity.endTime >= now && activity.active && !activity.draft && isMobile) &&

                    <div className={classes.resDoneContainer}>
                        <div className={classes.activityDone}>
                            <Typography onClick={handleChangeDone} style={done ? { color: theme.textColor.primary } : {}}>انجام دادم</Typography>
                            <Typography onClick={handleChangeDone} style={!done ? { color: theme.textColor.primary } : {}}>انجام ندادم</Typography>
                            <div className={classes.doneSelector} style={done ? { left: '101px' } : { left: '4px' }}></div>
                        </div>
                    </div>
                }

                <div className={classes.activityBody}>
                    {!activity.multiFile &&
                        <>
                        {activity.note && activity.note !== "" ? <Typography className={classes.activityNote}>{activity.note}</Typography> : null }
                            <div
                            className={classes.stuActivityDetailContainerForQues}
                            >
                                <div className={classes.stuQuestionNumbersContainer}>
                                    سوال <span>{convertNumberToLetter(1)}</span> تا <span>{convertNumberToLetter(activity.questions?.length)}</span>
                                </div>
                                <Typography className={classes.activityNote}>{activity.questionText}</Typography>
                                <div className={classes.activityQuestionImages}>
                                    {
                                        questionImages?.map((image, index) => (
                                            image?.url &&
                                            <div>
                                                <img src={image.url} />
                                                <div className={classes.overlay}>
                                                    <FullscreenIcon onClick={() => {
                                                        setGalleryImages([...questionImages])
                                                        setGalleryImagesIndex(index)
                                                        setAllowedImages(questionImages.map((image) => (image.hashCode)))


                                                        setOpenGallery(true)
                                                        // window.open(image.url, "_blank");
                                                    }} />
                                                    <DownloadIcon onClick={() => downloadFile(image)} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    }
                    {/* {activity.note && <Typography className={classes.activityNote}>{activity.note}</Typography>
                    }                    {!activity.multiFile &&
                        <>
                            <Typography className={classes.activityNote}>{activity.questionText}</Typography>
                            {(questionImages && questionImages.length > 0) && <div className={classes.activityQuestionImages}>
                                {
                                    questionImages.map((image, index) => (
                                        image.url &&
                                        <div>
                                            <img src={image.url} />
                                            <div className={classes.overlay}>
                                                <FullscreenIcon onClick={() => {
                                                    setGalleryImages([...questionImages])
                                                    setGalleryImagesIndex(index)
                                                    // setAllowedImages(questionImages)
                                                    setAllowedImages(questionImages.map((image) => (image.hashCode)))

                                                    setOpenGallery(true)
                                                    // window.open(image.url, "_blank");
                                                }} />
                                                <DownloadIcon onClick={() => downloadFile(image)} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>}
                        </>
                    } */}
                    <div className={classes.questionsContainer}>
                        {
                            activity.questions.map((question, index) => (

                                <div className={classes.questionItem}>
                                    <div className={classes.questionTitle}>
                                        <div className={classes.questionNumber}>{numberFormat.toPersianDigits(index + 1)}</div>
                                        <Typography>
                                            {activity.multiFile ?
                                                question.questionText :
                                                question.questionType === 'MULTIPLE_CHOICE' ?
                                                    `گزینه صحیح را در زیر مشخص کنید`
                                                    : `پاسخ خود را به صورت عکس یا نوشته وارد نمایید`}
                                        </Typography>
                                    </div>
                                    {/* <div className={classes.questionImagesContainer}> */}
                                    {activity.multiFile &&
                                        <div className={classes.activityQuestionImages}>

                                            {
                                                question.questionImages?.map((hashCode) => {
                                                    let image;
                                                    let index = questionImages.findIndex(x => x?.hashCode === hashCode)
                                                    // console.log(index)
                                                    if (index !== -1) image = questionImages[index]
                                                    return (
                                                        image?.url &&
                                                        <div>
                                                            <img src={image.url} />
                                                            <div className={classes.overlay}>
                                                                <FullscreenIcon onClick={() => {
                                                                    setGalleryImages([...questionImages])
                                                                    setGalleryImagesIndex(index)
                                                                    setAllowedImages(question.questionImages)
                                                                    setOpenGallery(true)
                                                                    // window.open(image.url, "_blank");
                                                                }} />
                                                                <DownloadIcon onClick={() => downloadFile(image)} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    }

                                    <div className={classes.questionItemFooter}>
                                        {
                                            question.questionType === 'MULTIPLE_CHOICE' &&
                                            <>
                                                {isMobile ?
                                                    <>
                                                        <div className={classes.questionMultipleChoice}>
                                                            <Typography noWrap>پاسخ شما : </Typography>
                                                            {activityAnswers.find(x => x.questionId == question.id)?.answerAt && dateRender(activityAnswers.find(x => x.questionId == question.id)?.answerAt)}

                                                        </div>
                                                        <div className={classes.questionAnswerTime}>
                                                            <Grid container className={classes.choicesContainer}>


                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 1)
                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 1 && classes.selectedChoice, (isEnded 
                                                                            // || done
                                                                        ) && classes.disableChoice)}>الف</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {

                                                                            handleSubmitMultipleChoiceAnswer(question, 2)
                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 2 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>ب</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 3)

                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 3 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>ج</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 4)

                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 4 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>د</div>
                                                                </Grid>

                                                            </Grid>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className={classes.questionMultipleChoice}>
                                                            <Typography noWrap>پاسخ شما : </Typography>
                                                            <Grid container className={classes.choicesContainer}>


                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 1)
                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 1 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>الف</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {

                                                                            handleSubmitMultipleChoiceAnswer(question, 2)
                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 2 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>ب</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 3)

                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 3 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>ج</div>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                                                    <div
                                                                        onClick={() => {
                                                                            handleSubmitMultipleChoiceAnswer(question, 4)

                                                                        }}
                                                                        className={clsx(activityAnswers.find(x => x.questionId == question.id)?.choice == 4 && classes.selectedChoice, (isEnded 
                                                                        // || done
                                                                        ) && classes.disableChoice)}>د</div>
                                                                </Grid>

                                                            </Grid>
                                                        </div>
                                                        <div className={classes.questionAnswerTime}>
                                                            {activityAnswers.find(x => x.questionId == question.id)?.answerAt && dateRender(activityAnswers.find(x => x.questionId == question.id)?.answerAt)}
                                                        </div>
                                                    </>
                                                }

                                            </>
                                        }
                                        {
                                            question.questionType === 'DESCRIPTIVE' &&

                                            <div className={classes.descriptiveAnswerContainer}>
                                                {
                                                    activityAnswers.find(x => x.questionId == question.id) ?
                                                        <>
                                                            <div className={classes.descriptiveTitle}>
                                                                <div>
                                                                    <Typography>پاسخ شما  </Typography>
                                                                    {
                                                                        (activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
                                                                            !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId &&
                                                                            !isEnded 
                                                                            // &&
                                                                            // !done
                                                                        ) &&
                                                                        <PenEdit onClick={() => {
                                                                            if (activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
                                                                                !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId &&
                                                                                !isEnded 
                                                                                // &&
                                                                                // !done
                                                                            ) {
                                                                                setSelectedQuestion(question)
                                                                                setOpenAnswer(true)
                                                                            }
                                                                        }} />
                                                                    }
                                                                </div>
                                                                <div className={clsx(classes.questionAnswerTime, isMobile && classes.widthAuto)}>
                                                                    {activityAnswers.find(x => x.questionId == question.id)?.answerAt && dateRender(activityAnswers.find(x => x.questionId == question.id)?.answerAt)}
                                                                </div>
                                                            </div>
                                                            <div className={classes.descriptiveAnswerText}>
                                                                <Typography className={classes.activityNote}>{activityAnswers.find(x => x.questionId == question.id)?.answer}</Typography>
                                                                <div className={classes.activityQuestionImages} style={{ padding: 0 }}>
                                                                    {
                                                                        activityAnswers.find(x => x.questionId == question.id)?.answerImages?.map((hashCode) => {
                                                                            let image;
                                                                            let index = answerImages.findIndex(x => x?.hashCode === hashCode)

                                                                            // console.log(index)
                                                                            if (index !== -1) image = answerImages[index]
                                                                            return (
                                                                                image?.url &&
                                                                                <div>
                                                                                    <img src={image.url} />
                                                                                    <div className={classes.overlay}>
                                                                                        <FullscreenIcon onClick={() => {
                                                                                            setGalleryImages([...answerImages])
                                                                                            setAllowedImages([...activityAnswers.find(x => x.questionId == question.id)?.answerImages])
                                                                                            setGalleryImagesIndex(index)

                                                                                            setOpenGallery(true)
                                                                                            // window.open(image.url, "_blank");
                                                                                        }} />
                                                                                        <DownloadIcon onClick={() => downloadFile(image)} />
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        (activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
                                                            !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId &&
                                                            !isEnded
                                                            //  &&
                                                            // !done
                                                        ) &&
                                                        <Typography onClick={() => {
                                                            if (activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
                                                                !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId &&
                                                                !isEnded
                                                                //  &&
                                                                // !done
                                                            ) {
                                                                setSelectedQuestion(question)
                                                                setOpenAnswer(true)
                                                            }
                                                        }} className={classes.addAnswerBtn}>ثبت پاسخ</Typography>
                                                }
                                            </div>

                                        }


                                    </div>
                                    <div className={classes.questionItemScoreContainer}>
                                        <div className={classes.questionScore}>
                                            {(activityAnswers.find(x => x.questionId == question.id)?.scoring == undefined &&
                                                !activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId) &&
                                                <>
                                                    {(isEnded && (examineeProp.descriptivePartName || examineeProp.scoring !== undefined)) ?
                                                        examineeProp.descriptivePartName ?
                                                            <Typography style={{ color: theme.textColor.percent50 }}>{examineeProp.descriptivePartName}</Typography>
                                                            :
                                                            <Typography style={{ color: theme.textColor.percent50 }}>{numberFormat.toPersianDigits(toFixedIfNecessary(examineeProp.scoring,2)) + ' از ' + numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))}</Typography>
                                                        :
                                                        <Typography style={{ color: theme.textColor.percent50 }}>نتیجه اعلام نشده</Typography>

                                                    }
                                                    
                                                    {
                                                        question.score != undefined &&
                                                        <Typography style={{ color: theme.textColor.secondary }}>بارم {numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))}</Typography>


                                                    }
                                                </>
                                            }

                                            {(activityAnswers.find(x => x.questionId == question.id)?.scoring != undefined ||
                                                activityAnswers.find(x => x.questionId == question.id)?.descriptivePartId) &&
                                                <>
                                                    <Typography style={{ color: theme.textColor.secondary }}>نتیجه: {
                                                        activityAnswers.find(x => x.questionId == question.id)?.scoring != undefined ?
                                                            <p style={{ display: 'inline', margin: 0 }}>
                                                                <span style={{ display: 'inline-block', direction: 'ltr' }}>{numberFormat.toPersianDigits(toFixedIfNecessary(activityAnswers.find(x => x.questionId == question.id)?.scoring,2))}</span> از  {numberFormat.toPersianDigits(toFixedIfNecessary(question.score,2))}
                                                            </p>
                                                            :
                                                            activityAnswers.find(x => x.questionId == question.id)?.descriptivePartName
                                                    }</Typography>
                                                    <Typography>

                                                        {activityAnswers.find(x => x.questionId == question.id)?.correctedAt && dateRender(activityAnswers.find(x => x.questionId == question.id)?.correctedAt)}
                                                    </Typography>
                                                </>
                                            }

                                        </div>
                                        {activityAnswers.find(x => x.questionId == question.id)?.note &&
                                            <div className={classes.questionNote}>
                                                <Typography>
                                                    {activityAnswers.find(x => x.questionId == question.id)?.note}
                                                </Typography>
                                            </div>}
                                    </div>
                                </div>
                            )
                            )
                        }

                    </div>

                </div>
            </div>
            {openGallery && <GalleryModal

                open={openGallery}
                closeModal={() => { setOpenGallery(false) }}
                imagesProp={galleryImages}
                imagesIndexProp={galleryImagesIndex}
                allowedImages={allowedImages}
            />}

            {openAnswer &&
                <AnswerModal
                    open={openAnswer}
                    closeModal={() => { setOpenAnswer(false) }}
                    initialValues={() => {
                        let ans = activityAnswers.find(x => x.questionId == selectedQuestion.id)
                        if (ans) {
                            return {
                                ...ans
                            }
                        } else {
                            return {}
                        }

                    }}
                    question={selectedQuestion}
                    handelStep={(data, question) => { handleSubmitAnswer(data, question) }}
                    loading={submitAnswerLoading}
                />}
        </>
    )
}


export default ActivityDetail